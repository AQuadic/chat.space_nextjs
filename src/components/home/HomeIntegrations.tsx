"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import homeIntegration from "../../../public/images/home/homeIntegration.svg";
import zapier from "../../../public/images/home/zapier.svg";
import googleSheet from "../../../public/images/home/GoogleSheets.svg";
import intuit from "../../../public/images/home/intuit.svg";
import pngwing from "../../../public/images/home/pngwing.svg";
import hubspot from "../../../public/images/home/hubspot.svg";

const HomeIntegrations = () => {
  return (
    <section className="container flex flex-col items-center justify-center pt-[80px] pb-[30px] sm:pt-[127px] sm:pb-[57px]">
      <div className="flex items-center gap-2">
        <Image src={homeIntegration} alt="icon" />
        <h1 className="text-[#111827] text-2xl sm:text-4xl font-bold">
          Integrations
        </h1>
      </div>
      <p className="text-[#4B5563] text-lg sm:text-[22px] font-normal leading-7 mt-4 text-center">
        Connect your favorite tools directly with our platform.
      </p>

      <div className="w-full mt-[60px] overflow-hidden">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <Image
            src={zapier}
            alt="zapier"
            className="mx-6 sm:mx-[48px]  max-sm:w-20 "
          />
          <Image
            src={googleSheet}
            alt="googleSheet"
            className="mx-6 sm:mx-[48px]  max-sm:w-8 "
          />
          <Image
            src={intuit}
            alt="intuit"
            className="mx-6 sm:mx-[48px]  max-sm:w-20 "
          />
          <Image
            src={pngwing}
            alt="pngwing"
            className="mx-6 sm:mx-[48px]  max-sm:w-20 "
          />
          <Image
            src={hubspot}
            alt="hubspot"
            className="mx-6 sm:mx-[48px]  max-sm:w-20 "
          />
        </Marquee>
      </div>
    </section>
  );
};

export default HomeIntegrations;
