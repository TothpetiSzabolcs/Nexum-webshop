import { useItems } from "../contexts/useItems.js";
import Header from "../components/Header.jsx";
import bg from "../assets/home_bg.jpg";
import LottieAnimation from "../components/LottieAnimation";

const Home = () => {
  const { items, loading } = useItems();

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
    </>
  );
};

export default Home;
