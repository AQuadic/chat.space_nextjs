import React from "react";
import PricingCards from "@/components/pricing/PricingCards";
import PayPerConversation from "@/components/pricing/PayPerConversation";
import WhatsIncluded from "@/components/pricing/WhatsIncluded";
import OptionalAddons from "@/components/pricing/OptionalAddons";

const MainPricing = () => {
  return (
    <div>
      <PricingCards />
      <PayPerConversation />
      <WhatsIncluded />
      <OptionalAddons />
    </div>
  );
};

export default MainPricing;
