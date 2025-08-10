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
      className="container flex flex-wrap justify-between gap-8 xl:gap-0 pt-[50px] pb-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={childVariants}>
        <motion.p
          variants={childVariants}
          className="text-primary-green text-base font-medium leading-[100%] capitalize"
        >
          Chati Space for Marketing Agencies
        </motion.p>
        <motion.h1
          variants={childVariants}
          className="text-[#111827] text-5xl font-semibold mt-2.5 capitalize leading-[1.1]"
        >
          Make more effective use <br /> of WhatsApp as a <br /> channel
        </motion.h1>
        <motion.p
          variants={childVariants}
          className="text-[#4B5563] text-xl font-normal leading-[150%] mt-8 capitalize"
        >
          Power up lead generation and relationship building on mobile <br />{" "}
          for your clients
        </motion.p>
        <motion.div
          variants={childVariants}
          className="mt-7 flex flex-wrap items-center md:gap-6 gap-2"
        >
          <motion.div variants={childVariants} className="flex items-center">
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
            variants={childVariants}
            className="flex items-center gap-2"
          >
            <Credit />
            <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
              No credit card required
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div variants={childVariants} className="relative">
        <Image
          src="/images/features/whatsappHero.png"
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
          className="md:block hidden absolute top-8 left-12 -z-10"
        />
      </motion.div>
    </motion.section>
  );
};

export default WhatsappHeader;
