import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar';



const Header: React.FC = () => {
  return (

    <header className="bg-[var(--bila)] h-25 w-full rounded-b-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Title */}
          <div>
            <span className=" Tittle-1 text-[var(--dark-blue)] font-bold">Nguyen </span>
            <span className=" Tittle-2 text-[var(--light-blue)] font-bold">Duy Tiep</span>
          </div>

          {/* Desktop navigation */}
          <Navbar />

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors">
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--dark-blue)] hover:text-[var(--light-blue)] transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            </a>
            <a href="#" className="text-[var(--dark-blue)]e hover:text-[var(--light-blue)] transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </header>

  );
};

export default Header;
