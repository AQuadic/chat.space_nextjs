"use client";
import React from "react";
import { motion } from "framer-motion";
import PlusCircle from "@/components/icons/pricing/PlusCircle";
import OrangeCart from "@/components/icons/pricing/OrangeCart";

const OptionalAddons = () => {
  return (
    <section className="container py-6 sm:py-10">
      <h3 className="font-bold font-[Inter] italic text-3xl text-center">
        Optional Add-Ons
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
        {/* Custom Subdomain Card */}
        <motion.div
          className="flex flex-col gap-4 p-4 sm:p-8 rounded-2xl bg-white sm:min-w-[430px] border"
          style={{
            boxShadow: "0px 6px 11px 0px #0000001A, 0px 2px 2px 0px #0000001A",
            border: "1px solid #FEF9C3",
            transition: "border-color 0.3s",
          }}
          initial={{ opacity: 0, y: 60, borderColor: "#FEF9C3" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          whileHover={{
            scale: 1.04,
            boxShadow:
              "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
            borderColor: "#FDE68A", // more saturated yellow
          }}
        >
          <div className="flex items-center gap-4 mb-2">
            <PlusCircle />
            <span className="font-bold text-xl sm:text-2xl">
              Custom Subdomain
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold font-[Inter]">$100</span>
            <span className="text-base text-[#6B7280] font-medium mt-2">
              One-Time
            </span>
          </div>
          <div className="text-[#4B5563] text-base sm:text-lg">
            Example: Companyname.Chatispace.io
          </div>
        </motion.div>
        {/* Shopify Integration Card */}
        <motion.div
          className="flex flex-col gap-4 p-4 sm:p-8 rounded-2xl bg-white sm:min-w-[430px] border"
          style={{
            boxShadow: "0px 6px 11px 0px #0000001A, 0px 2px 2px 0px #0000001A",
            border: "1px solid #FFEDD5",
            transition: "border-color 0.3s",
          }}
          initial={{ opacity: 0, y: 60, borderColor: "#FFEDD5" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          whileHover={{
            scale: 1.04,
            boxShadow:
              "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
            borderColor: "#FDBA74", // more saturated orange
          }}
        >
          <div className="flex items-center gap-4 mb-2">
            <OrangeCart />
            <span className="font-bold text-xl sm:text-2xl text-nowrap">
              Shopify Integration
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold font-[Inter]">$4.99</span>
            <span className="text-base text-[#6B7280] font-medium mt-2">
              /Month
            </span>
          </div>
          <div className="text-[#4B5563] text-base sm:text-lg ">
            Connect Your Shopify Store Seamlessly
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OptionalAddons;
