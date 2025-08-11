"use client";
import Credit from "@/components/icons/features/Credit";
import Star from "@/components/icons/features/Star";
import React from "react";
import broadcastHero from "../../../../public/images/features/broadcastHero.png";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const BroadcastHero = () => {
  return (
    <motion.section
      className="container flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center items-center justify-between py-[54px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div
        variants={childVariants}
        className="max-sm:mb-8"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          variants={childVariants}
          className="text-[#000000] text-base font-normal leading-[150%]"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Broadcast & Bulk Messages
        </motion.h1>
        <motion.h2
          variants={childVariants}
          className="text-[#111827] md:text-[52px] text-3xl font-semibold mt-[10px]"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Drive engagement
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-[#374151] text-lg sm:text-xl font-normal leading-[150%] mt-5 capitalize"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Design and manage your campaigns to get better results.
        </motion.p>
        <motion.div
          variants={childVariants}
          className="flex items-center gap-6 md:mt-14 mt-8 md:mb-0 mb-4 max-sm:justify-center max-sm:flex-col max-sm:gap-4"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            variants={childVariants}
            className="flex items-center gap-1 max-sm:justify-center"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">
              <Star />
            </span>
            <p className="text-[#374151] text-sm font-medium">4.7/5 on G2</p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex items-center gap-1 max-sm:justify-center"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">
              <Credit />
            </span>
            <p className="text-[#374151] text-sm font-medium capitalize">
              No credit card required
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="max-sm:w-full max-sm:flex max-sm:justify-center"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={broadcastHero}
          alt="Hero"
          className="max-sm:w-[320px] max-sm:h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default BroadcastHero;
