
'use client'

import { FC, useState } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ICONS, { IconKey } from '@/constants/icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import content from '@/data/content.json'
import './contacts.scss'

interface ContactFormState {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

const ContactsPage: FC = () => {
  const { contacts } = content
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Prosím, vyplňte své jméno' })
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Prosím, zadejte platný e-mail' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Prosím, napište zprávu' })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setStatus({ type: 'loading' })

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Vaše zpráva byla úspěšně odeslána!',
        })
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus({ type: 'idle' }), 5000)
      } else {
        setStatus({
          type: 'error',
          message: 'Chyba při odesílání zprávy. Prosím zkuste později.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Chyba při odesílání zprávy. Prosím zkuste později.',
      })
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col contacts-root">
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <section className="w-full flex justify-center pb-12 md:pb-16 lg:pb-20" style={{paddingTop: '60px'}}>
          <div className="w-[92%] max-w-[1250px] flex flex-col items-center gap-12 md:gap-14">
            {/* Title */}
            <div className="w-full flex flex-col items-center gap-3 mt-20 animate-slide-in-up">
              <h1 className="text-4xl font-bold font-poppins contacts-title">
                {contacts.title}
              </h1>
              <span className="w-[78px] h-[4px] rounded-full contacts-title-underline" />
            </div>

            {/* Content grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 animate-stagger">
              {/* Social links column */}
              <div className="flex flex-col gap-9 lg:col-span-2">
                {contacts.socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacts-social-link"
                  >
                    <div className="contacts-social-icon">
                      <FontAwesomeIcon icon={ICONS[link.iconKey as IconKey]} />
                    </div>
                    <div className="contacts-social-content">
                      <h3 className="contacts-social-label">{link.label}</h3>
                      <p className="contacts-social-desc">{link.description}</p>
                    </div>
                    <div className="contacts-arrow">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </a>
                ))}
              </div>

              {/* Form column */}
              <div className="flex flex-col lg:col-span-3">
                <div className="contacts-form-card">
                <h2 className="contacts-form-title">
                  <FontAwesomeIcon icon={ICONS['envelope']} className="inline mr-2" />
                  {contacts.formTitle}
                </h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={contacts.form.namePlaceholder}
                        className="contacts-input"
                        disabled={status.type === 'loading'}
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={contacts.form.emailPlaceholder}
                        className="contacts-input"
                        disabled={status.type === 'loading'}
                      />
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-2">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={contacts.form.messagePlaceholder}
                        className="contacts-textarea"
                        rows={6}
                        disabled={status.type === 'loading'}
                      />
                    </div>

                    {/* Status messages */}
                    {status.type === 'error' && (
                      <div className="contacts-message-error">
                        {status.message}
                      </div>
                    )}
                    {status.type === 'success' && (
                      <div className="contacts-message-success">
                        {status.message}
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="contacts-submit-button"
                      disabled={status.type === 'loading'}
                    >
                      {status.type === 'loading' ? 'Odesílání...' : contacts.form.submitButton}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactsPage