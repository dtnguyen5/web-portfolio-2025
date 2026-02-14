"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import Link from "next/link"
import "./Navbar.scss"

const NAV_LINKS = [
  { label: "Domů", href: "/" },
  { label: "O mně", href: "/about" },
  { label: "Projekty", href: "/projects" },
  { label: "Kontakty", href: "/contacts" },
]

const SOCIAL_LINKS = [
  { href: "#", icon: ICONS.instagram, label: "Instagram" },
  { href: "#", icon: ICONS.linkedin, label: "LinkedIn" },
  { href: "#", icon: ICONS.facebook, label: "Facebook" },
  { href: "#", icon: ICONS.github, label: "GitHub" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation - centered, bold, spacing */}
      <nav className="hidden md:flex items-center justify-center gap-15 space-x-8 lg:space-x-12 w-xl font-poppins text-base font-bold">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-2xl whitespace-nowrap cursor-pointer transition-colors duration-200 navbar-link"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 navbar-menu-button"
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
        <div className="absolute left-0 right-0 top-full z-50 border-t border-gray-200 shadow-lg md:hidden navbar-mobile-menu">
          <nav className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-3 font-poppins text-base font-medium text-left transition-colors duration-200 navbar-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Icons */}
              <div className="mt-2 flex items-center space-x-6 border-t border-gray-200 px-6 py-4">
                <span className="font-poppins text-sm navbar-mobile-label">Sledujte mě na:</span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 navbar-social-link"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
