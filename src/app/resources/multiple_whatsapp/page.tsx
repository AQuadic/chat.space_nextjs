import TrustedBrands from "@/components/home/TrustedBrands";
import Features from "@/components/resources/multiple_whatsapp/Features";
import FreeTrial from "@/components/resources/multiple_whatsapp/FreeTrial";
import MultipleWhatsappHero from "@/components/resources/multiple_whatsapp/MultipleWhatsappHero";
import TheProblem from "@/components/resources/multiple_whatsapp/TheProblem";
import React from "react";

const page = () => {
  return (
    <div>
      <MultipleWhatsappHero />
      <TrustedBrands
        title="Trusted by leading brands across the globe"
        description=""
      />
      <TheProblem />
      <Features />
      <FreeTrial />
    </div>
  );
};

export default page;
