import logo from "../assets/nexum_logo_sm.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import MenuOpen from "./MenuOpen";
import { AnimatePresence } from "framer-motion";
import { Sling as Hamburger, Sling } from "hamburger-react";
import { motion } from "framer-motion";
import PhoneMenuOpen from "./PhoneMenuOpen";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const togglePhoneMenu = () => {
    setIsPhoneMenuOpen(!isPhoneMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="h-25 w-full flex items-center justify-between shadow-lg"
      onMouseLeave={closeMenu}
    >
      <AnimatePresence>{isMenuOpen && <MenuOpen />}</AnimatePresence>
      <div className=" w-full flex items-center justify-between lg:justify-evenly md:justify-between sm:px-5 ml-3">
        <div className="sm:flex hidden">
          <FaRegUser size={25} className="header-link cursor-pointer" />
        </div>

        <div>
          <Link
            to={"/"}
            className="header-link px-4 py-2 hidden sm:flex"
            onMouseEnter={openMenu}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className="header-link px-4 py-2 hidden sm:flex"
            onMouseEnter={openMenu}
          >
            About
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={logo}
            alt="Nexum_Logo"
            className="w-15 h-15 drop-shadow-[0_10px_20px_rgba(0,0,0,1.3)] shadow-black"
          />
        </div>
        <div>
          <Link
            className="header-link px-4 py-2 hidden sm:flex"
            onMouseEnter={openMenu}
          >
            Shop
          </Link>
        </div>
        <div>
          <Link
            className="header-link px-4 py-2 hidden sm:flex"
            onMouseEnter={openMenu}
          >
            Contact
          </Link>
        </div>
        <div className="sm:flex hidden">
          <LuShoppingCart size={25} className="header-link cursor-pointer" />
        </div>
        <div className="sm:hidden flex items-center pr-4">
          <button onClick={togglePhoneMenu}>
            <AnimatePresence>
              {isPhoneMenuOpen && <PhoneMenuOpen />}
            </AnimatePresence>
            <Sling />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
