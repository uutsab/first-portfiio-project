import React from "react";
import { motion } from "motion/react";

export function HeroSection(props) {
  return (
    <>
      <div className="pt-24 text-[#0f1b61] flex justify-between">
        <div className="pt-[200px] ">
          <motion.h1
            initial={{
              opacity: 0,
              y: 3,
            }}
            animate={{
              opacity: 1,
              y: [3, 0],
            }}
            transition={{
              duration: 0.3,
              delay: 2,
            }}
            className="text-7xl"
          >
            Hi, my <br></br>name is <span className="font-bold"> Robb</span>
            <span className="text-[#73bbc5]">.</span>
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              y: 3,
            }}
            animate={{
              opacity: 1,
              y: [3, 0],
            }}
            transition={{
              duration: 0.3,
              delay: 2.5,
            }}
            className="text-xl pt-6"
          >
            I'm an
            <span className="font-bold"> independent creative developer</span>
            from
            <br></br> Abergavenny, South Wales.
          </motion.h2>
        </div>

        <motion.div
          initial={{
            scale: 0,
            y: 10,
          }}
          animate={{
            scale: 1,
            y: [10, 5, 0],
          }}
          transition={{
            delay: 2.8,
            duration: 1,
            type: "spring",
          }}
        >
          <img
            className="object-cover h-[600px] "
            src="https://i.pinimg.com/474x/cb/f2/fe/cbf2fe36fccddcbc1594bb57999aad8e.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
