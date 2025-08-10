"use client";

import { SetStateAction, useState } from "react";
import Credit from "@/components/icons/features/Credit";
import Image from "next/image";
import { motion } from "framer-motion";

const languages = [
  "English",
  "Hindi",
  "Spanish",
  "Portuguese",
  "Bahasa",
  "Arabic",
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhatsappHero = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelect = (language: SetStateAction<string>) => {
    setSelectedLanguage(language);
  };

  return (
    <motion.section
      className="container flex flex-col md:flex-row items-center justify-between gap-8 xl:gap-0 pt-10 pb-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="w-full md:w-1/2" variants={childVariants}>
        <motion.h1
          className="text-[#111827] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight capitalize max-sm:text-center"
          variants={childVariants}
        >
          Festive Messaging <br />
          Made Easier!
          <br />
        </motion.h1>
        <motion.p
          className="text-[#4B5563] text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed font-normal capitalize mt-6 max-sm:text-center"
          variants={childVariants}
        >
          Access Ready-to-use WhatsApp Templates to boost <br /> conversions and
          engagement
        </motion.p>
        <motion.div
          className="w-full max-w-[201px] h-[60px] bg-[#22C55E] rounded-full flex items-center justify-center mt-10 mx-auto md:mx-0 shadow-lg"
          variants={childVariants}
        >
          <p className="text-[#FFFFFF] text-base sm:text-lg font-semibold">
            Free 7 Day Trial
          </p>
        </motion.div>
        <motion.div
          className="mt-6 flex flex-wrap items-center md:gap-6 gap-2 justify-center md:justify-start"
          variants={childVariants}
        >
          <div className="flex items-center">
            <Image
              src="/images/testimonials/rate.png"
              alt="stars"
              width={90}
              height={24}
            />
            <p className="text-[#4B5563] text-xs sm:text-sm font-normal leading-[200%] ml-2">
              4.7/5 on G2
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Credit />
            <p className="text-[#4B5563] text-xs sm:text-sm font-normal leading-[200%]">
              No credit card required
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap gap-2 xl:gap-1 justify-center md:justify-start"
          variants={childVariants}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              className={`px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-full cursor-pointer transition-colors duration-200 ${
                selectedLanguage === lang
                  ? "text-white bg-[#111827]"
                  : "text-[#374151] bg-[#F3F4F6]"
              }`}
              onClick={() => handleLanguageSelect(lang)}
              aria-pressed={selectedLanguage === lang}
            >
              {lang}
            </button>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 relative flex items-center justify-center mb-8 md:mb-0"
        variants={childVariants}
      >
        <Image
          src="/images/resources/whatsapTemhero.png"
          alt="hero"
          width={588}
          height={392}
          className="z-10 w-full max-w-[400px] md:max-w-[588px] h-auto mx-auto"
        />
        <Image
          src="/images/solution/blueFrame.png"
          alt="blue frame"
          width={572}
          height={394}
          className="md:block hidden absolute top-1 left-14 -z-10"
        />
      </motion.div>
    </motion.section>
  );
};

export default WhatsappHero;
