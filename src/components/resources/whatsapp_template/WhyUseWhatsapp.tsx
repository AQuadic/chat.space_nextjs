"use client";
import Number1 from "@/components/icons/resources/Number1";
import Number2 from "@/components/icons/resources/Number2";
import Number3 from "@/components/icons/resources/Number3";
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

const WhyUseWhatsapp = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-[#F0FDF4] py-8 sm:py-16"
    >
      <div className="container w-full h-full rounded-3xl bg-[#DCFCE7] p-12">
        <h2 className="text-[#111827] text-[30px] font-semibold font-[Poppins] text-center">
          Why use WhatsApp Templates?
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-12 max-sm:flex-col max-sm:gap-8">
          <motion.div
            className="flex-shrink-0 max-sm:mb-6"
            variants={itemVariant}
          >
            <Image
              src="/images/resources/whyuseWhatsapp.png"
              alt="image"
              width={378}
              height={180}
              className="max-w-full h-auto"
            />
          </motion.div>
          <div className="flex flex-col gap-5 w-full max-w-md">
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <span className="min-w-[44px] flex justify-center items-center">
                <Number1 />
              </span>
              <div>
                <h1 className="text-[#111827] text-base font-semibold">
                  Save Time
                </h1>
                <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize">
                  Broadcast messages swiftly and efficiently
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <span className="min-w-[44px] flex justify-center items-center">
                <Number2 />
              </span>
              <div>
                <h1 className="text-[#111827] text-base font-semibold">
                  Consistent Branding
                </h1>
                <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize">
                  Keep your brand image professional and reliable
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-4"
              variants={itemVariant}
            >
              <span className="min-w-[44px] min-h-[44px] flex justify-center items-center">
                <Number3 />
              </span>
              <div>
                <h1 className="text-[#111827] text-base font-semibold">
                  Personalization
                </h1>
                <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize">
                  Add the recipient&apos;s name or specific offers to make
                  customers feel valuable and <br /> appreciated
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUseWhatsapp;
