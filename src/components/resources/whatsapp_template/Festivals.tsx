"use client";
import React, { useState } from "react";

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
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Gandhi Jayanti
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Navaratri & Dussehra
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Sales
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Cyber Monday
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Thanksgiving
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Black Friday
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Diwali
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Dhanteras
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Republic Day
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Makar Sankranti
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Holi
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Easter
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Women&apos;s Day
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Ramadan
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Eid al-Adha
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Independence Day
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Raksha Bandhan
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Janmashtami
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Ganesh Chaturthi
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Brazil Independence
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Ecommerce
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Education
        </div>
        <div className="lg:w-[192px] h-14 bg-[#FFFFFF] rounded-[12px] flex items-center justify-center font-medium">
          Healthcare
        </div>
      </div>
    </section>
  );
};

export default Festivals;
