"use client";
import { SolutionCapabilitiesData } from "@/constants/SoluionCapabilitiesData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { easeInOut } from "framer-motion";
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const SolutionCapabilities = () => {
  return (
    <motion.section
      className="bg-[#B9EBFFCC] md:p-20 p-4"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {SolutionCapabilitiesData.map((item, index) => (
          <motion.div
            key={index}
            className="lg:w-[384px] w-full lg:h-[212px] h-full bg-[#FFFFFF] rounded-2xl p-8 cursor-pointer"
            style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
            variants={cardVariants}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 8px 32px 0px #38BDF833",
              y: -8,
              transition: { type: "spring", stiffness: 350, damping: 22 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Image src={item.icon} alt="icon" />
            <h1 className="text-[#111827] text-xl font-bold mt-[14px]">
              {item.title}
            </h1>
            <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-1.5">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SolutionCapabilities;
