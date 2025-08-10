"use client";
import Credit from "@/components/icons/home/Credit";
import Image from "next/image";
import React from "react";

const NotificationsHeader = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_#FAF5FF_0%,_#FDF2F8_50%,_#FEFCE8_100%)] pt-10 pb-8">
      <div className="container flex flex-col xl:flex-row flex-wrap xl:justify-between gap-8 xl:gap-0 items-center">
        <div className="w-full xl:w-[50%] flex flex-col items-start">
          <div className="px-3 py-2 w-fit bg-[#F3F4F6] rounded-full mb-2">
            <p className="text-[#4B5563] text-sm font-medium leading-[100%] capitalize">
              Custom Notifications
            </p>
          </div>
          <h1 className="text-[#111827] text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 capitalize leading-[1.1]">
            Build relationships <br /> and grow sales
          </h1>
          <p className="text-[#4B5563] text-base sm:text-lg md:text-xl font-normal leading-[150%] mt-6 capitalize">
            Use customized message alerts to drive your business <br /> forward.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center md:gap-6 gap-2 w-full">
            <div className="flex items-center gap-2 mb-2 sm:mb-0">
              <Image
                src="/images/testimonials/rate.png"
                alt="stars"
                width={90}
                height={24}
                className="object-contain"
              />
              <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
                4.7/5 on G2
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Credit />
              <p className="text-[#4B5563] text-sm font-normal leading-[200%]">
                No credit card required
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg xl:max-w-[588px] h-auto flex-shrink-0 mb-8 xl:mb-0">
          <Image
            src="/images/features/customNotificationHeader.png"
            alt="hero"
            width={588}
            height={392}
            className="z-10 w-full h-auto object-contain rounded-xl"
          />
          <div
            className="w-8 h-8 sm:w-12 sm:h-12 bg-[#F9A8D4] rounded-full absolute bottom-4 sm:bottom-12 -left-2 sm:-left-4 opacity-60 animate-float-scale animate-pulse-custom"
            style={
              {
                "--float-delay": "0.3s",
                "--float-duration": "3.2s",
                "--pulse-delay": "0.7s",
                "--pulse-duration": "2.7s",
              } as React.CSSProperties
            }
          ></div>
          <div
            className="w-10 h-10 sm:w-16 sm:h-16 bg-[#FDE047] rounded-full absolute top-0 right-0 opacity-60 animate-rotate-scale animate-pulse-custom"
            style={
              {
                "--rotate-delay": "0.9s",
                "--rotate-duration": "7.5s",
                "--pulse-delay": "0.2s",
                "--pulse-duration": "2.3s",
              } as React.CSSProperties
            }
          ></div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 bg-[#D8B4FE] rounded-full absolute top-[90px] sm:top-[170px] -right-2 sm:-right-4 opacity-60 animate-float-scale animate-pulse-custom"
            style={
              {
                "--float-delay": "1.2s",
                "--float-duration": "2.8s",
                "--pulse-delay": "1.1s",
                "--pulse-duration": "2.9s",
              } as React.CSSProperties
            }
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsHeader;
