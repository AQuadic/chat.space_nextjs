"use client";
import React from "react";
import { motion } from "framer-motion";
import SolutionCheck from "../icons/solution/SolutionCheck";
import Image from "next/image";

const SolutionFeatures = () => {
  return (
    <section className="container py-[50px]">
      {/* Smarter Lead Management */}
      <motion.div
        className="flex md:flex-row flex-col items-center justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <h2 className="text-[#111827] md:text-4xl text-xl font-semibold !font-Poppins mb-2.5 text-center md:text-left">
            Smarter Lead Management
          </h2>
          <ul>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Integrate with your existing CRM system
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Automate lead qualification and scoring
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Track conversion rates and optimize campaigns
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center">
          <Image
            src="/images/solution/smarterlead.png"
            alt="image"
            width={440}
            height={440}
            className="max-w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Close More Sales */}
      <motion.div
        className="flex max-sm:flex-col-reverse items-center justify-between md:mt-0 mt-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center">
          <Image
            src="/images/solution/closemoresales.png"
            alt="image"
            width={440}
            height={440}
            className="max-w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-[#111827] md:text-4xl text-xl font-semibold !font-Poppins mb-2.5 text-center md:text-left">
            Close More Sales
          </h2>
          <ul>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Send rich media content including videos and documents
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Respond to inquiries within seconds
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Use templates for consistent messaging
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Better Learning Outcomes */}
      <motion.div
        className="flex md:flex-row flex-col items-center justify-between md:mt-0 mt-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      >
        <div>
          <h2 className="text-[#111827] md:text-4xl text-xl font-semibold !font-Poppins mb-2.5 text-center md:text-left">
            Better Learning Outcomes
          </h2>
          <ul>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Provide 24/7 student support and guidance
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Share study materials and resources instantly
            </li>
            <li className="flex items-center gap-2 text-[#4B5563] text-sm md:text-base font-normal mt-3">
              <SolutionCheck />
              Improve exam results with personalized coaching
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center">
          <Image
            src="/images/solution/betterlearning.png"
            alt="image"
            width={440}
            height={440}
            className="max-w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionFeatures;
