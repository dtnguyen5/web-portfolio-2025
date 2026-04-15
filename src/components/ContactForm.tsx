'use client'

import { FC } from 'react'
import { useContactForm } from '@/hooks/useContactForm'
import '../app/contacts/contacts.scss'

interface ContactFormProps {
  onSuccess?: () => void
}

const ContactForm: FC<ContactFormProps> = ({ onSuccess }) => {
  const { form, onSubmit, isSubmitting, submitStatus } = useContactForm(onSuccess)
  const { register, handleSubmit, formState: { errors } } = form

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
