import React from "react";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "../general/Testimonials";
import TrustedBrands from "./TrustedBrands";
import HomeImpact from "./HomeImpact";
import HomeFeatures from "./HomeFeatures";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <TrustedBrands />
      <HomeImpact />
      <HomeFeatures />
      <Testimonials />
    </div>
  );
};

export default MainHome;
