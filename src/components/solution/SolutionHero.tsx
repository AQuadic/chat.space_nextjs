"use client";
import Image from "next/image";
import React from "react";
import Credit from "../icons/home/Credit";
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

const SolutionHero = () => {
  return (
    <motion.section
      className="container flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center items-center justify-between flex-wrap gap-8 xl:gap-0 pt-[50px] pb-8"
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
          Engage and grow <br /> student sign ups on <br />
          <span className="text-[#00D563]">WhatsApp</span>
        </motion.h2>
        <motion.p
          variants={childVariants}
          className="text-[#374151] text-lg sm:text-xl font-normal leading-[150%] mt-5"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Market classes, manage admission, onboard students and <br /> keep up
          to date.
        </motion.p>
        <motion.div
          variants={childVariants}
          className="mt-7 flex flex-wrap items-center md:gap-6 gap-2 max-sm:justify-center max-sm:flex-col max-sm:gap-4"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            variants={childVariants}
            className="flex items-center gap-1 max-sm:justify-center"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="w-[90px] h-6 flex items-center justify-center">
              <Image
                src="/images/testimonials/rate.png"
                alt="stars"
                width={90}
                height={24}
              />
            </span>
            <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
              4.7/5 on G2
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex items-center gap-2 max-sm:justify-center"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <span className="w-4 h-4 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4">
              <Credit />
            </span>
            <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
              No credit card required
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="relative max-sm:w-full max-sm:flex max-sm:justify-center"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/solution/solutionHero.png"
          alt="hero"
          width={320}
          height={212}
          className="z-10 max-sm:w-[320px] max-sm:h-auto md:w-[588px] md:h-[392px]"
        />
        <Image
          src="/images/solution/blueFrame.png"
          alt="blue frame"
          width={320}
          height={220}
          className="md:block hidden absolute top-8 left-12 -z-10 md:w-[572px] md:h-[394px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default SolutionHero;
