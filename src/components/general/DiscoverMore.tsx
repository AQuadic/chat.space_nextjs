"use client";
import React from "react";
import { motion } from "framer-motion";
import Whatsapp from "../icons/Whatsapp";
import Link from "next/link";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import UpArrow from "../icons/UpArrow";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const DiscoverMore = () => {
  return (
    <motion.section
      className="pt-7 pb-14 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-[#1F2937] text-[2rem] sm:text-[2.2rem] md:text-[2.5rem] font-semibold text-center !font-Poppins"
        variants={itemVariants}
      >
        Discover more.
      </motion.h1>
      <motion.p
        className="text-[#6B7280] text-base sm:text-lg font-normal leading-[150%] mt-4 text-center"
        variants={itemVariants}
      >
        WhatsApp, Facebook, and Instagram are leaders in social messaging.
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-9 mt-7"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Whatsapp />
            <p className="text-[#22C55E] text-lg sm:text-xl font-bold leading-7 !font-inter">
              WhatsApp
            </p>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Facebook />
            <p className="text-[#2563EB] text-lg sm:text-xl font-bold leading-7 !font-inter">
              Facebook
            </p>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <Instagram />
            <p className="text-[#EC4899] text-lg sm:text-xl font-bold leading-7 !font-inter">
              Instagram
            </p>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center"
        variants={itemVariants}
      >
        <UpArrow />
        <p className="text-[#4B5563] text-base sm:text-xl font-semibold max-w-[400px] sm:max-w-none">
          chati space is one of the fastest-growing WhatsApp Business Solution
          Providers
        </p>
      </motion.div>
      <motion.div className="flex justify-center mt-10" variants={itemVariants}>
        <motion.button
          className="w-full max-w-[210px] h-[52px] sm:h-[60px] rounded-[12px] bg-[#22C55E] text-[#FFFFFF] text-base sm:text-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Book a Demo
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default DiscoverMore;
