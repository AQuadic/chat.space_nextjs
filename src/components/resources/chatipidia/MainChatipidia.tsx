import { Input } from "@/components/ui/input";
import React from "react";

const MainChatipidia = () => {
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
      />
    </div>
  );
};

export default MainChatipidia;
