import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    // TODO: Parse and validate request body (name, email, message).
    const body = await request.json()
    const { name, email, message } = body

    // TODO: Call email library to send the message.
    await sendContactEmail({ name, email, message })

    // TODO: Optional logging/analytics.
    console.log('New web message:', { name, email, message })

    return NextResponse.json({ message: 'Zpráva byla úspěšně přijata' }, { status: 200 })
  } catch (error) {
    // TODO: Map validation or transport errors to user-friendly messages.
    return NextResponse.json({ error: 'Chyba při zpracování dat' }, { status: 500 })
  }
}