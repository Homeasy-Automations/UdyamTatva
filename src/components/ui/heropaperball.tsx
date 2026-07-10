"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function HeroPaperBall() {

  return (
    <Link href="/">

        <motion.div
        className="
            relative
            cursor-pointer
            w-[360px]
            h-[360px]
            flex
            items-center
            justify-center
            select-none
        "
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
            scale: 1.06,
            rotate: 2,
            y: -8,
            transition: {
            duration: 0.25,
            },
        }}
        whileTap={{
            scale: 0.94,
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
            src="/hero.png"
            alt="Founder Roadmap"
            width={360}
            height={360}
            priority
            className="
            object-contain
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
            "
        />
        </motion.div>


        {/* Opening Paper Effect */}

        <motion.div
        className="
            absolute
            top-0
            left-0
            h-full
            w-16
            bg-white/40
            blur-xl
            -skew-x-12
        "
        initial={{
            x: -150,
            opacity: 0,
        }}
        animate={{
            x: 500,
            opacity: [0, 1, 0],
        }}
        transition={{
            delay: 1.2,
            duration: 0.8,
        }}
        />


      </motion.div>

    </Link>
  );
}