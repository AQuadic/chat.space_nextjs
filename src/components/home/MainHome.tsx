import React from "react";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "../general/Testimonials";
import TrustedBrands from "./TrustedBrands";
import HomeImpact from "./HomeImpact";
import HomeFeatures from "./HomeFeatures";
import WhyChatiSpace from "./WhyChatiSpace";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <TrustedBrands />
      <HomeImpact />
      <HomeFeatures />
      <WhyChatiSpace />
      <Testimonials />
    </div>
  );
};

export default MainHome;
