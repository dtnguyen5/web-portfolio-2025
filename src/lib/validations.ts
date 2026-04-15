import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Jméno musí mít alespoň 2 znaky' })
    .max(100, { message: 'Jméno nesmí být delší než 100 znaků' }),
  email: z
    .string()
    .email({ message: 'Prosím, zadejte platný e-mailový údaj' })
    .max(255, { message: 'E-mail nesmí být delší než 255 znaků' }),
  message: z
    .string()
    .min(10, { message: 'Zpráva musí mít alespoň 10 znaků' })
    .max(5000, { message: 'Zpráva nesmí být delší než 5000 znaků' }),
  honeypot: z
    .string()
    .max(0, { message: 'Spam detekce selhala' })
    .optional()
    .default(''),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
