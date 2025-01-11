import { useInView } from "motion/react";
import React, { useRef } from "react";
import { motion } from "motion/react";

export function Aboutsection(props) {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <>
      <div className={`pb-[195px]  `} ref={ref}>
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: [10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={`text-[#0f1b61]  text-6xl font-bold`}
        >
          Let's work together.
        </motion.h1>

        <motion.div
          initial={{
            x: 400,
          }}
          whileInView={{
            x: [400, 0],
          }}
          transition={{
            duration: 0.3,
          }}
          className="h-1 w-[90px] bg-[#74bbc5] mt-3"
        />
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: [10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="pt-9 text-[#0f1b61]"
        >
          From interaction design to scaleable design systems, single-page apps
          to <br /> something more experimental with WebGL. I help awesome
          people to build <br /> ambitious yet accessible web projects -{" "}
          <span className="font-bold">the wilder, the better.</span>
        </motion.p>
        <motion.button
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: [10, 0],
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="border-[3px] rounded-md text-blue-600 hover:bg-blue-100 border-blue-600 px-8 py-2 mt-14"
        >
          About my approach
        </motion.button>
      </div>
    </>
  );
}
