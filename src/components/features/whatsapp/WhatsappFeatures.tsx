"use client";
import SolutionCheck from "@/components/icons/solution/SolutionCheck";
import React, { useRef } from "react";
import whatsappImg1 from "../../../../public/images/features/whatsappImg1.png";
import whatsappImg2 from "../../../../public/images/features/whatsappImg2.png";
import whatsappImg3 from "../../../../public/images/features/whatsappImg3.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const WhatsappFeatures = () => {
  // Create refs for each block
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: "-100px" });
  const inView2 = useInView(ref2, { once: true, margin: "-100px" });
  const inView3 = useInView(ref3, { once: true, margin: "-100px" });
  return (
    <section className="container grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-[65px] pb-[50px]">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 40 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-[#111827] lg:text-2xl text-base font-bold leading-[100%]">
          Maximize WhatsApp as a Channel
        </h1>
        <ul className="mt-8">
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3">
            <SolutionCheck />
            Lead-gen awareness campaigns
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            Rich mobile promotions
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            Interactive customer journeys
          </li>
        </ul>
        <Image src={whatsappImg1} alt="image" className="mt-6" />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 40 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <h1 className="text-[#111827] lg:text-2xl text-base font-bold leading-[100%]">
          Partner with Wati
        </h1>
        <ul className="mt-8">
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3">
            <SolutionCheck />
            Recommend Wati to clients
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            Manage WhatsApp for them
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            White-label solutions
          </li>
        </ul>
        <Image src={whatsappImg2} alt="image" className="mt-6" />
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 40 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-[#111827] lg:text-2xl text-base font-bold leading-[100%]">
          Added Value from Efficiency
        </h1>
        <ul className="mt-8">
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3">
            <SolutionCheck />
            Custom configuration
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            Performance reporting
          </li>
          <li className="text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3">
            <SolutionCheck />
            24/7 support
          </li>
        </ul>
        <Image src={whatsappImg3} alt="image" className="mt-6" />
      </motion.div>
    </section>
  );
};

export default WhatsappFeatures;
