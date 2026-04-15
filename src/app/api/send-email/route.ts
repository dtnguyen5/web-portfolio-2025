'use server'

import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { contactFormSchema } from '@/lib/validations'
import { NextResponse } from 'next/server'

// Inicializace rate limiteru
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 zpráv za hodinu
})

export async function POST(request: Request) {
  try {
    // Inicializace Resend uvnitř funkce
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Získání IP adresy
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Kontrola rate limitingu
    const { success } = await ratelimit.limit(ip)

    if (!success) {
      return NextResponse.json(
        { error: 'Příliš mnoho pokusů. Zkuste znovu později.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validace dat
    const validatedData = contactFormSchema.parse(body)

    // Kontrola honeypot pole (pokud není prázdné, jedná se o spam)
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: 'Formulář nebyl správně vyplněn' },
        { status: 400 }
      )
    }

    // Odeslání e-mailu
    const result = await resend.emails.send({
      from: 'noreply@resend.dev', // Nahraďte vaší domenou
      to: process.env.CONTACT_EMAIL || '',
      replyTo: validatedData.email,
      subject: `Nová zpráva z kontaktního formuláře od ${validatedData.name}`,
      html: `
        <h2>Nová zpráva z webových stránek</h2>
        <p><strong>Jméno:</strong> ${escapeHtml(validatedData.name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(validatedData.email)}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${escapeHtml(validatedData.message).replace(/\n/g, '<br>')}</p>
      `,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { error: 'Nepodařilo se odeslat e-mail' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'E-mail byl úspěšně odeslán' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)

    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Chyba: ${error.message}` },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Došlo k neznámé chybě' },
      { status: 500 }
    )
  }
}

// Funkce pro escapování HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
