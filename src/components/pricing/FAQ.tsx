import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="container py-8 sm:py-12">
      <h4 className="text-2xl sm:text-[36px] font-semibold text-center font-[Inter]">
        Frequently Asked Questions
      </h4>
      <p className="text-lg sm:text-xl text-center mt-2 text-[#4B5563]">
        Get answers to common questions about our pricing and services.
      </p>
      <Accordion
        className="max-w-[768px] mx-auto mt-5 sm:mt-9"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I Change My Plan At Any Time?</AccordionTrigger>
          <AccordionContent>
            Yes, You Can Upgrade Or Downgrade Your Plan At Any Time. Changes
            Take Effect Immediately, And Billing Is Prorated Accordingly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What Payment Methods Do You Accept?
          </AccordionTrigger>
          <AccordionContent>
            {/* Add your answer here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is There A Free Trial Available?</AccordionTrigger>
          <AccordionContent>
            {/* Add your answer here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What Happens If I Exceed My Plan Limits?
          </AccordionTrigger>
          <AccordionContent>
            {/* Add your answer here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do You Offer Discounts For Annual Billing?
          </AccordionTrigger>
          <AccordionContent>
            {/* Add your answer here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can I Cancel My Subscription Anytime?
          </AccordionTrigger>
          <AccordionContent>
            {/* Add your answer here if available */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
