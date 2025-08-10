"use client";
import { HomeTeams } from "@/constants/HomeTeams";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChatiSpaceCard = ({
  item,
  index,
}: {
  item: (typeof HomeTeams)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col h-full min-h-[390px]"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: isInView ? index * 0.15 : 0,
        ease: "easeOut",
      }}
    >
      <div className="flex items-end max-sm:mx-auto h-[290.81px]">
        <Image src={item.image} alt="team" width={253.5} height={290.81} />
      </div>
      <h2 className="text-[#000000] text-xl sm:text-2xl font-medium mb-4 mt-6">
        {item.title}
      </h2>
      <p className="text-[#000000] text-lg sm:text-xl font-normal leading-[200%] w-[278px] capitalize">
        {item.description}
      </p>
    </motion.div>
  );
};

const WhyChatiSpace = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const subtitleInView = useInView(subtitleRef, { once: true, amount: 0.5 });

  return (
    <section className="container py-5">
      <motion.h1
        ref={titleRef}
        className="text-[#000000] text-2xl sm:text-4xl font-semibold font-Poppins text-center capitalize"
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Why teams choose Chati Space
      </motion.h1>
      <motion.p
        ref={subtitleRef}
        className="text-[#5A5A5A] text-lg sm:text-xl leading-[150%] mt-2 text-center capitalize"
        initial={{ opacity: 0, y: 20 }}
        animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Built for modern teams who demand speed, scale, and simplicity
      </motion.p>
      <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center gap-6 max-sm:text-center">
        {HomeTeams.map((item, index) => (
          <WhyChatiSpaceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};
export default WhyChatiSpace;
