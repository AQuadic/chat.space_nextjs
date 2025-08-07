"use client";

import { motion, easeInOut } from "framer-motion";
import Credit from "@/components/icons/home/Credit";
import Image from "next/image";
import React from "react";

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

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

const SharedTeamHero = () => {
  return (
    <motion.section
      className="container flex flex-wrap justify-between gap-8 xl:gap-0 pt-8 sm:pt-[50px] pb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <h1 className="text-[#111827] text-3xl sm:text-[52px] font-semibold leading-[1.2]">
          Manage <br className="max-sm:hidden" /> Conversations <br />
          <span className="text-[#00D563]">More Easily</span>
        </h1>
        <p className="text-[#4B5563] text-xl font-normal mt-5 sm:mt-10 capitalize leading-[150%]">
          Centralize message management and team <br /> collaboration.
        </p>
        <motion.div
          className="mt-7 flex flex-wrap items-center md:gap-6 gap-2"
          variants={childVariants}
        >
          <motion.div className="flex items-center" variants={childVariants}>
            <Image
              src="/images/testimonials/rate.png"
              alt="stars"
              width={90}
              height={24}
            />
            <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
              4.7/5 on G2
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            variants={childVariants}
          >
            <Credit />
            <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
              No credit card required
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="relative" variants={childVariants}>
        <Image
          src="/images/features/sharedTeamHero.png"
          alt="hero"
          width={588}
          height={392}
          className="z-10"
        />
        <Image
          src="/images/solution/blueFrame.png"
          alt="blue frame"
          width={572}
          height={394}
          className="md:block hidden absolute top-5 left-10 -z-10"
        />
      </motion.div>
    </motion.section>
  );
};

export default SharedTeamHero;
