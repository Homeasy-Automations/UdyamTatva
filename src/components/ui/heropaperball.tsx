// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export function HeroPaperBall() {

//   return (
//     <Link href="/foundercircle">

//         <motion.div
//         className="
//             relative
//             cursor-pointer
//             w-[360px]
//             h-[360px]
//             flex
//             items-center
//             justify-center
//             select-none
//         "
//         initial={{
//             y: -260,
//             opacity: 0,
//             rotate: -8,
//             scale: 0.9,
//         }}
//         animate={{
//             y: [-260, 0, -50, 0, -14, 0, -4, 0],
//             opacity: 1,
//             rotate: [-8, 0, 2, 0, -1, 0, 0.5, 0],
//             scale: [0.9, 1.02, 1],
//         }}
//         transition={{
//             duration: 1.6,
//             times: [0, 0.35, 0.5, 0.65, 0.76, 0.85, 0.92, 1],
//             ease: [
//             "easeIn",
//             "easeOut",
//             "easeIn",
//             "easeOut",
//             "easeIn",
//             "easeOut",
//             "easeIn",
//             "easeOut",
//             ],
//         }}
//         whileHover={{
//             scale: 1.06,
//             rotate: 2,
//             y: -8,
//             transition: {
//             duration: 0.25,
//             },
//         }}
//         whileTap={{
//             scale: 0.94,
//         }}
//         >

//         {/* Paper Ball */}
//         <motion.div
//         className="
//             absolute
//             inset-0
//             flex
//             items-center
//             justify-center
//         "
//         animate={{
//             y: [0, -8, 0],
//             rotate: [0, 0.6, -0.6, 0],
//         }}
//         transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//         }}
//         >
//         <Image
//             src="/hero.png"
//             alt="Founder Roadmap"
//             width={360}
//             height={360}
//             priority
//             className="
//             object-contain
//             drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
//             "
//         />
//         </motion.div>


//         {/* Opening Paper Effect */}

//         <motion.div
//         className="
//             absolute
//             top-0
//             left-0
//             h-full
//             w-16
//             bg-white/40
//             blur-xl
//             -skew-x-12
//         "
//         initial={{
//             x: -150,
//             opacity: 0,
//         }}
//         animate={{
//             x: 500,
//             opacity: [0, 1, 0],
//         }}
//         transition={{
//             delay: 1.2,
//             duration: 0.8,
//         }}
//         />


//       </motion.div>

//     </Link>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroPaperBall() {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // Freeze website while popup is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Button */}

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white text-black text-3xl hover:scale-110 transition"
          >
            ×
          </button>

          <Link href="/foundercircle" onClick={() => setOpen(false)}>
            <motion.div
              className="relative cursor-pointer select-none"
              initial={{
                y: -260,
                opacity: 0,
                rotate: -8,
                scale: 0.9,
              }}
              animate={{
                y: [-260, 0, -50, 0, -14, 0, -4, 0],
                opacity: 1,
                rotate: [-8, 0, 2, 0, -1, 0, 0.5, 0],
                scale: [0.9, 1.02, 1],
              }}
              transition={{
                duration: 1.6,
                times: [0, 0.35, 0.5, 0.65, 0.76, 0.85, 0.92, 1],
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              {/* Floating Image */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.6, -0.6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={
                    isMobile
                      ? "/hero.png" // Portrait Image
                      : "/udyamtatva_popup.png" // Landscape Image
                  }
                  alt="Founder Circle"
                  width={isMobile ? 380 : 1000}
                  height={isMobile ? 600 : 560}
                  priority
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </motion.div>

              {/* Shine Effect */}

              <motion.div
                className="absolute top-0 left-0 h-full w-16 bg-white/40 blur-xl -skew-x-12"
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                animate={{
                  x: isMobile ? 450 : 1200,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}