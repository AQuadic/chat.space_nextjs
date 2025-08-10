"use client";
import BlueNumber1 from "@/components/icons/resources/BlueNumber1";
import BlueNumber2 from "@/components/icons/resources/BlueNumber2";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { easeOut } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const UsingTemplatesInWati = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-[#EFF6FF] py-8 sm:py-16"
    >
      <div className="container w-full h-full rounded-3xl bg-[#DBEAFE] p-12">
        <h2 className="text-[#111827] text-[30px] font-semibold font-[Poppins] text-center">
          Using Templates in Wati
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-12 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-5 w-full max-w-md">
            {/* ...existing code... */}
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <span className="min-w-[44px] flex justify-center items-center">
                <BlueNumber1 />
              </span>
              <h1 className="text-[#374151] text-base font-normal leading-6">
                Go to <span className="font-bold">&apos;Broadcasts&apos;</span>{" "}
                and click &apos;{" "}
                <span className="font-bold">New Template Message&apos;</span> in
                the top right <br /> corner.
              </h1>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <span className="min-w-[44px] flex justify-center items-center">
                <BlueNumber2 />
              </span>
              <h1 className="text-[#374151] text-base font-normal leading-6">
                Click{" "}
                <span className="font-bold">&apos;Use a template&apos;</span> to
                access the library.
              </h1>
            </motion.div>
            {/* ...existing code... */}
          </div>
          <motion.div
            className="flex-shrink-0 max-sm:mb-6"
            variants={itemVariant}
          >
            <Image
              src="/images/resources/usingTemplates.png"
              alt="image"
              width={378}
              height={180}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UsingTemplatesInWati;
