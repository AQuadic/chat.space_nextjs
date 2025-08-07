"use client";
import React from "react";
import { motion } from "framer-motion";
import recentblog1 from "../../../../public/images/resources/recentblogs1.png";
import recentblog2 from "../../../../public/images/resources/recentblogs2.png";
import recentblog3 from "../../../../public/images/resources/recentblogs3.png";
import Image from "next/image";
import Link from "next/link";
const RecentBlogs = () => {
  return (
    <section className="container pb-3 overflow-x-hidden">
      <h2 className="text-[#111827] text-[30px] font-bold font-[Inter] leading-9">
        Recent Blogs
      </h2>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center mx-auto">
        {[
          {
            img: recentblog1,
            title: "WhatsApp API Integration Best Practices",
            desc: "Master the art of integrating WhatsApp API with your existing business tools for seamless communication.",
          },
          {
            img: recentblog2,
            title: "Improving Customer Support with WhatsApp",
            desc: "Transform your customer service experience with WhatsApp's powerful messaging capabilities.",
          },
          {
            img: recentblog3,
            title: "Creating Effective WhatsApp Campaigns",
            desc: "Learn how to design and execute WhatsApp marketing campaigns that drive real results.",
          },
        ].map((blog, idx) => (
          <motion.div
            key={idx}
            className="lg:w-[389px] w-[389px] h-[400px] bg-[#FFFFFF] rounded-[12px] p-6 flex flex-col"
            style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 4px 24px 0px #16A34A22",
            }}
          >
            <Image src={blog.img} alt="blog" />
            <h2 className="tex-[#111827] text-xl font-semibold mt-4">
              {blog.title}
            </h2>
            <p className="text-[#4B5563] text-base font-normal leading-[150%] mt-2 capitalize">
              {blog.desc}
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
    </section>
  );
};

export default RecentBlogs;
