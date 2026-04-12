import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS, { type IconKey } from "@/constants/icons"
import contentData from "@/data/content.json"
import "./Footer.scss"

const { footer } = contentData

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-root">
      <div className="footer-container">
        {/* Hlavní obsah - 4 sloupce */}
        <div className="footer-content">
          {/* Logo a popis */}
          <div className="footer-column">
            <h3 className="footer-logo">
              <span className="footer-logo-name">{footer.logo.primary}</span>{" "}
              <span className="footer-logo-accent">{footer.logo.secondary}</span>
            </h3>
            <p className="footer-description">
              {footer.descriptionLines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < footer.descriptionLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Navigace */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <Image src="/paper-plane-solid-full.svg" alt="Navigace" width={20} height={20} className="footer-heading-icon" />
              {footer.navigationHeading}
            </h4>
            <nav className="footer-nav">
              {footer.navigationLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sociální sítě */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <Image src="/share-nodes-solid-full.svg" alt="Sociální sítě" width={20} height={20} className="footer-heading-icon" />
              {footer.socialHeading}
            </h4>
            <div className="footer-social">
              {footer.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={ICONS[link.iconKey as IconKey] as IconProp} />
                </a>
              ))}
            </div>
          </div>

          {/* Kontakty */}
          <div className="footer-column">
            <h4 className="footer-heading">{footer.contactsHeading}</h4>
            <div className="footer-contacts">
              <a href={footer.contacts.phoneHref} className="footer-contact-link">
                <Image src="/phone-solid-full.svg" alt="Telefon" width={24} height={24} className="footer-contact-icon" />
                {footer.contacts.phone}
              </a>
              <a href={footer.contacts.emailHref} className="footer-contact-link">
                <Image src="/envelope-solid-full.svg" alt="Email" width={24} height={24} className="footer-contact-icon" />
                {footer.contacts.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {footer.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer