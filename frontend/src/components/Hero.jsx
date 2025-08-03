import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [search, setSearch] = useState("");

useEffect(() => {
  console.log(search);
}, [search]);

  return (
    <div className="w-full h-1/2 flex flex-col justify-center items-center my-30">
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-4 pl-10">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Discover What You Need. Instantly.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-semibold mb-4"
        >
          Browse thousands of products tailored to your lifestyle — fast,
          simple, and smart.
        </motion.h2>
        <motion.input
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search for anything..."
          className="w-1/2 h-10 rounded-lg border-2 shadow-lg border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-400"
        />
      </div>
    </div>
  );
};

export default Hero;
