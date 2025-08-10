"use client";
import { NotificationCapabilitiesData } from "@/constants/NotificationCapabilitiesData";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const NotificationCapabilities = () => {
  return (
    <section className="bg-[#EFF6FF] py-16">
      <motion.div
        className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {NotificationCapabilitiesData.map((item, index) => (
          <motion.div
            key={index}
            className="xl:w-[346px] w-full h-[246px] bg-[#FFFFFF] border border-[#DBEAFE] rounded-[12px] flex flex-col items-center py-[33px]"
            variants={cardVariants}
          >
            <item.icon />
            <h1 className="text-[#111827] text-lg sm:text-xl font-semibold mt-6">
              {item.title}
            </h1>
            <p className="text-[#4B5563] max-sm:text-sm font-normal leading-[150%] mt-4 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NotificationCapabilities;
