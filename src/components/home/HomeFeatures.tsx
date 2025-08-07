"use client";
import React from "react";
import Broadcast from "../icons/home/Broadcast";
import NavyCheck from "../icons/home/NavyCheck";
import Image from "next/image";
import featuresImage from "../../../public/images/home/homeFeatures.png";
import chatbots from "../../../public/images/home/chatbots.png";
import sharedTeam from "../../../public/images/home/sharedTeam.png";
import { motion } from "framer-motion";
const featureBlockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const HomeFeatures = () => {
  return (
    <motion.section
      className="bg-[linear-gradient(90deg,_#EFF6FF_0%,_#ECFDF5_100%)] pt-8 pb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container flex flex-col items-center">
        <motion.h1
          className="text-[#000000] text-4xl font-semibold !font-Poppins text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Powerful Features for Modern Business
        </motion.h1>
        <motion.p
          className="text-[#5A5A5A] text-xl leading-[150%] mt-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Everything you need to transform customer communication and drive
          business growth
        </motion.p>

        <div className="mt-[42px] flex flex-wrap justify-between gap-12">
          <motion.div
            variants={featureBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Broadcast />
            <h1 className="text-[#000000] text-2xl font-semibold mt-4">
              Broadcast
            </h1>
            <div className="mt-1 flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Push out your campaigns and engage with high response <br />{" "}
                WhatsApp messages.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Tag contacts, categorize and target them in groups using <br />{" "}
                personalized communications.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Build and nurture the relationships that generate future <br />{" "}
                sales by engaging with your audiences
              </p>
            </div>
            <button className="w-[168px] h-[60px] bg-[#00C58E] rounded-[10px] mt-6 text-[#FFFFFF] text-xl font-medium leading-10">
              Learn More
            </button>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={featuresImage}
              alt="features"
              width={590}
              height={466}
            />
          </motion.div>
        </div>

        <div className="mt-[68px] flex flex-wrap justify-between gap-12">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={chatbots} alt="features" width={590} height={466} />
          </motion.div>
          <motion.div
            variants={featureBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Broadcast />
            <h1 className="text-[#000000] text-2xl font-semibold mt-4">
              Chatbots
            </h1>
            <div className="mt-1 flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Create no-code chatbots to provide instant responses to <br />{" "}
                common requests.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Simplify mass communication and personalized responses <br />{" "}
                with automated tools.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Boost sales by directly converting more customer <br />{" "}
                communications on WhatsApp.
              </p>
            </div>
            <button className="w-[168px] h-[60px] bg-[#00C58E] rounded-[10px] mt-6 text-[#FFFFFF] text-xl font-medium leading-10">
              Learn More
            </button>
          </motion.div>
        </div>

        <div className="mt-[68px] flex flex-wrap justify-between gap-12">
          <motion.div
            variants={featureBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Broadcast />
            <h1 className="text-[#000000] text-2xl font-semibold mt-4">
              sharedTeam
            </h1>
            <div className="mt-1 flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Push out your campaigns and engage with high response <br />{" "}
                WhatsApp messages.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Tag contacts, categorize and target them in groups using <br />{" "}
                personalized communications.
              </p>
            </div>
            <div className="mt-[18px] flex items-center gap-[14px]">
              <NavyCheck />
              <p className="text-[#303030] text-xl font-normal leading-[150%]">
                Build and nurture the relationships that generate future <br />{" "}
                sales by engaging with your audiences
              </p>
            </div>
            <button className="w-[168px] h-[60px] bg-[#00C58E] rounded-[10px] mt-6 text-[#FFFFFF] text-xl font-medium leading-10">
              Learn More
            </button>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={sharedTeam} alt="features" width={590} height={466} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeFeatures;
