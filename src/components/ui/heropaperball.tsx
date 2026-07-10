"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroPaperBall() {

  return (
    <Link href="/roadmap">

      <motion.div
        className="
          relative
          cursor-pointer
          w-[320px]
          h-[320px]
          flex
          items-center
          justify-center
        "

        initial={{
          scale:0,
          rotate:180,
          opacity:0
        }}

        animate={{
          scale:1,
          rotate:0,
          opacity:1
        }}

        transition={{
          duration:1.2,
          type:"spring",
          bounce:0.5
        }}


        whileHover={{
          scale:1.08,
          rotate:5
        }}

        whileTap={{
          scale:0.95
        }}

      >

        {/* Paper Ball */}
        <motion.div

          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "

          initial={{
            scale:1
          }}

          animate={{
            scale:[1,1.05,1]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

        >

          <Image

            src="/hero.png"

            alt="Founder roadmap"

            width={320}

            height={320}

            className="
              object-contain
              drop-shadow-2xl
            "

          />

        </motion.div>


        {/* Opening Paper Effect */}

        <motion.div

          className="
            absolute
            inset-0
            rounded-full
            bg-white/20
            backdrop-blur-sm
          "

          initial={{
            scale:1,
            opacity:1
          }}

          animate={{
            scale:1.5,
            opacity:0
          }}

          transition={{
            delay:1,
            duration:1
          }}

        />


      </motion.div>

    </Link>
  );
}