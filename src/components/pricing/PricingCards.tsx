import React from "react";
import CheckWithCircle from "@/components/icons/pricing/CheckWithCircle";

const PricingCards = () => {
  return (
    <section className="bg-[#F9FAFB] ">
      <div className="container">
        <h1 className="text-2xl sm:text-[48px] font-semibold text-center max-w-[740px] mx-auto pt-8 sm:pt-16 mb-6">
          Choose Your Perfect Plan Simple, Transparent Pricing
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p>14-day free trial</p>
          </div>{" "}
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p>No setup fees</p>
          </div>{" "}
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p>Cancel anytime</p>
          </div>
        </div>
        <div>
          <div className="bg-bg-main-pink"></div>
          <div className="bg-bg-main-green"></div>
          <div className="bg-bg-main-blue"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
