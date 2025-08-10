import React from "react";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "../general/Testimonials";
import TrustedBrands from "./TrustedBrands";
import HomeImpact from "./HomeImpact";
import HomeFeatures from "./HomeFeatures";
import WhyChatiSpace from "./WhyChatiSpace";
import HomeIntegrations from "./HomeIntegrations";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <TrustedBrands
        title="Trusted by 10,000+ Businesses Worldwide"
        description={`From startups to Fortune 500 companies, businesses trust Chati Space to power \n their customer communications`}
      />
      <HomeImpact />
      <HomeFeatures />
      <WhyChatiSpace />
      <HomeIntegrations />
      <Testimonials />
    </div>
  );
};

export default MainHome;
