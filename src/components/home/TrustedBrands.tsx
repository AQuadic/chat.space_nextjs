"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

interface TrustedBrandsProps {
  title: string;
  description: string;
}

const TrustedBrands: React.FC<TrustedBrandsProps> = ({ title, description }) => {
  return (
    <section className="container flex flex-col items-center py-12">
      <h2 className="text-[#000000] text-2xl sm:text-4xl text-center font-semibold leading-[120%] font-Poppins capitalize">
        {title}
      </h2>
        <p className="text-[#5A5A5A] text-lg sm:text-xl font-normal leading-[150%] mt-2.5 text-center">
          {description.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

      <div className="w-full mt-16 overflow-hidden">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <Image
            src="/images/home/Visa.svg"
            width={120}
            height={120}
            alt="Visa"
            className="mx-5 sm:mx-10 max-sm:w-[60px]"
          />
          <Image
            src="/images/home/huawei.svg"
            width={112}
            height={103}
            alt="Huawei"
            className="mx-5 sm:mx-10 max-sm:w-[60px]"
          />
          <Image
            src="/images/home/amazon.svg"
            width={173}
            height={53}
            alt="Amazon"
            className="mx-5 sm:mx-10 max-sm:w-[80px]"
          />
          <Image
            src="/images/home/shopify.svg"
            width={213}
            height={91}
            alt="Shopify"
            className="mx-5 sm:mx-10 max-sm:w-[100px]"
          />
          <Image
            src="/images/home/mercedes.svg"
            width={150}
            height={134}
            alt="Mercedes"
            className="mx-5 sm:mx-10 max-sm:w-[90px]"
          />
          <Image
            src="/images/home/bmw.svg"
            width={103}
            height={104}
            alt="BMW"
            className="mx-5 sm:mx-10 max-sm:w-[60px]"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedBrands;
