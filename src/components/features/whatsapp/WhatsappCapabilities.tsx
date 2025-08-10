"use client";
import { WhatsappCapabilitiesData } from "@/constants/WhatsappCapabilitiesData";
import Image from "next/image";
import { motion, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [easeInOut] },
  },
};

const WhatsappCapabilities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  return (
    <section
      ref={sectionRef}
      className="bg-[#F9FAFB] md:p-20 p-4 mt-[50px] sm:mt-[106.5px]"
    >
      <motion.div
        className="container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {WhatsappCapabilitiesData.map((item, index) => (
          <motion.div
            key={index}
            className="lg:w-[384px] w-full lg:h-[212px] h-full bg-[#E6F3FA] rounded-2xl p-8"
            style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
            variants={cardVariants}
          >
            <Image src={item.icon} alt="icon" />
            <h1 className="text-[#111827] text-xl font-bold mt-[14px]">
              {item.title}
            </h1>
            <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-1.5">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatsappCapabilities;
