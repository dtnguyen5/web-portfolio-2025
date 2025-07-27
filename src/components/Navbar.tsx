"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Domů', 'O mně', 'Projekty', 'Kontakt'];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item}
            className="Button-navigation text-[var(--dark-blue)] hover:bg-[var(--light-blue)] hover:text-[var(--bila)] px-4 py-2 rounded-lg transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--dark-blue)]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="absolute top-full left-0 right-0 md:hidden bg-[var(--bila)] border-t border-gray-200 z-50">
          <nav className="flex flex-col space-y-2 py-4 px-4">
            {navItems.map((item) => (
              <button
                key={item}
                className="Mobile-navigation text-[var(--dark-blue)] hover:bg-[var(--light-blue)] hover:text-[var(--bila)] px-4 py-2 rounded-lg transition-all duration-300 text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;