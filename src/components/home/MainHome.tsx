import React from "react";
import HomeHero from "@/components/home/HomeHero";
import Testimonials from "../general/Testimonials";
import TrustedBrands from "./TrustedBrands";

const MainHome = () => {
  return (
    <div>
      <HomeHero />
      <TrustedBrands />
      <Testimonials />
    </div>
  );
};

export default MainHome;
