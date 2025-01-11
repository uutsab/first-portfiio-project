import React, { useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import { MdMail } from "react-icons/md";
import { PiButterflyFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import { Refuse } from "../../RefComponents/RefContex";
import { Hirebutton } from "./hirebutton";

export function Navbar(props) {
  const { handleButtonClick, clickMenu } = Refuse();
  const [clickHire, setclickHire] = useState(false);

  const handleHireClick = () => {
    setclickHire(!clickHire);
  };

  const widnerLeft = {
    margin: {
      marginLeft: "3px",
    },
  };

  const widnerRight = {
    margin: {
      marginRight: "3px",
    },
  };
  const widnerX = {
    margin: {
      marginRight: "3px",
      marginLeft: "3px",
    },
  };

  return (
    <>
      {/* after clicking the menu button */}

      {clickMenu ? (
        <>
          <motion.div
            initial={{
              height: "50%",
            }}
            animate={{
              height: "100%",
            }}
            transition={{
              duration: 0.3,
            }}
            className=" w-full fixed px-16 bg-[#aadcec]  "
          >
            <motion.div className="flex justify-between bg-[#aadcec]">
              <div className="flex items-center">
                <img
                  className="h-20 pr-3"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAYAAAB91L6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB9guVXW2bw5NOihdugrBrhjRKAGsEMWAkd8WEdFgCQoWihWMKCCKKIqiEYiACIIoqNEYsYAGDIgoSBPEgkiVzuG0N9fGdfgPh/N931tmz+yZue/rWpeK5/DOPPPMXjN79l4LRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERE8rECsAXwXODVwFuBg4CjgJOA7wA/Ay4ErgauBW4F7gIGU8S98WeuAS4FLgD+GzgL+ArwKeD9wL8ALwGeCWwKrOiFFhGRLrEh8DzgLcCRwJnARcBN0yTRpuKWSNinAocBbwJeADwGWLppIUVERJbEw+NN9l3AicDPZ3hTbVvcG2/ixwHvBJ4PrKsVRESkTtJ07bbAe4EzYmp40NP4M/AN4N2hyUpaUUREqmJN4GXAJ4DzgTkFJL5SY268KX8aeHloJyIiMhTLAFsB+wPnAvMLSGxtjrSA7JPxLfxhelBERBZl/Vh09G3g7gKSVlfjnljdnRalPVILioj0k82AvX3LbTQhXxpbrx7btBlERCQvjwY+AFxWwNugseRknK6RiIh0gEcAe8ab7gITXysS/wUxO7FW0+YREZHRSIUjdorCF/MKSCjGeBrMBk6Pql0WAxERKZhHxurlPu/N7Wr8CTg0qouJiEgBLBUlE9MKZrcMdT/SPuxTovCHiIg01Mxgz1i803RSMJrR4BLgdcBy3oEiIvlJC3MOLrShgdGMBn+MOtyreAOKiFTPOvEN0EIZJvqpEvEd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iMhDWSUWw9xuIjYRV1hCMm0rWtcbTkRkZtYBjgRmm4hNxGN6IJVEPc7GCSIi47Eh8GngHhOxiXhID9wXb7ybetOJiEzOWlFRy2/EJuKZEm96aBMRkQx7iD9gMQ/fhhdJvLdHFy6/8YqI1NSDeNdojt7EHlKjeQ2ujAV7qQ2miIg0wHbA16ys1YuYB5wBPDdKm4qISAFsENPT1xaQKIxqNbgJOBTYuGmTiYjI1MwCdgBOj60oJsN2ajA7ZjZ2iUItIiLSskVbqQPT94AFBSQVY7iWgHvHyncREekAmwDvAX5pIizuQeAK4EDgUU2bRERE8ifjvePNeG4BCahvMT/edNPe7q00u4hIP0n7R98Yq2utQZ0v6d4JnAa8Fliz6YsuIiJlsQywDXAw8LN4U2v6bbGtkRbA/QQ4JPruupBKRESGZmXgeTFVmqar7y0gsZUac2Na+dDo8byaPhMRkapYAfh74F3AyVGNaUFPC2JcBnw5+jhvb59dERGpm9UiAb0D+ALw0441jbgL+F/g88CbgWcCK2kzEREplUcCzwfeBBwGnAKcX2gjiT/Hg8MJMd2e9k4/ywYHIiLSNVaMPa9/B+wMvCUS32ciCX4DODu+qf4G+ANw6yKx6NapO+KfpSR6dcSF8XfPAc4EjgU+CrwzViG/CNg6euamYxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERusv/AZU+VOKsU+dRAAAAAElFTkSuQmCC"
                  alt="spoon-logo"
                />
                <div className="h-[30px] w-[1px] bg-black" />
                <div className=" h-[50px] w-[80px] flex justify-center items-center">
                  <motion.button
                    className=" origin-center   transition ease-in-out delay-150 hover: cursor-pointer  duration-100"
                    onClick={handleButtonClick}
                    initial={{
                      y: -3,
                    }}
                    animate={{
                      y: [-3, 0],
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                    whileHover="margin"
                  >
                    <motion.span variants={widnerLeft}>C</motion.span>
                    <motion.span variants={widnerX}>L</motion.span>
                    <motion.span>O</motion.span>
                    <motion.span variants={widnerLeft}>S</motion.span>
                    <motion.span variants={widnerLeft}>E</motion.span>
                  </motion.button>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="h-10"
                  src="data:image/png;base64,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"
                  alt="chat-message"
                />
                <span className="pl-3 transition ease-in-out delay-150 hover: cursor-pointer hover:scale-[1.5] duration-100">
                  hire me
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 150,
              }}
              animate={{
                opacity: 1,

                x: [150, 0],
              }}
              transition={{
                type: "tween",
              }}
              className=" pt-[50px] [&>*]: list-none flex items-center justify-around  [&>*]:text-2xl  [&>*]:hover:cursor-pointer w-[30%]"
            >
              <div className="purpleLine h-[3px] w-[80px] bg-[#7f00e1] mr-8" />

              <motion.li
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: [10, 0],
                }}
                transition={{
                  delay: 0,
                  type: "spring",
                }}
                className="hover:text-white"
              >
                <PiButterflyFill />
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: [10, 0],
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                }}
                className="hover:text-white"
              >
                <FaInstagram />
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: [10, 0],
                }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                }}
                className="hover:text-white"
              >
                <FaGithub />
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: [10, 0],
                }}
                transition={{
                  delay: 0.4,
                  type: "spring",
                }}
                className="hover:text-white"
              >
                <ImConnection />
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                animate={{
                  opacity: 1,
                  x: [10, 0],
                }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                }}
                className="hover:text-white"
              >
                <MdMail />
              </motion.li>
            </motion.div>
            <div className="[&>*]:list-none [&>*]:flex [&>*]:items-center flex flex-col justify-around h-[500px] mb-[300px] text-[#0f1b61]">
              <motion.li
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: [-10, 0],
                }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
              >
                <h1 className="pr-[205px]  text-6xl font-bold hover:cursor-pointer hover:text-white">
                  Home
                </h1>
                <p> Back to the home page.</p>
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: [-10, 0],
                }}
                transition={{
                  delay: 1.1,
                  duration: 1,
                }}
              >
                <h1 className="pr-[225px] text-6xl font-bold hover:cursor-pointer hover:text-white">
                  Work
                </h1>
                <p>My approach to development.</p>
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: [-10, 0],
                }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                }}
              >
                <h1 className="pr-[200px] text-6xl font-bold hover:cursor-pointer hover:text-white">
                  {" "}
                  About
                </h1>
                <p> A little about me and my background.</p>
              </motion.li>
              <motion.li
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: [-10, 0],
                }}
                transition={{
                  delay: 1.3,
                  duration: 1,
                }}
              >
                <h1 className="pr-[170px] text-6xl font-bold hover:cursor-pointer hover:text-white">
                  Writing
                </h1>
                <p> My latest writing on tech and language.</p>
              </motion.li>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <AnimatePresence mode="sync">
            {clickHire && (
              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                  transition: {
                    duration: 2,
                  },
                }}
                exit={{
                  width: "0%",
                  transition: {
                    duration: 2,
                    delay: 1,
                  },
                }}
                className="fixed w-[400px] h-[85px] bg-blue-200  top-0  "
              ></motion.div>
            )}
          </AnimatePresence>
          <motion.div className={` w-full   fixed px-16 top-1  z-[2]`}>
            <div className=" w-full flex justify-between ">
              <div className="flex items-center">
                <motion.img
                  className="h-20 pr-3"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAYAAAB91L6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAgAElEQVR4nO2dB9guVXW2bw5NOihdugrBrhjRKAGsEMWAkd8WEdFgCQoWihWMKCCKKIqiEYiACIIoqNEYsYAGDIgoSBPEgkiVzuG0N9fGdfgPh/N931tmz+yZue/rWpeK5/DOPPPMXjN79l4LRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERE8rECsAXwXODVwFuBg4CjgJOA7wA/Ay4ErgauBW4F7gIGU8S98WeuAS4FLgD+GzgL+ArwKeD9wL8ALwGeCWwKrOiFFhGRLrEh8DzgLcCRwJnARcBN0yTRpuKWSNinAocBbwJeADwGWLppIUVERJbEw+NN9l3AicDPZ3hTbVvcG2/ixwHvBJ4PrKsVRESkTtJ07bbAe4EzYmp40NP4M/AN4N2hyUpaUUREqmJN4GXAJ4DzgTkFJL5SY268KX8aeHloJyIiMhTLAFsB+wPnAvMLSGxtjrSA7JPxLfxhelBERBZl/Vh09G3g7gKSVlfjnljdnRalPVILioj0k82AvX3LbTQhXxpbrx7btBlERCQvjwY+AFxWwNugseRknK6RiIh0gEcAe8ab7gITXysS/wUxO7FW0+YREZHRSIUjdorCF/MKSCjGeBrMBk6Pql0WAxERKZhHxurlPu/N7Wr8CTg0qouJiEgBLBUlE9MKZrcMdT/SPuxTovCHiIg01Mxgz1i803RSMJrR4BLgdcBy3oEiIvlJC3MOLrShgdGMBn+MOtyreAOKiFTPOvEN0EIZJvqpEvEd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iMhDWSUWw9xuIjYRV1hCMm0rWtcbTkRkZtYBjgRmm4hNxGN6IJVEPc7GCSIi47Eh8GngHhOxiXhID9wXb7ybetOJiEzOWlFRy2/EJuKZEm96aBMRkQx7iD9gMQ/fhhdJvLdHFy6/8YqI1NSDeNdojt7EHlKjeQ2ujAV7qQ2miIg0wHbA16ys1YuYB5wBPDdKm4qISAFsENPT1xaQKIxqNbgJOBTYuGmTiYjI1MwCdgBOj60oJsN2ajA7ZjZ2iUItIiLSskVbqQPT94AFBSQVY7iWgHvHyncREekAmwDvAX5pIizuQeAK4EDgUU2bRERE8ifjvePNeG4BCahvMT/edNPe7q00u4hIP0n7R98Yq2utQZ0v6d4JnAa8Fliz6YsuIiJlsQywDXAw8LN4U2v6bbGtkRbA/QQ4JPruupBKRESGZmXgeTFVmqar7y0gsZUac2Na+dDo8byaPhMRkapYAfh74F3AyVGNaUFPC2JcBnw5+jhvb59dERGpm9UiAb0D+ALw0441jbgL+F/g88CbgWcCK2kzEREplUcCzwfeBBwGnAKcX2gjiT/Hg8MJMd2e9k4/ywYHIiLSNVaMPa9/B+wMvCUS32ciCX4DODu+qf4G+ANw6yKx6NapO+KfpSR6dcSF8XfPAc4EjgU+CrwzViG/CNg6euamYxERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERusv/AZU+VOKsU+dRAAAAAElFTkSuQmCC"
                  alt="spoon-logo"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
                <div className="h-[30px] w-[1px] bg-black" />
                <motion.button
                  className={`w-[65px] pl-3 transition ease-in-out delay-150  hover: cursor-pointer  duration-100`}
                  onClick={handleButtonClick}
                  whileHover="margin"
                  initial={{
                    y: 3,
                  }}
                  animate={{
                    y: [3, 0],
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  <motion.span variants={widnerRight}>M</motion.span>
                  <motion.span>E</motion.span>
                  <motion.span variants={widnerX}>N</motion.span>
                  <motion.span>U</motion.span>
                </motion.button>
              </div>
              <div className="flex items-center ">
                <img
                  className="h-10"
                  src="data:image/png;base64,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"
                  alt="chat-message"
                />
                <span
                  className="pl-3 transition ease-in-out delay-150 hover: cursor-pointer hover:scale-[1.5] duration-100"
                  onClick={handleHireClick}
                >
                  hire me
                </span>
                <AnimatePresence mode="sync">
                  {clickHire && (
                    <motion.div
                      initial={{
                        height: "0px",
                      }}
                      animate={{
                        height: "250px",
                        transition: {
                          delay: 2,
                        },
                      }}
                      exit={{
                        height: "0px",
                        transition: {
                          delay: 0,
                        },
                      }}
                      transition={{}}
                      className={`  absolute top-[80px] right-[0%] h-[250px] overflow-hidden  `}
                    >
                      <Hirebutton />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
