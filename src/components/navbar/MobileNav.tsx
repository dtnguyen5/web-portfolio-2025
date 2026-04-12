'use client'
import { useState, useTransition } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import ICONS, { type IconKey } from '@/constants/icons'
import contentData from '@/data/content.json'
import Link from 'next/link'
import './Navbar.scss'

const { navbar } = contentData

// Map each route to an icon
const navIconMap: Record<string, IconKey> = {
  '/': 'home',
  '/about': 'user',
  '/projects': 'code',
  '/contacts': 'envelope',
}

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [, startTransition] = useTransition()

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  
  const handleNavClick = (href: string) => {
    startTransition(() => {
      closeMenu()
    })
  }

  return (
    <>
      {/* Animated Hamburger Button */}
      <button
        className="p-2 navbar-menu-button"
        onClick={toggleMenu}
        aria-label={navbar.mobile.toggleMenuAriaLabel}
        aria-expanded={isMenuOpen}
      >
        <div className={`navbar-hamburger${isMenuOpen ? ' is-open' : ''}`}>
          <span />
          <span />
          <span />
        </div>
      </button>

      {/* Mobile Dropdown — always in DOM, animated via CSS */}
      <div className={`navbar-mobile-overlay${isMenuOpen ? ' is-open' : ''}`}>

        {/* Nav Items */}
        <nav className="navbar-mobile-nav">
          {navbar.navLinks.map((link) => {
            const iconKey = navIconMap[link.href] as IconKey | undefined
            return (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-mobile-item"
                onClick={() => handleNavClick(link.href)}
              >
                <span className="navbar-mobile-item-icon">
                  {iconKey && (
                    <FontAwesomeIcon icon={ICONS[iconKey] as IconProp} />
                  )}
                </span>
                <span className="navbar-mobile-item-label">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Divider */}
        <div className="navbar-mobile-divider" />

        {/* Social Icons */}
        <div className="navbar-mobile-socials">
          {navbar.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-mobile-social-btn"
              aria-label={link.label}
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={ICONS[link.iconKey as IconKey] as IconProp} />
            </a>
          ))}
        </div>

      </div>
    </>
  )
}

export default MobileNav
