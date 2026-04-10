import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS, { type IconKey } from "@/constants/icons"
import contentData from "@/data/content.json"
import Link from "next/link"
import MobileNav from "@/components/navbar/MobileNav"
import "./Header.scss"

const { header, navbar } = contentData

const Header = () => (
  <header className="relative z-50 flex items-center justify-center w-full rounded-b-lg shadow-sm header-root">
    <div className="w-[90%] px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-around w-full h-20">
          {/* Logo vlevo */}
          <div className="flex-shrink-0 min-w-fit font-poppins text-xl font-semibold">
            <span className="text-2xl font-bold cursor-pointer header-logo-primary">{header.logo.primary} </span>
            <span className="text-2xl font-bold cursor-pointer header-logo-secondary">{header.logo.secondary}</span>
          </div>

          {/* Navigace uprostřed - pouze na desktop */}
          <nav className="hidden lg:flex items-center justify-center gap-15 space-x-8 lg:space-x-12 w-xl font-poppins text-base font-bold">
            {navbar.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl whitespace-nowrap cursor-pointer transition-colors duration-200 navbar-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Ikony vpravo - pouze na desktop */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0 min-w-fit">
            {header.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link transition-colors duration-200"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={ICONS[link.iconKey as IconKey] as IconProp} className="w-7 h-7" />
              </a>
            ))}
          </div>

          {/* Mobile menu button - pouze na mobile */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
)

export default Header
