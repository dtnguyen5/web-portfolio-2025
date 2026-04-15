'use client'

import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import '../app/contacts/contacts.scss'

interface ContactFormProps {
  onSuccess?: () => void
}

const ContactForm: FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      honeypot: '',
    },
  })

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Chyba při odesílání formuláře')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Vaše zpráva byla úspěšně odeslána! Brzy se vám ozveme.',
      })

      // Reset formuláře po úspěšném odeslání
      reset()

      // Zavolej callback
      onSuccess?.()

      // Skryj zprávu o úspěchu po 5 sekundách
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'Došlo k chybě při odesílání',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Honeypot pole (skryté) */}
      <input
        type="text"
        {...register('honeypot')}
        style={{ display: 'none' }}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />

      {/* Status zpráva */}
      {submitStatus.type && (
        <div
          className={
            submitStatus.type === 'success'
              ? 'contacts-message-success'
              : 'contacts-message-error'
          }
          role="alert"
        >
          {submitStatus.message}
        </div>
      )}

      {/* Pole Jméno */}
      <div className="flex flex-col gap-2">
        <input
          id="name"
          type="text"
          placeholder="Vaše jméno"
          disabled={isSubmitting}
          className="contacts-input"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-sm text-red-600" style={{ marginLeft: '2.5%' }}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Pole E-mail */}
      <div className="flex flex-col gap-2">
        <input
          id="email"
          type="email"
          placeholder="Váš e-mail"
          disabled={isSubmitting}
          className="contacts-input"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-red-600" style={{ marginLeft: '2.5%' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Pole Zpráva */}
      <div className="flex flex-col gap-2">
        <textarea
          id="message"
          placeholder="Vaše zpráva..."
          disabled={isSubmitting}
          className="contacts-textarea"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-red-600" style={{ marginLeft: '2.5%' }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Odeslat tlačítko */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="contacts-submit-button"
      >
        {isSubmitting ? 'Odesílání...' : 'Odeslat zprávu'}
      </button>
    </form>
  )
}

export default ContactForm
