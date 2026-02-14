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
      <nav className="hidden md:flex items-center justify-center gap-15 w-xl space-x-8 lg:space-x-12 font-bold text-base font-poppins">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="navbar-link text-2xl transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="navbar-menu-button md:hidden p-2"
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
        <div className="navbar-mobile-menu absolute top-full left-0 right-0 md:hidden shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-mobile-link px-6 py-3 text-left font-medium text-base font-poppins transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-6 px-6 py-4 border-t border-gray-200 mt-2">
              <span className="navbar-mobile-label text-sm font-poppins">Sledujte mě na:</span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar-social-link transition-colors duration-200"
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
