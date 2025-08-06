import React from "react";
import PricingCards from "@/components/pricing/PricingCards";
import PayPerConversation from "@/components/pricing/PayPerConversation";
import WhatsIncluded from "@/components/pricing/WhatsIncluded";

const MainPricing = () => {
  return (
    <div>
      <PricingCards />
      <PayPerConversation />
      <WhatsIncluded />
    </div>
  );
};

export default MainPricing;
