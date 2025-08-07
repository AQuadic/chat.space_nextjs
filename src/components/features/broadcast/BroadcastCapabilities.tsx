"use client";
import { BroadcastCapabilitiesData } from "@/constants/BroadcastCapabilitiesData";
import React, { useEffect, useState } from "react";

const ANIMATION_DELAY = 250; // ms per item

const BroadcastCapabilities = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < BroadcastCapabilitiesData.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, ANIMATION_DELAY);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <section className="container mb-[70px] sm:b-[134px] mt-10">
      <div className="w-full border-2 border-[#BFDBFE] rounded-[16px] grid lg:grid-cols-3 gap-4 p-[34px]">
        {BroadcastCapabilitiesData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-500 ease-out ${
              index < visibleCount
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <item.icon />
            <h2 className="text-[#111827] text-xl font-semibold mt-2.5">
              {item.title}
            </h2>
            <p className="text-[#4B5563] text-base font-normal leading-[150%] text-center md:w-[320px] mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BroadcastCapabilities;
