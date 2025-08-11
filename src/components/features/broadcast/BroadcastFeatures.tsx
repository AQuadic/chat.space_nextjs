"use client";
import SolutionCheck from "@/components/icons/solution/SolutionCheck";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import multipleContacts from "../../../../public/images/features/multipleContacts.png";
import multipleContacts2 from "../../../../public/images/features/multipleContacts2.png";
import multipleContacts3 from "../../../../public/images/features/multipleContacst3.png";

// const containerVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.2,
//       duration: 0.7,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const BroadcastFeatures = () => {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <motion.div
        className="flex lg:flex-row flex-col items-center justify-between mb-8 "
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-[#111827] md:text-4xl text-2xl font-semibold font-Poppins leading-[100%] capitalize">
            Broadcast to multiple contacts
          </h2>
          <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
            Create and run campaigns direct to each contact <br /> through
            WhatsApp.
          </p>
          <ul className="mt-7">
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize">
              <SolutionCheck />
              Email marketing management functionality for WhatsApp.
            </li>
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize">
              <SolutionCheck />
              Automated message management for efficient campaigning.
            </li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp} className="max-sm:w-full max-sm:mt-6">
          <Image
            src={multipleContacts}
            alt="image"
            width={603.2}
            height={394}
            className="w-full h-auto object-cover max-sm:w-full max-sm:h-auto mx-auto max-w-[519px]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex lg:flex-row-reverse flex-col items-center justify-between mb-8 lg:mt-0 mt-4"
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins leading-[100%] capitalize">
            Broadcast to multiple contacts
          </h2>
          <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
            Create and run campaigns direct to each contact <br /> through
            WhatsApp.
          </p>
          <ul className="mt-7">
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize">
              <SolutionCheck />
              Email marketing management functionality for WhatsApp.
            </li>
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize">
              <SolutionCheck />
              Automated message management for efficient campaigning.
            </li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp} className="max-sm:mt-6">
          <Image
            src={multipleContacts2}
            alt="image"
            width={603.2}
            height={394}
            className="w-full h-auto object-cover max-sm:w-full max-sm:h-auto max-sm:mx-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex lg:flex-row flex-col items-center justify-between mb-8 lg:mt-0 mt-4"
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins leading-[1.2] capitalize">
            Build your business in fast <br /> growth economies
          </h2>
          <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
            Support for hundreds of languages and dialects lets you <br />{" "}
            connect with more customers.
          </p>
          <ul className="mt-7">
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize">
              <SolutionCheck />
              Connect with more customers and prospects all around the world.
            </li>
            <li className="text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize">
              <SolutionCheck />
              Sell more and provide better support in fast developing markets.
            </li>
          </ul>
        </motion.div>
        <motion.div variants={fadeInUp} className="max-sm:mt-6">
          <Image
            src={multipleContacts3}
            alt="image"
            width={603.2}
            height={394}
            className="w-full h-auto object-cover max-sm:w-full max-sm:h-auto"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BroadcastFeatures;
