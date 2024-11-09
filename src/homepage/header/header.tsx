import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Banner from "../body/banner";
import { motion } from "framer-motion";

interface NavList {
  label: string;
  to: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navList: NavList[] = [
    { label: "Home", to: "/" },
    { label: "Compare Prices", to: "product" },
    // { label: "Currency Converter", to: "/converter" },
    // { label: "About Us", to: "about-us" },
    { label: "Contact Us", to: "contact-us" },
    // { label: "Track Deal", to: "/trackDeal" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { type: "spring", stiffness: 100 }
  };


  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.header
    initial="initial"
    animate="animate"
    variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 mb-10 ${
        isScrolled
          ? "md:bg-white/80  md:backdrop-blur-md  md:shadow-md md:w-[40rem] lg:w-[58rem] mx-auto w-full md:mx-auto  md:rounded-full md:px-6 md:mt-6"
          : "bg-transparent"
      }`}
    >
           <div className={isScrolled ? 'hidden' : 'block'}> <Banner/></div>
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 ">
        <Link to="/" className="font-bold text-lg lg:text-2xl">
          <span className="text-purpleCustom">Price</span>
          <span>Link</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 justify-center w-full">
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
          {/* <Link
            to="/signin"
            className="ml-4 rounded-md bg-purpleCustom px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purpleLight transition-all duration-300"
          >
            Sign-In
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-gray-700 hover:text-purpleCustom transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.nav 
        initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
        className="lg:hidden bg-white shadow-lg">
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
            {/* <li>
              <Link
                to="/signin"
                className="rounded-md bg-purpleCustom px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purpleLight transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign-In
              </Link>
            </li> */}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
