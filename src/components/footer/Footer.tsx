import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import "./Footer.scss"

const NAVIGATION_LINKS = [
  { href: "/", label: "Domů" },
  { href: "/about", label: "O mně" },
  { href: "/projects", label: "Projekty" },
  { href: "/contacts", label: "Kontakt" },
]

const SOCIAL_LINKS = [
  { href: "#", icon: ICONS.instagram, label: "Instagram" },
  { href: "#", icon: ICONS.linkedin, label: "LinkedIn" },
  { href: "#", icon: ICONS.facebook, label: "Facebook" },
  { href: "#", icon: ICONS.github, label: "GitHub" },
]

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
              <span className="footer-logo-name">Nguyen</span>{" "}
              <span className="footer-logo-accent">Duy Tiep</span>
            </h3>
            <p className="footer-description">
              Front-end developer se specializací na UI/UX,<br />
              moderní webové technologie a tvorbu plynulých<br />
              digitálních zážitků s čistým kódem a kreativním<br />
              tokem.
            </p>
          </div>

          {/* Navigace */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <FontAwesomeIcon icon={ICONS.desktop} className="footer-heading-icon" />
              Navigace
            </h4>
            <nav className="footer-nav">
              {NAVIGATION_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Sociální sítě */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <FontAwesomeIcon icon={ICONS.code} className="footer-heading-icon" />
              Najdete mě na
            </h4>
            <div className="footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Kontakty */}
          <div className="footer-column">
            <h4 className="footer-heading">Kontakty</h4>
            <div className="footer-contacts">
              <a href="tel:+420608088388" className="footer-contact-link">
                <FontAwesomeIcon icon={ICONS.desktop} className="footer-contact-icon" />
                +420 608 088 388
              </a>
              <a href="mailto:duytiepn1@gmail.com" className="footer-contact-link">
                <FontAwesomeIcon icon={ICONS.code} className="footer-contact-icon" />
                duytiepn1@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Nguyen Duy Tiep
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer