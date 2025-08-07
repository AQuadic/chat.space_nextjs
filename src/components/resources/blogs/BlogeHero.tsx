"use client";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import blogHero from "../../../../public/images/resources/blogHero.png";
import Image from "next/image";
import Link from "next/link";
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

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
};

const BlogeHero = () => {
  return (
    <motion.section
      className="container py-[28px] sm:py-[54px] pb-3"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div
        className="w-full h-full rounded-[16px] py-6 px-8 flex lg:flex-row flex-col justify-between gap-4"
        style={{ boxShadow: "0px 4px 6px 0px #0000001A" }}
        variants={childVariants}
      >
        <motion.div variants={childVariants}>
          <Image src={blogHero} alt="blog hero" />
        </motion.div>
        <motion.div variants={childVariants}>
          <motion.div
            className="w-[172px] h-7 bg-[#DCFCE7] rounded-full flex items-center justify-center"
            variants={childVariants}
          >
            <p className="text-[#166534] text-sm font-medium">
              Introducing Coexistence
            </p>
          </motion.div>
          <motion.h2
            className="text-[#111827] md:text-[30px] text-xl font-bold mt-3"
            variants={childVariants}
          >
            Scale on WhatsApp Without <br /> Missing a Beat
          </motion.h2>
          <motion.p
            className="text-[#4B5563] md:text-base text-sm font-normal leading-[150%] mt-5"
            variants={childVariants}
          >
            Discover how our latest coexistence feature allows you to seamlessly{" "}
            <br /> manage multiple WhatsApp accounts while maintaining optimal{" "}
            <br /> performance and customer satisfaction.
          </motion.p>
          <motion.div
            className="flex items-center justify-between mt-4 sm:mt-7"
            variants={childVariants}
          >
            <div className="flex items-center gap-2 text-[#6B7280] text-sm font-normal">
              <span>Ashwin</span>
              <div className="w-1 h-1 rounded-full bg-[#6B7280]"></div>
              <span>03/07/25</span>
            </div>
            <Link
              href="/"
              className="text-[#16A34A] text-base font-medium leading-7"
            >
              Read more →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BlogeHero;
