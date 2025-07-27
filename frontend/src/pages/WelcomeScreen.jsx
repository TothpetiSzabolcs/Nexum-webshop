import bg from "../assets/welcome_bg.png";
import nexumLogo from "../assets/nexum_logo.png";
import { motion } from "framer-motion";

const WelcomeScreen = () => {
  return (
    <>
      <img src={bg} alt="Welcome_bg" className="absolute -z-20 h-full w-full" />
      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="w-full h-30 flex justify-center items-center text-center gap-6 md:gap-12 lg:gap-12 xl:gap-12">
            <motion.p
              initial={{ x: -150, y: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold text-shadow-black text-shadow-xs md:text-3xl lg:text-4xl xl:text-4xl"
            >
              Click it.
            </motion.p>
            <motion.p
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-2xl font-semibold text-shadow-black text-shadow-xs md:text-3xl lg:text-4xl xl-text-4xl"
            >
              Love it.
            </motion.p>
          </div>
          <div className="flex flex-col justify-center items-center text-center ">
            <motion.img
              src={nexumLogo}
              alt="Nexum Logo"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="w-[80%] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] pb-10"
            />
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 2.9 }}
              className="text-gray-700 text-md font-semibold md:text-lg lg-text-xl xl:text-xl"
            >
              Connecting your shopping experience
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 3.4 }}
              className="custom-btn cursor-pointer"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.9,
                }}
              >
                Look Around
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
