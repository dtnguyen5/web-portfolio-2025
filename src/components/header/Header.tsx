import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ICONS from "@/constants/icons"
import Navbar from "@/components/navbar/Navbar"
import "./Header.scss"

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/dtnguyen5_/", icon: ICONS.instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/duy-tiep-nguyen-7325002a3/", icon: ICONS.linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/honza.nguyen.10297/", icon: ICONS.facebook, label: "Facebook" },
  { href: "https://github.com/dtnguyen5", icon: ICONS.github, label: "GitHub" },
]

const Header = () => (
    <header className="header-root flex items-center justify-center w-full relative z-50 shadow-sm rounded-b-lg">
      <div className="w-[90%] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20 w-full">
          {/* Logo vlevo */}
          <div className="font-poppins font-semibold text-xl flex-shrink-0 min-w-fit">
            <span className="header-logo-primary font-bold text-2xl cursor-pointer">Nguyen </span>
            <span className="header-logo-secondary font-bold text-2xl cursor-pointer">Duy Tiep</span>
          </div>

          {/* Navigace uprostřed - pouze na desktop */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-8">
            <Navbar />
          </div>

          {/* Ikony vpravo - pouze na desktop */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0 min-w-fit">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link transition-colors duration-200"
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} className="w-7 h-7" />
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
