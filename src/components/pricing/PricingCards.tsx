"use client";
// Pricing data extracted for maintainability
const pricingData = [
  {
    title: "Chati Space Growth",
    price: "$119",
    oldPrice: "$130",
    priceNote: "Billed Annually",
    subNote: "Max Users: 3",
    features: [
      { text: "Official WhatsApp API" },
      { text: "Message Broadcasts & Scheduling" },
      { text: "Team Inbox" },
      { text: "Broadcast Limit: 15,000 Per Month" },
      { text: "Manual Message Routing" },
      { text: "1,000 Free Automation Triggers/Month" },
      { text: "Basic Chatbots" },
      { text: "Keywords Actions" },
      { text: "WhatsApp Catalog" },
      { text: "Instagram DM Integration", new: true },
      { text: "FB Messenger Integration", new: true },
    ],
    buttonText: "Book A Demo",
    bg: "bg-[var(--color-bg-main-pink)]",
    buttonBg: "bg-[var(--color-primary-pink)]",
  },
  {
    title: "Chati Space Pro",
    price: "$179",
    oldPrice: "$215",
    priceNote: "Billed Annually",
    subNote: "5 Users Included",
    extraNote: "Additional Users: $49/User/Month",
    highlight: "Everything in Growth +",
    features: [
      { text: "Advanced & Interconnected Chatbots" },
      { text: "Smart Broadcast Retarget + Carousel Templates" },
      { text: "Granular User Roles" },
      { text: "Sequences (WhatsApp Drip Campaigns)" },
      { text: "2,000 Free Automation Triggers/Month" },
      { text: "5 Select Integrations (E.G., HubSpot)" },
      { text: "AI KnowBot With 250 Free Responses/Month" },
      { text: "Instagram DM Automations", new: true },
      { text: "FB Messenger Automations", new: true },
      { text: "PayTabs Integration", new: true },
    ],
    buttonText: "Book A Demo",
    bg: "bg-[var(--color-bg-main-green)]",
    buttonBg: "bg-[var(--color-primary-green)]",
    mostPopular: true,
    minHeight: 650,
  },
  {
    title: "Chati Space Custom",
    price: "Custom",
    priceNote: "For Large Teams And High Scale",
    highlight: "Everything In Pro +",
    features: [
      { text: "24/7 Support and Success Manager" },
      { text: "White Glove Support & Onboarding" },
      { text: "Automatic Chat Assignment (Round-Robin)" },
      { text: "CTWA Retargeting & Conversion Funnel" },
      { text: "Auto Deletion of Chats" },
      { text: "Phone Number Masking for Privacy" },
      { text: "Free Custom Domain" },
      { text: "IP Whitelisting" },
      { text: "Salesforce Integration" },
      { text: "Instagram DM / FB Messenger Automations", new: true },
      { text: "PayTabs Integration", new: true },
    ],
    buttonText: "Contact Us",
    bg: "bg-[var(--color-bg-main-blue)]",
    buttonBg: "bg-[var(--color-primary-blue)]",
  },
];

import React from "react";
import { motion } from "framer-motion";
import Check from "@/components/icons/pricing/Check";
import Link from "next/link";
import CheckWithCircle from "../icons/pricing/CheckWithCircle";

const PricingCards = () => {
  return (
    <section className="bg-[#F9FAFB] ">
      <div className="container">
        <h1 className="text-2xl sm:text-[48px] font-semibold text-center max-w-[740px] mx-auto pt-8 sm:pt-16 mb-6">
          Choose Your Perfect Plan Simple, Transparent Pricing
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p className="text-[#171717] font-medium">14-day free trial</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p className="text-[#171717] font-medium">No setup fees</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckWithCircle />
            <p className="text-[#171717] font-medium">Cancel anytime</p>
          </div>
        </div>
        {/* pricing cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {pricingData.map((plan, idx) => (
            <motion.div
              key={plan.title}
              className={`flex flex-col ${plan.bg} shadow-lg rounded-2xl p-8 w-[390px] h-[703px] relative`}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 60,
              }}
            >
              {plan.mostPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-green text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-[#1F2937] whitespace-nowrap">
                {plan.title}
              </h2>
              {plan.price && (
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#171717]">
                    {plan.price}
                  </span>
                  {plan.oldPrice && (
                    <span className="line-through text-[#6B7280] text-2xl font-medium ml-4">
                      {plan.oldPrice}
                    </span>
                  )}
                </div>
              )}
              {plan.priceNote && (
                <div className="text-sm text-gray-500  whitespace-nowrap mt-4">
                  {plan.priceNote}
                </div>
              )}
              {plan.subNote && (
                <div className="text-sm text-gray-500  whitespace-nowrap">
                  {plan.subNote}
                </div>
              )}
              {plan.extraNote && (
                <div className="text-xs text-gray-400  whitespace-nowrap ">
                  {plan.extraNote}
                </div>
              )}
              {plan.highlight && (
                <div className="text-sm font-medium mt-4 text-[#374151] whitespace-nowrap">
                  {plan.highlight}
                </div>
              )}
              <ul className="flex-1 flex flex-col gap-2 mt-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[#171717] max-w-[320px]"
                  >
                    <Check />
                    <span className="max-w-[320px]">
                      {feature.text}
                      {feature.new && (
                        <span className="ml-1 text-xs bg-green-100 text-green-600 rounded px-2 py-0.5">
                          New
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`mt-auto w-full text-center ${plan.buttonBg} text-white font-semibold py-3 rounded-lg transition hover:brightness-110 whitespace-nowrap`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
