"use client";
import { SharedTeamCapabilitiesData } from "@/constants/SharedTeamCapabilitiesData";
import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const containerVariants = {
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px rgba(59,130,246,0.12)",
    transition: { duration: 0.2 },
  },
};

const SharedTeamsCapabilities = () => {
  return (
    <motion.section
      className="container mb-[134px] mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="w-full border-2 border-[#BFDBFE] rounded-[16px] grid lg:grid-cols-3 gap-4 p-[34px]"
        variants={containerVariants}
      >
        {SharedTeamCapabilitiesData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={cardVariants}
            whileHover="hover"
          >
            <item.icon />
            <h2 className="text-[#111827] text-xl font-semibold mt-2.5 capitalize">
              {item.title}
            </h2>
            <p className="text-[#4B5563] text-base font-normal leading-[150%] text-center md:w-[320px] capitalize mt-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SharedTeamsCapabilities;
