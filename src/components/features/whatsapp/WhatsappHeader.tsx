"use client";
import Credit from "@/components/icons/home/Credit";
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
      duration: 0.7,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhatsappHeader = () => {
  return (
    <motion.section
      className="container flex flex-col md:flex-row items-center justify-between gap-8 xl:gap-0 pt-8 pb-6 md:pt-[50px] md:pb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants} className="w-full md:w-1/2">
        <motion.p
          variants={childVariants}
          className="text-primary-green text-sm md:text-base font-medium leading-[100%] capitalize text-center md:text-left"
        >
          Chati Space for Marketing Agencies
        </motion.p>
        <motion.h1
          variants={childVariants}
          className="text-[#111827] text-3xl md:text-5xl font-semibold mt-2.5 capitalize leading-tight md:leading-[1.1] text-center md:text-left"
        >
          Make more effective use <br className="hidden md:block" /> of WhatsApp
          as a <br className="hidden md:block" /> channel
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-[#4B5563] text-base md:text-xl font-normal leading-[150%] mt-6 md:mt-8 capitalize text-center md:text-left"
        >
          Power up lead generation and relationship building on mobile{" "}
          <br className="hidden md:block" /> for your clients
        </motion.p>
        <motion.div
          variants={childVariants}
          className="mt-6 md:mt-7 flex flex-col md:flex-row items-center md:items-start md:gap-6 gap-3 justify-center md:justify-start"
        >
          <motion.div
            variants={childVariants}
            className="flex items-center gap-2"
          >
            <Image
              src="/images/testimonials/rate.png"
              alt="stars"
              width={80}
              height={22}
              className="w-20 h-5 object-contain"
            />
            <p className="text-[#4B5563] text-xs md:text-sm font-normal leading-[200%]">
              4.7/5 on G2
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="flex items-center gap-2"
          >
            <Credit />
            <p className="text-[#4B5563] text-xs md:text-sm font-normal leading-[200%]">
              No credit card required
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="w-full md:w-1/2 flex items-end justify-center md:justify-end relative mb-8 md:mb-0"
      >
        <div className="relative w-[90vw] max-w-[340px] md:max-w-[588px] h-[220px] md:h-[392px] flex items-end">
          <Image
            src="/images/features/whatsappHero.png"
            alt="hero"
            fill
            className="z-10 object-contain rounded-xl shadow-lg"
            sizes="(max-width: 768px) 90vw, 588px"
            style={{ objectPosition: "bottom" }}
          />
          <Image
            src="/images/solution/blueFrame.png"
            alt="blue frame"
            fill
            className="hidden md:block absolute top-8 left-12 -z-10 object-contain"
            sizes="588px"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatsappHeader;
