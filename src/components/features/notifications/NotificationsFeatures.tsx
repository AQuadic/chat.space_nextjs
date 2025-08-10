"use client";
import SolutionCheck from "@/components/icons/solution/SolutionCheck";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NotificationsFeatures = () => {
  return (
    <section className="container py-16">
      {/* Card 1 */}
      <motion.div
        className="flex flex-wrap items-center gap-4 justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-[#111827] text-xl sm:text-2xl md:text-[30px] font-semibold font-[Poppins] leading-[100%]">
            Update customers and prospects
          </h1>
          <ul className="mt-9">
            <li className="flex items-center gap-3">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Alert customers when products are in stock
              </p>
            </li>
            <li className="flex items-center gap-3 mt-4">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Cross-sell based on interests
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/features/notificationfeature1.png"
            alt="image"
            width={557}
            height={370}
            className="z-10"
          />
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="flex flex-wrap max-sm:flex-col-reverse items-center gap-4 justify-between mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <Image
            src="/images/features/notificationfeature2.png"
            alt="image"
            width={592}
            height={320}
            className="z-10"
          />
        </div>
        <div>
          <h1 className="text-[#111827] text-xl sm:text-2xl md:text-[30px] font-semibold font-[Poppins] leading-[100%]">
            Offers and promotions
          </h1>
          <ul className="mt-9">
            <li className="flex items-center gap-3">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Notify customers of special offers and discounted prices
              </p>
            </li>
            <li className="flex items-center gap-3 mt-4">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Offer tailored deals to prospects
              </p>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="flex flex-wrap items-center gap-4 justify-between mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-[#111827] text-xl sm:text-2xl md:text-[30px] font-semibold font-[Poppins] leading-[100%]">
            Stronger relationships
          </h1>
          <ul className="mt-9">
            <li className="flex items-center gap-3">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Promote continuity between users and teams
              </p>
            </li>
            <li className="flex items-center gap-3 mt-4">
              <SolutionCheck />
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-normal leading-[150%]">
                Customize alerts to specific teams/messages
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/features/notificationfeature3.png"
            alt="image"
            width={544}
            height={343}
            className="z-10"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default NotificationsFeatures;
