"use client";
import { HomeImpactData } from "@/constants/HomeImpactData";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeImpact = () => {
  return (
    <motion.section
      className="bg-[linear-gradient(90deg,_#EFF6FF_0%,_#ECFDF5_100%)] py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container flex flex-col items-center">
        <motion.h1
          className="text-[#000000] text-2xl sm:text-4xl font-semibold font-Poppins text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Real Impact. Real Results.
        </motion.h1>
        <motion.p
          className="text-[#5A5A5A] text-lg sm:text-xl leading-[150%] mt-2 text-center capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          See how businesses like yours are achieving extraordinary growth with
          ConnectFlow
        </motion.p>

        <motion.div
          className="mt-[42px] grid xl:grid-cols-4 md:grid-cols-2 gap-[14px]"
          variants={containerVariants}
        >
          {HomeImpactData.map((item, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[290px] bg-[#FFFFFF] rounded-3xl px-6 pt-5"
              style={{ boxShadow: "1px 1px 2px 0px #00000040" }}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 8px 24px 0px #6AC19233",
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                duration: 0.35,
              }}
            >
              <div className="flex items-center gap-2">
                <item.icon />
                <h2 className="text-[#000000] text-base font-medium !font-Inter ">
                  {item.name}
                </h2>
              </div>
              <h3 className="text-[#6AC192] text-2xl font-semibold mt-6">
                {item.percentage}
              </h3>
              <p className="text-[#5A5A5A] text-base font-normal mt-3 leading-[150%] capitalize">
                {item.details}
              </p>
              <hr className="mt-10 mb-3 text-[#5A5A5A4D]" />
              <Link
                href="/"
                className="text-[#6AC192] text-base font-medium left-7"
              >
                Read full story →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeImpact;
