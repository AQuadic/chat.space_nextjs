"use client";

import { HomeTeams } from "@/constants/HomeTeams";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      duration: 0.7,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const WhyChatiSpace = () => {
  return (
    <motion.section
      className="container py-5"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[#000000] text-2xl sm:text-4xl font-semibold !font-Poppins text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Why teams choose Chati Space
      </motion.h1>
      <motion.p
        className="text-[#5A5A5A] text-lg sm:text-xl leading-[150%] mt-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Built for modern teams who demand speed, scale, and simplicity
      </motion.p>

      <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center gap-6 max-sm:text-center">
        {HomeTeams.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-full min-h-[390px]"
            variants={itemVariants}
          >
            <div className="flex items-end max-sm:mx-auto h-[290.81px]">
              <Image
                src={item.image}
                alt="team"
                width={253.5}
                height={290.81}
              />
            </div>
            <h2 className="text-[#000000] text-xl sm:text-2xl font-medium mb-4 mt-6">
              {item.title}
            </h2>
            <p className="text-[#000000] text-lg sm:text-xl font-normal leading-[200%] w-[278px] capitalize">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChatiSpace;
