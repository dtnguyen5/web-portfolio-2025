import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import ICONS, { type IconKey } from "@/constants/icons"
import contentData from "@/data/content.json"
import Navbar from "@/components/navbar/Navbar"
import "./Header.scss"

const { header } = contentData

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
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-8">
            <Navbar />
          </div>

          {/* Ikony vpravo - pouze na desktop */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0 min-w-fit">
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
          <div className="md:hidden">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
)

export default Header
