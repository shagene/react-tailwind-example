import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          Logo
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
