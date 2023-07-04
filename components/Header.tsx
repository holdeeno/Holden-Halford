import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
      <hr className="mt-0 mb-6 sm:mb-8 md:mb-12 border-b-1 border-solid border-gray-300" />
    </header>
  );
};

export default Header;
