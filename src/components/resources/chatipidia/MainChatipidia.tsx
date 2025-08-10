"use client";
import { Input } from "@/components/ui/input";
import React, { useState, useMemo } from "react";
import ChatipidiaAccordion from "./ChatipidiaAccordion";
import { ChatipidiaAccordionData } from "@/constants/ChatipidiaAccordionData";

const MainChatipidia = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return ChatipidiaAccordionData;
    const lowerSearch = search.toLowerCase();
    return ChatipidiaAccordionData.map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerSearch) ||
          item.description.toLowerCase().includes(lowerSearch)
      ),
    })).filter((section) => section.items.length > 0);
  }, [search]);

  return (
    <div className="container">
      <h1 className="font-[Poppins] text-2xl sm:text-[36px] font-semibold text-center mt-[50px] sm:mt-[116px]">
        Chatipidia
      </h1>
      <p className="text-[#4B5563] text-lg sm:text-xl text-center">
        WhatsApp wisdom at your fingertips
      </p>
      <Input
        className="border-[#D1D5DB] w-full max-w-[602px] mx-auto mt-4 sm:mt-8"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ChatipidiaAccordion data={filteredData} />
    </div>
  );
};

export default MainChatipidia;
