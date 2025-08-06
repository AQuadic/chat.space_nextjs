"use client";
import React from "react";
import { motion } from "framer-motion";
import Conversation from "@/components/icons/pricing/Conversation";
import Initiated from "@/components/icons/pricing/Initiated";
import Link from "next/link";

const PayPerConversation = () => {
  return (
    <section className="container pt-10 pb-5">
      <h2 className="font-semibold text-[28px] sm:text-[36px] text-center">
        Pay Per Conversation, Not Per Message
      </h2>
      <p className="text-lg sm:text-xl text-[#4B5563] text-center mt-3">
        Each conversation is a 24-hour window where you can send unlimited
        messages.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8">
        <motion.div
          className="flex flex-col gap-5 p-4 sm:p-8 rounded-2xl bg-white"
          style={{
            boxShadow: "0px 6px 11px 0px #0000001A, 0px 2px 2px 0px #0000001A",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          whileHover={{
            scale: 1.04,
            boxShadow:
              "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
          }}
        >
          <div className="flex items-center gap-4 ">
            <Conversation />
            <h3 className="text-2xl font-medium">Service Conversation</h3>
          </div>
          <p className="max-w-[363px] text-[#4B5563]">
            If a user sends a message and the business replies to it, the
            conversation session is initiated and valid for 24 hours.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 p-4 sm:p-8 rounded-2xl  bg-white"
          style={{
            boxShadow: "0px 6px 11px 0px #0000001A, 0px 2px 2px 0px #0000001A",
          }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          whileHover={{
            scale: 1.04,
            boxShadow:
              "0px 16px 32px 0px #00000033, 0px 8px 16px 0px #0000001A",
          }}
        >
          <div className="flex items-center gap-4 ">
            <Initiated />
            <h3 className="text-2xl font-medium text-nowrap">
              Business-Initiated Conversation
            </h3>
          </div>
          <p className="max-w-[363px] text-[#4B5563]">
            If a business sends the first message, the conversation is initiated
            immediately and valid for 24 hours.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 flex justify-center items-start max-w-fit mx-auto"
        whileHover={{ scale: 1.06, boxShadow: "0px 8px 24px 0px #00C58E33" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link
          href="/"
          className="text-white font-semibold bg-[#00C58E] px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C58E] transition-all duration-200"
        >
          Calculate Pricing by Country
        </Link>
      </motion.div>
    </section>
  );
};

export default PayPerConversation;
