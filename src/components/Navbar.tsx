"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks: { label: string; href: string }[] = [
    { label: "Domů", href: "/" },
    { label: "O mně", href: "/about" },
    { label: "Projekty", href: "/projects" },
    { label: "Kontakty", href: "/contacts" },
  ];

  return (
    <>
      {/* Desktop Navigation - centered, bold, spacing */}
      <nav className="hidden md:flex items-center justify-center gap-15 w-xl space-x-8 lg:space-x-12 font-bold text-base font-poppins">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[var(--dark-blue)] text-2xl hover:text-[var(--light-blue)] transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--dark-blue)] p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-[var(--bila)] shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] px-6 py-3 text-left font-medium text-base font-poppins transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-6 px-6 py-4 border-t border-gray-200 mt-2">
              <span className="text-[var(--dark-blue)] text-sm font-poppins">Sledujte mě na:</span>
              <a
                href="#"
                className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
