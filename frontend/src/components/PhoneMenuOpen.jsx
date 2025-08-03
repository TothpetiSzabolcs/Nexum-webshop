import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PhoneMenuOpen = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-[6.25rem] left-0 w-full bg-gray-200/30 backdrop-blur-sm z-10 flex flex-col justify-center items-end"
    >
      <div className="flex flex-col gap-6 w-[30%] h-full items-center justify-start py-10">
        <button className="text-lg font-semibold text-gray-800 "><Link to="/home">Home</Link></button>
        <button className="text-lg font-semibold text-gray-800 "><Link to="/about">About</Link></button>
        <button className="text-lg font-semibold text-gray-800 "><Link to="/shop">Shop</Link></button>
        <button className="text-lg font-semibold text-gray-800 "><Link to="/contact">Contact</Link></button>
      </div>
    </motion.div>
  );
};

export default PhoneMenuOpen;
