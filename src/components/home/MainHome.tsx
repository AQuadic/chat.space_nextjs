import React from "react";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "../general/Testimonials";
import TrustedBrands from "./TrustedBrands";
import HomeImpact from "./HomeImpact";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <TrustedBrands />
      <HomeImpact />
      <Testimonials />
    </div>
  );
};

export default MainHome;
