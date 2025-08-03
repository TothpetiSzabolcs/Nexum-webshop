import { useItems } from "../contexts/useItems.js";
import Header from "../components/Header.jsx";
import bg from "../assets/home_bg.jpg";
// import bg_dark from "../assets/home_bg_dark.png"
import LottieAnimation from "../components/LottieAnimation";
import Hero from "../components/Hero";
import LeftSideBar from "../components/LeftSideBar";

const Home = () => {
  const { loading } = useItems();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
        <LottieAnimation />
      </div>
    );
  }
  return (
    <>
      <img
        src={bg}
        alt="background"
        className=" absolute w-full h-full -z-10"
      />
      <Header />
      <Hero />
      <LeftSideBar />
    </>
  );
};

export default Home;
