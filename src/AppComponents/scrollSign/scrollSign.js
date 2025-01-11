import React from "react";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function ScrollSign(props) {
  return (
    <>
      <div className={` origin-top  flex flex-col items-center  w-[450px]`}>
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 3,
          }}
          className=" w-[50%] "
        >
          <DotLottieReact
            className="  "
            src="https://lottie.host/83735b23-77c0-4362-85ac-dcedf026a36b/pUHeeN5o8y.lottie"
            loop
            autoplay
          />
        </motion.span>
        <motion.div
          className={` w-full h-[510px]  flex justify-center items-end`}
        >
          <motion.div
            initial={{
              height: "0px",
            }}
            animate={{
              height: "500px",
            }}
            transition={{
              duration: 2,
              delay: 3.2,
            }}
            className={`origin-top h-[500px] w-[2px]  bg-[#0f1b61]`}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
