import React from "react";
import BusinessProcessSection from "./Section-Component/prosesbisnis";
import BusinessSection from "./Section-Component/bisnis-section1";
import SectionAutomation from "./Section-Component/bisnis-section2";
import SectionThree from "./Section-Component/bisnis-section3";
import PaymentShippingSection from "./Section-Component/section-mp";
import SectionSmartLogistic from "./Section-Component/bisnis-section4";
import PaymentMethodSection from "./Section-Component/bisnis-section5";
import TestimonialCarousel from "./Section-Component/testimony";

const SectionPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 my-10 space-y-16">
      <BusinessProcessSection />
      <BusinessSection />
      <SectionAutomation />
      <SectionThree />
      <PaymentShippingSection />
      <SectionSmartLogistic />
      <PaymentMethodSection />
      <TestimonialCarousel />
    </div>
  );
};

export default SectionPage;