import { useEffect, useState } from "react";
import "./App.css";
import { Aboutsection } from "./AppComponents/aboutComponent/aboutsection";
import { Codingtools } from "./AppComponents/codingtools/codingtools";
import { HeroSection } from "./AppComponents/heroSection/heroSection";
import { Navbar } from "./AppComponents/NavbarComponent/navbar";
import { ScrollSign } from "./AppComponents/scrollSign/scrollSign";
import { Refuse } from "./RefComponents/RefContex";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";

function App() {
  const { AppRef, isOverflowHidden } = Refuse();

  const [showContainer, setShowContainer] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContainer(false);
    }, 2000); // Hide after 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showContainer && (
        <div className="bg-transparent flex items-end h-full relative z-10 ">
          <motion.div
            initial={{
              height: "100%",
            }}
            animate={{
              height: "0%",
            }}
            exit={{
              height: "0%",
            }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-[#aadcec]"
          >
            <DotLottieReact
              className="scale-[0.1] "
              src="https://lottie.host/6c75c493-9ac3-4f45-a919-11693971ade0/Mvulfklbsw.lottie"
              loop
              autoplay
            />
          </motion.div>
        </div>
      )}
      <div
        className={`App h-screen  ${
          isOverflowHidden ? "overflow-hidden" : "overflow-auto"
        } relative `}
        ref={AppRef}
      >
        <Navbar />
        <div className="px-[150px]">
          <HeroSection />
          <ScrollSign />
          <Aboutsection />
          <Codingtools />
        </div>
      </div>
    </>
  );
}

export default App;
