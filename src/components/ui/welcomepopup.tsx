"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function WelcomePopup() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

//   useEffect(() => {
//     const alreadySeen = localStorage.getItem("ut-welcome-popup");

//     if (!alreadySeen) {
//       const timer = setTimeout(() => {
//         setOpen(true);
//       }, 250);

//       return () => clearTimeout(timer);
//     }
//   }, []);


  const closePopup = () => {
    localStorage.setItem("ut-welcome-popup", "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.section

          className="
            fixed
            inset-0
            z-[60]
            flex
            items-center
            justify-center
            px-8
            py-10
            pointer-events-none
          "

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.4,
          }}

        >

          {/* Landscape Card */}

          <motion.div

            className="
              relative
              pointer-events-auto
              w-full
              max-w-7xl
              rounded-[40px]
              overflow-hidden
              border
              border-white/20
              bg-white/10
              backdrop-blur-2xl
              shadow-[0_30px_120px_rgba(0,0,0,0.35)]
            "

            initial={{
              y: 60,
              opacity: 0,
              scale: 0.96,
            }}

            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}

            exit={{
              y: 40,
              opacity: 0,
            }}

            transition={{
              duration: 0.6,
            }}

          >

            {/* Close */}

            <button

              onClick={closePopup}

              className="
                absolute
                top-6
                right-6
                z-50
                w-12
                h-12
                rounded-full
                bg-white
                text-black
                text-2xl
                font-bold
                shadow-lg
                hover:bg-primary
                hover:text-white
                transition-all
              "

            >
              ×
            </button>

            {/* Two Column Layout */}

            <div
              className="
                grid
                lg:grid-cols-2
                items-center
                gap-10
                min-h-[520px]
                px-12
                py-10
              "
            >

              {/* LEFT SIDE */}

              <motion.div

                initial={{
                  x: -50,
                  opacity: 0,
                }}

                animate={{
                  x: 0,
                  opacity: 1,
                }}

                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}

              >

                <p className="uppercase tracking-[0.35em] text-primary font-bold text-sm">

                  Welcome To

                </p>

                <h1 className="mt-4 text-6xl font-black leading-none">

                  Udyam

                  <span className="block text-primary">

                    Tatva

                  </span>

                </h1>

                <p className="mt-8 text-lg text-white/80 leading-8 max-w-xl">

                  {`Discover India's most practical founder roadmap.
                  Learn how to validate your idea, build products,
                  raise funding, scale your startup and prepare for exit.`}

                </p>

                <div className="mt-10 flex gap-4">

                  <Link href="/waitlist" onClick={closePopup}>

                    <button
                      className="
                        px-8
                        py-4
                        rounded-xl
                        bg-primary
                        text-white
                        font-black
                        uppercase
                        tracking-wider
                        shadow-xl
                        hover:scale-105
                        transition-all
                      "
                    >
                      Start Journey →
                    </button>

                  </Link>

                  <button

                    onClick={closePopup}

                    className="
                      px-8
                      py-4
                      rounded-xl
                      bg-white
                      font-bold
                      hover:bg-gray-200
                      transition-all
                    "

                  >
                    Skip
                  </button>

                </div>

              </motion.div>

              {/* RIGHT SIDE STARTS HERE */}

              {/* RIGHT SIDE */}

              <motion.div

                className="
                  relative
                  flex
                  items-center
                  justify-center
                  h-full
                "

                initial={{
                  x: 60,
                  opacity: 0,
                }}

                animate={{
                  x: 0,
                  opacity: 1,
                }}

                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}

              >

                {/* Glow */}

                <motion.div

                  className="
                    absolute
                    w-[420px]
                    h-[420px]
                    rounded-full
                    bg-primary/20
                    blur-[120px]
                  "

                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.45, 0.7, 0.45],
                  }}

                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}

                />

                {/* Roadmap Card */}

                <Link
                  href="/foundercircle"
                  onClick={closePopup}
                  className="relative z-20"
                >

                  <motion.div

                    className="
                      relative
                      cursor-pointer
                      w-[420px]
                      h-[420px]
                      flex
                      items-center
                      justify-center
                    "

                    initial={{
                      y: -280,
                      opacity: 0,
                      rotate: -10,
                      scale: 0.9,
                    }}

                    animate={{
                      y: [-280, 0, -55, 0, -18, 0, -6, 0],
                      opacity: 1,
                      rotate: [-10, 0, 2, 0, -1, 0, 0.5, 0],
                      scale: [0.9, 1.03, 1],
                    }}

                    transition={{
                      duration: 1.8,
                      times: [
                        0,
                        0.35,
                        0.5,
                        0.65,
                        0.78,
                        0.88,
                        0.95,
                        1,
                      ],
                      ease: [
                        "easeIn",
                        "easeOut",
                        "easeIn",
                        "easeOut",
                        "easeIn",
                        "easeOut",
                        "easeIn",
                        "easeOut",
                      ],
                    }}

                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                      y: -12,
                    }}

                    whileTap={{
                      scale: 0.96,
                    }}

                  >

                    {/* Floating */}

                    <motion.div

                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                      "

                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 0.7, -0.7, 0],
                      }}

                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}

                    >

                      <Image

                        src="/udyamtatva_popup.png"

                        alt="Founder Roadmap"

                        width={420}

                        height={420}

                        priority

                        className="
                          object-contain
                          drop-shadow-[0_40px_90px_rgba(0,0,0,0.45)]
                        "

                      />

                    </motion.div>

                    {/* Shine */}

                    <motion.div

                      className="
                        absolute
                        top-0
                        left-0
                        h-full
                        w-20
                        bg-white/40
                        blur-xl
                        -skew-x-12
                      "

                      initial={{
                        x: -180,
                        opacity: 0,
                      }}

                      animate={{
                        x: 620,
                        opacity: [0, 1, 0],
                      }}

                      transition={{
                        delay: 1.1,
                        duration: 0.8,
                      }}

                    />

                  </motion.div>

                </Link>

              </motion.div>
             {/* Bottom Information */}

              <motion.div
                className="
                  absolute
                  bottom-6
                  left-1/2
                  -translate-x-1/2
                  flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.8,
                  duration: 0.6,
                }}
              >
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />

                <span className="text-sm font-semibold text-white tracking-wide">
                  Trusted by Founders • Investors • Enablers
                </span>
              </motion.div>

            </div>

          </motion.div>

        </motion.section>

      )}

    </AnimatePresence>

  );
}