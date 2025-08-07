"use client";
import { TrendingBlogsData } from "@/constants/TrendingBlogsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, easeInOut } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const TrendingBlogs = () => {
  return (
    <motion.section
      className="container py-[50px]"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.h1
        className="text-[#111827] text-2xl sm:text-[30px] font-bold leading-9 font-[Inter]"
        variants={cardVariants}
      >
        Trending Blogs
      </motion.h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
        {TrendingBlogsData.map((item, index) => (
          <motion.div
            key={index}
            className="lg:w-[389px] h-[444px] bg-[#FFFFFF] rounded-[12px] p-6"
            style={{ boxShadow: "0px 6px 18px 0px #0000000D" }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className={`w-fit px-3 h-7 rounded-full flex items-center justify-center`}
              style={{
                backgroundColor: item.categoryBgColor,
                color: item.categoryTextColor,
              }}
            >
              <p className="text-sm font-medium">{item.category}</p>
            </div>
            <Image src={item.image} alt="blog image" className="mt-4" />
            <h1 className="text-[#111827] text-xl font-semibold mt-4">
              {item.title}
            </h1>
            <p className="text-[#4B5563] text-base font-normal mt-2">
              {item.description}
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="text-[#16A34A] text-base font-medium leading-7"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TrendingBlogs;
