"use client";

import { TestimonialsData } from "@/constants/TestimonialsData";
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Testimonials = () => {
  return (
    <motion.section
      className="w-full pt-12 pb-[72px] bg-[#FFFEED]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="container">
        <motion.h1
          className="text-[#111827] md:text-4xl text-2xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Over 14,000 Customers Worldwide
        </motion.h1>
        <motion.p
          className="text-[#4B5563] xl:text-[22px] text-lg leading-7 font-normal mt-[18px] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          What our customers across 180+ countries say about us.
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-[42px]">
          {TestimonialsData.map((item, index) => (
            <motion.div
              key={index}
              className="w-[385px] py-9 bg-[#FFFFFF] rounded-3xl px-[22px] pt-7"
              style={{ boxShadow: "0px 0px 2px 0px #00000040" }}
              variants={cardVariants}
            >
              <Image src={item.rate} alt="rate" width={108} height={24} />
              <Image
                src="/images/testimonials/quotes.svg"
                alt="quotes"
                width={28}
                height={25}
                className="mt-[18px]"
              />
              <h2 className="text-[#000000] text-sm font-normal mt-[18px] capitalize leading-[200%]">
                &quot;{item.review}&quot;
              </h2>
              <div className="mt-4 flex items-center gap-[14px]">
                <Image
                  src={item.clientImage}
                  alt="client"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-[#000000] text-base font-semibold">
                    {item.clientName}
                  </h3>
                  <p className="text-[#5A5A5A] text-sm font-normal mt-1">
                    {item.clientJob}
                  </p>
                  <p className="text-[#589F55] text-sm font-semibold mt-1">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
