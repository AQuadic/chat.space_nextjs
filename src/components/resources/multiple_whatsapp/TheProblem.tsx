"use client";
import { ProblemData } from "@/constants/ProblemData";
import React from "react";
import { motion } from "framer-motion";

const TheProblem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="bg-[#EFF6FF] py-12 sm:py-16">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-[#111827] text-2xl sm:text-3xl lg:text-4xl font-semibold text-center font-poppins capitalize"
          variants={headerVariants}
        >
          The Problem
        </motion.h1>
        <motion.p
          className="text-[#4B5563] text-base sm:text-lg lg:text-xl font-normal mt-3 sm:mt-4 capitalize text-center leading-[150%] px-4"
          variants={headerVariants}
        >
          You&apos;re juggling separate WhatsApp subscriptions—and it&apos;s
          costing you growth, <br className="hidden sm:block" /> efficiency, and
          your brand every day.
        </motion.p>
        <motion.div
          className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-8 sm:mt-12 justify-center"
          variants={containerVariants}
        >
          {ProblemData.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[284px] mx-auto h-auto min-h-[268px] bg-[#FFFFFF] rounded-2xl flex flex-col items-center p-6 sm:p-8"
              style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <item.icon />
              <h2 className="text-[#111827] text-lg sm:text-xl font-semibold mt-4 sm:mt-6 text-center">
                {item.text}
              </h2>
              <p className="text-[#4B5563] text-sm sm:text-base font-normal font-[Inter] text-center mt-2 sm:mt-3 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TheProblem;
