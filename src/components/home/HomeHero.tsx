"use client";
import React from "react";
import { motion } from "framer-motion";
import Check from "../icons/home/Check";
import heroImg from "../../../public/images/home/heroImg.png";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_#EFF6FF_0%,_#ECFDF5_100%)] pt-[51px] ">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:py-10"
        >
          <h2 className="text-[#2D3E50] text-3xl sm:text-5xl font-semibold leading-[1.2]">
            Connect better. <br />
            <span className="text-[#00C58E]">Chati.Space</span> All On <br />
            WhatsApp
          </h2>
          <p className="text-[#4B5563] text-lg sm:text-xl font-normal leading-[150%] mt-8 md:w-[470px]">
            Transform your customer communication with automated WhatsApp
            messaging that drives sales and builds relationships.
          </p>
          <motion.div
            className="flex items-center gap-7 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button className="md:w-[200px] w-full h-14 bg-[#00C58E] rounded-[12px] text-[#FFFFFF] sm:text-lg font-semibold">
              Book Demo
            </button>
            <button className="md:w-[200px] w-full h-14 border-2 border-[#2D3E50] rounded-[12px] text-[#2D3E50] sm:text-lg font-semibold">
              Contact US
            </button>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap  max-sm:justify-center flex-row  md:items-center md:gap-6 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["No credit card", "No setup fees", "24\\7 Support"].map(
              (text, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check />
                  <p className="text-[#6B7280] text-sm font-semibold">{text}</p>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className="self-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Image src={heroImg} alt="hero image" />
        </motion.div>
      </div>
    </section>
  );
};
export default HomeHero;
