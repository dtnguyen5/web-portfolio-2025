import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import Navbar from "./Navbar"

const Header: React.FC = () => {
  return (

    <header className="bg-[var(--bila)] flex items-center justify-center w-full relative z-50 shadow-sm rounded-b-lg">
      <div className="w-[90%] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20 w-full">
          {/* Logo vlevo */}
          <div className="font-poppins font-semibold text-xl flex-shrink-0 min-w-fit">
            <span className="text-[var(--dark-blue)] font-bold text-2xl cursor-pointer">Nguyen </span>
            <span className="text-[var(--light-blue)] font-bold text-2xl cursor-pointer">Duy Tiep</span>
          </div>

          {/* Navigace uprostřed - pouze na desktop */}
          <div className="hidden md:flex flex-1 justify-center max-w-2xl mx-8">
            <Navbar />
          </div>

          {/* Ikony vpravo - pouze na desktop */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0 min-w-fit gap-6">
            <a
              href="https://www.instagram.com/dtnguyen5_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/duy-tiep-nguyen-7325002a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-7 h-7" />
            </a>
            <a
              href="https://www.facebook.com/honza.nguyen.10297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/dtnguyen5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
            </a>
          </div>

          {/* Mobile menu button - pouze na mobile */}
          <div className="md:hidden">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
    
  )
}

export default Header
