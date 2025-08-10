
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Festivals = () => {
  const languages = [
    "English",
    "Hindi",
    "Spanish",
    "Portuguese",
    "Bahasa",
    "Arabic",
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const festivals = [
    "Gandhi Jayanti",
    "Navaratri & Dussehra",
    "Sales",
    "Cyber Monday",
    "Thanksgiving",
    "Black Friday",
    "Diwali",
    "Dhanteras",
    "Republic Day",
    "Makar Sankranti",
    "Holi",
    "Easter",
    "Women's Day",
    "Ramadan",
    "Eid al-Adha",
    "Independence Day",
    "Raksha Bandhan",
    "Janmashtami",
    "Ganesh Chaturthi",
    "Brazil Independence",
    "Ecommerce",
    "Education",
    "Healthcare",
  ];

  // Framer Motion animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#F9FAFB] py-16">
      <div className="container mt-6 mb-12 sm:mb-24 flex flex-wrap items-center md:gap-6 gap-2 justify-center md:justify-start">
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
      </div>
      <h1 className="text-[#111827] text-[30px] font-semibold font-[Poppins] text-center">
        Festivals
      </h1>
      <div className="container mt-9 grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {festivals.map((festival, idx) => (
          <motion.div
            key={festival}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemVariants}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium"
          >
            {festival}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Festivals;
