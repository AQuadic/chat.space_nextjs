import React from "react";
import PricingCards from "@/components/pricing/PricingCards";
import PayPerConversation from "@/components/pricing/PayPerConversation";
import WhatsIncluded from "@/components/pricing/WhatsIncluded";
import OptionalAddons from "@/components/pricing/OptionalAddons";
import AdditionalSessions from "./AdditionalSessions";
import Faq from "@/components/pricing/FAQ";

const MainPricing = () => {
  return (
    <div>
      <PricingCards />
      <PayPerConversation />
      <WhatsIncluded />
      <OptionalAddons />
      <AdditionalSessions />
      <Faq />
    </div>
  );
};

export default MainPricing;
