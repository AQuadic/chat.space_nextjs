import React from "react";
import { PricingWhatsIncluded } from "@/constants/PricingWhatsIncluded";

const WhatsIncluded = () => {
  return (
    <section className="py-6 sm:py-10 bg-[#F8FFFACC]">
      <div className="container">
        <h3 className="text-3xl font-bold text-center">
          What&apos;s Included in All Plans
        </h3>
        <p className="font-medium text-center mt-3">
          All plans include our core features designed to help your business
          grow and scale efficiently.
        </p>
        <div className="w-full mt-10 flex flex-wrap justify-center sm:justify-between gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          {PricingWhatsIncluded.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center max-sm:w-32 text-center"
            >
              <div className="mb-2 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
                {item.icon}
              </div>
              <span className="font-medium text-sm sm:text-base leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
