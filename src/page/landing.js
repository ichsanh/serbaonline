// LandingPage.jsx
import React from "react";
import HeroBanner from "../component/Landing-Component/hero";
import SubHeroBanner from "../component/Landing-Component/subhero";
import SectionPage from "../component/Landing-Component/section";
import PricingSection from "../component/Landing-Component/Section-Component/pricing";
import SectionPage2 from "../component/Landing-Component/section2";

const LandingPage1 = () => {
  return (
    <div>
      <HeroBanner />
      <SubHeroBanner />
      <SectionPage />
      <PricingSection />
      <SectionPage2 />
    </div>
  );
};

export default LandingPage1;