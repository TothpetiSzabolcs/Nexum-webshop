import Lottie from "lottie-react";
import lottieAnimation from "../assets/lottie.json"
import { useRef } from "react";

const LottieAnimation = () => {
    const animationRef = useRef(null);

    return (
      <Lottie animationData={lottieAnimation} loop={true} lottieRef={animationRef} className="w-1/3 h-1/3"/>
    )
}

export default LottieAnimation;