"use client";
import React from "react";
import { motion } from "framer-motion";

const FreeTrial = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="container bg-[#DCFCE7] rounded-2xl py-12 sm:py-16 flex flex-col items-center mb-10 mx-4 sm:mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-[#000000] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-[100%] text-center px-4"
        variants={contentVariants}
      >
        Ready to Simplify Your WhatsApp Operations?
      </motion.h1>
      <motion.button
        className="w-full max-w-[235px] h-[50px] sm:h-[60px] bg-[#10B981] rounded-[8px] mt-6 sm:mt-9 text-[#FFFFFF] text-base sm:text-lg font-semibold hover:bg-[#0d9668] transition-colors"
        variants={contentVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
      >
        Start 7 day free trial
      </motion.button>
    </motion.section>
  );
};

export default FreeTrial;
