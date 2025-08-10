"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { AccordionSection } from "@/constants/ChatipidiaAccordionData";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface ChatipidiaAccordionProps {
  data: AccordionSection[];
}

const ChatipidiaAccordion: React.FC<ChatipidiaAccordionProps> = ({ data }) => {
  return (
    <div className="mt-8 sm:mt-12 mb-8">
      {data.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ delay: sectionIndex * 0.15 }}
        >
          {/* Section Header */}
          <div className="bg-[#A7F3D0] rounded-t-lg p-4 ">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <span className="w-8 h-8 flex items-center justify-center text-gray-800 font-bold">
                {section.sectionLetter}
              </span>
            </h2>
          </div>

          <div className="bg-white border border-t-0 border-[#E5E7EB] rounded-b-lg shadow-sm">
            <Accordion type="multiple" className="w-full">
              {section.items.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  value={`section-${sectionIndex}-item-${itemIndex}`}
                  showBorder={false}
                  className=""
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                    <span className="text-base font-medium text-gray-900">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ChatipidiaAccordion;
