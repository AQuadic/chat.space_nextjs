"use client";
import React from "react";
import { motion, easeInOut } from "framer-motion";
import organizedTeams from "../../../../public/images/features/organizeTeams.png";
import manageContacts from "../../../../public/images/features/manageContacts.png";
import engage from "../../../../public/images/features/engage.png";
import Image from "next/image";
const SharedTeamManagement = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.7,
        ease: easeInOut,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <motion.section
      className="container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-[#111827] md:text-4xl text-2xl font-semibold text-center capitalize leading-[1.2] font-[Poppins]"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        Effortless management of customer and <br />
        prospect communication
      </motion.h2>
      <motion.div
        className="flex flex-col gap-5"
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex md:flex-row flex-col items-center justify-between mt-6 sm:mt-[58px]"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-[#111827] max-sm:text-center md:text-4xl text-2xl font-semibold leading-[1.2] capitalize">
              Organize users and teams
            </h3>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
              Assign chats by user, team, or shift (day/night) for <br />{" "}
              optimal workflow management.
            </p>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize">
              Enable team collaboration for complete transparency across <br />{" "}
              all customer interactions.
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={organizedTeams} alt="teams" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex max-sm:flex-col-reverse items-center justify-between"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={manageContacts} alt="teams" />
          </motion.div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-[#111827] max-sm:text-center md:text-4xl text-2xl font-semibold leading-[1.2] capitalize">
              Manage Contacts
            </h3>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
              Scalable contact management with support for import/ <br /> export
              via CSV files.
            </p>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize">
              Tag contacts into categories like &quot;VIP&quot; for personalized
              service.
            </p>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize">
              Better insights via comprehensive analytics and <br /> detailed
              reporting.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex md:flex-row flex-col items-center justify-between mt-[58px]"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-[#111827] max-sm:text-center md:text-4xl text-2xl font-semibold leading-[1.2] capitalize">
              Engage, Sell and Support
            </h3>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize">
              See complete messages and conversation threads in <br /> one
              unified view.
            </p>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize">
              Personalize user interactions for enhanced customer <br />{" "}
              experience.
            </p>
            <p className="text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-4 capitalize">
              Support and update customers through <br /> seamless
              conversations.
            </p>
          </motion.div>
          <motion.div
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image src={engage} alt="teams" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SharedTeamManagement;
