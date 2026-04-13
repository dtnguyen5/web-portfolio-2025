
'use client'
import { useState, useTransition } from 'react'
import { usePathname } from 'next/navigation'
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

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [, startTransition] = useTransition()

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  
  const handleNavClick = () => {
    startTransition(() => {
      closeMenu()
    })
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center gap-15 space-x-8 lg:space-x-12 w-xl font-poppins text-base font-bold">
        {navbar.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl whitespace-nowrap cursor-pointer transition-colors duration-200 navbar-link ${isActive(link.href) ? 'navbar-link-active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Animated Hamburger Button */}
      <button
        className="lg:hidden p-2 navbar-menu-button"
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
      <div className={`navbar-mobile-overlay lg:hidden${isMenuOpen ? ' is-open' : ''}`}>

        {/* Nav Items */}
        <nav className="navbar-mobile-nav">
          {navbar.navLinks.map((link) => {
            const iconKey = navIconMap[link.href] as IconKey | undefined
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-mobile-item${active ? ' navbar-mobile-item-active' : ''}`}
                onClick={handleNavClick}
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

export default Navbar
