import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

interface NavList {
  label: string;
  to: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navList: NavList[] = [
    { label: "Home", to: "/" },
    { label: "Currency Converter", to: "/currencyConverter" },
    { label: "Compare Prices", to: "/comparePrices" },
    { label: "Track Deal", to: "/trackDeal" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80  backdrop-blur-md  shadow-lg lg:w-[60rem] w-full md:w[50rem] md:mx-auto lg:mx-auto rounded-full px-6 mt-2' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 ">
        <Link to="/" className="font-bold text-lg lg:text-2xl">
          <span className="text-purpleCustom">Price</span>
          <span>Link</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navList.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.to}
                  className="text-sm lg:text-md py-2 text-gray-700 hover:text-purpleCustom transition-colors duration-300"
                >
                  {item.label}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purpleCustom transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <Link
            to="/signin"
            className="ml-4 rounded-md bg-purpleCustom px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purpleLight transition-all duration-300"
          >
            Sign-In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-purpleCustom transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="block text-sm text-gray-700 hover:text-purpleCustom transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/signin"
                className="rounded-md bg-purpleCustom px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purpleLight transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign-In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
