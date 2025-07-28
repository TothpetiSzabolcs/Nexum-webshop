import logo from "../assets/nexum_logo_sm.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import MenuOpen from "./MenuOpen";
import { AnimatePresence } from "framer-motion";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="h-25 w-full flex items-center justify-center shadow-lg" onMouseLeave={closeMenu}>
      <AnimatePresence>
      {isMenuOpen && <MenuOpen />}
      </AnimatePresence>
      <div className=" h-16 w-[90vw] flex items-center justify-evenly">
        <div>
          <Link to={"/"} className="header-link px-4 py-2" onMouseEnter={openMenu} >Home</Link>
        </div>
        <div>
          <Link className="header-link px-4 py-2" onMouseEnter={openMenu}>About</Link>
        </div>
        <div>
          <img
            src={logo}
            alt="Nexum_Logo"
            className="w-13 h-13 drop-shadow-[0_10px_20px_rgba(0,0,0,1.3)] shadow-black"
          />
        </div>
        <div>
          <Link className="header-link px-4 py-2" onMouseEnter={openMenu}>Products</Link>
        </div>
        <div>
          <Link className="header-link px-4 py-2" onMouseEnter={openMenu}>Contact</Link>
        </div>
      </div>
      <div className="flex gap-8">
        <FaRegUser size={25} className="header-link cursor-pointer"/>
        <LuShoppingCart size={25} className="header-link cursor-pointer"/>
      </div>
    </header>
  );
};

export default Header;
