import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header: React.FC = () => {
  return (

    <header className="bg-[var(--bila)] h-25 w-full rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Title */}
          <div>
            <span className="text-black font-bold">Header je zde – test bílé barvy</span>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
