import { Link } from "react-router-dom";
import { useItems } from "../contexts/useItems";
import { motion } from "framer-motion";

const MenuOpen = () => {
  const { items } = useItems();

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-25 left-0 w-full h-[30%] bg-gray-200/30 backdrop-blur-sm z-10 flex justify-center items-center"
    >
      <div className="flex flex-col gap-6 w-[30%] h-full items-center justify-center">
        <h2 className="text-md font-semibold text-gray-500 pb-10">About</h2>
        <Link className="menu_open_link">History</Link>
        <Link className="menu_open_link">Our Team</Link>
        <Link className="menu_open_link">Blog</Link>
      </div>
      <div className="flex flex-col gap-6 w-[30%] h-full items-center justify-center">
        <h2 className="text-md font-semibold text-gray-500 pb-10">Products</h2>
        {uniqueCategories.map((category) => (
          <Link key={category} className="menu_open_link">
            {category}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-6 w-[30%] h-full items-center justify-center">
        <h2 className="text-md font-semibold text-gray-500 pb-10">Contact</h2>
        <Link className="menu_open_link">Contact</Link>
        <Link className="menu_open_link">Support</Link>
        <Link className="menu_open_link">Sponsorships</Link>
      </div>
    </motion.div>
  );
};

export default MenuOpen;
