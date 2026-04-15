
'use client'

import { FC } from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import ContactForm from '@/components/ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ICONS, { IconKey } from '@/constants/icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import content from '@/data/content.json'
import './contacts.scss'

const ContactsPage: FC = () => {
  const { contacts } = content

  return (
    <div className="min-h-screen w-full flex flex-col contacts-root">
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <section className="w-full flex justify-center pb-8 md:pb-12 lg:pb-14" style={{paddingTop: '60px'}}>
          <div className="w-[92%] max-w-[1250px] flex flex-col items-center gap-12 md:gap-14">
            {/* Title */}
            <div className="w-full flex flex-col items-center gap-3 mt-20 animate-slide-in-up">
              <h1 className="text-4xl font-bold font-poppins contacts-title">
                {contacts.title}
              </h1>
              <span className="w-[200px] h-[4px] rounded-full contacts-title-underline" />
            </div>

            {/* Content grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-12 animate-stagger">
              {/* Social links column */}
              <div className="flex flex-col gap-9 lg:col-span-2">
                {contacts.socialLinks.map((link) => (
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
                    <FontAwesomeIcon icon={ICONS['envelope']} className="w-7 h-7 flex-shrink-0" />
                    {contacts.formTitle}
                  </h2>
                  <ContactForm />
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