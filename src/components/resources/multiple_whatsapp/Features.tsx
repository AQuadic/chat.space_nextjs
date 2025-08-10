"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const textVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="container py-16 sm:py-12 lg:py-24 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Feature 1 */}
      <motion.div
        className="flex max-sm:flex-col-reverse items-center justify-between gap-8"
        variants={featureVariants}
      >
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/feature1.png"
            alt="feature1"
            width={480}
            height={312}
            className="w-full max-w-[400px] sm:max-w-[480px] h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <h2 className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-[100%]">
            One-Click Broadcasts
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[150%] mt-4 sm:mt-6 capitalize">
            Wati brings every connected WhatsApp number into{" "}
            <br className="hidden lg:block" /> a single inbox. Simply select the
            number and dive <br className="hidden lg:block" /> into chats
            without switching accounts.
          </p>
        </motion.div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div
        className="flex max-sm:flex-col lg:flex-row flex-col-reverse lg:items-center justify-between gap-8 mt-12 sm:mt-16 md:mt-20"
        variants={featureVariants}
      >
        <motion.div variants={textVariantsRight}>
          <h2 className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-[100%]">
            One-Click Broadcasts
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[150%] mt-4 sm:mt-6 capitalize">
            Draft your template once and Wati pushes it across{" "}
            <br className="hidden lg:block" /> all numbers
            simultaneously—complete with per- <br className="hidden lg:block" />
            number analytics to track performance.
          </p>
        </motion.div>
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/feature2.png"
            alt="feature2"
            width={592}
            height={384}
            className="w-full max-w-[500px] sm:max-w-[592px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Feature 3 */}
      <motion.div
        className="flex max-sm:flex-col-reverse items-center justify-between gap-8 mt-12 sm:mt-16 md:mt-20"
        variants={featureVariants}
      >
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/feature3.png"
            alt="feature3"
            width={592}
            height={395}
            className="w-full max-w-[500px] sm:max-w-[592px] h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <h2 className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-[100%]">
            Unified Contact Hub
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[150%] mt-4 sm:mt-6 capitalize">
            Wati aggregates contacts from every number into one{" "}
            <br className="hidden lg:block" /> list, tagging each entry with its
            WhatsApp number so <br className="hidden lg:block" /> you can filter
            or segment instantly.
          </p>
        </motion.div>
      </motion.div>

      {/* Feature 4 */}
      <motion.div
        className="flex max-sm:flex-col lg:flex-row flex-col-reverse lg:items-center justify-between gap-8 mt-12 sm:mt-16 md:mt-20"
        variants={featureVariants}
      >
        <motion.div variants={textVariantsRight}>
          <h2 className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-[100%]">
            Automations Across Numbers
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[150%] mt-4 sm:mt-6 capitalize">
            Any automation—Default Actions, Keywords, Sequences,{" "}
            <br className="hidden lg:block" /> Routing, Chatbots, or AI
            Agents—runs on all connected <br className="hidden lg:block" />{" "}
            numbers. Need a custom rule? Scope it to the specific{" "}
            <br className="hidden lg:block" /> number you choose.
          </p>
        </motion.div>
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/feature4.png"
            alt="feature4"
            width={592}
            height={384}
            className="w-full max-w-[500px] sm:max-w-[592px] h-auto"
          />
        </motion.div>
      </motion.div>

      {/* Feature 5 */}
      <motion.div
        className="flex max-sm:flex-col-reverse items-center justify-between gap-8 mt-12 sm:mt-16 md:mt-20 "
        variants={featureVariants}
      >
        <motion.div variants={imageVariants}>
          <Image
            src="/images/resources/feature5.png"
            alt="feature5"
            width={592}
            height={395}
            className="w-full max-w-[500px] sm:max-w-[592px] h-auto"
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <h2 className="text-[#111827] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold leading-[100%]">
            Mobile-First Flexibility
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[150%] mt-4 sm:mt-6 capitalize">
            On desktop or in our iOS and Android apps, Wati lets you{" "}
            <br className="hidden lg:block" /> switch numbers, reply to chats,
            and trigger automations <br className="hidden lg:block" /> wherever
            you are-ensuring no message ever slips through.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Features;
