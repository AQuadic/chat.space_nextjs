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
      <TrustedBrands />
      <HomeImpact />
      <HomeFeatures />
      <WhyChatiSpace />
      <HomeIntegrations />
      <Testimonials />
    </div>
  );
};

export default MainHome;
