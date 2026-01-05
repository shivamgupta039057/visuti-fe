import React from "react";
import AboutHero from "./AboutHero";
import AboutGrowth from "./AboutGrowth";
import AboutFounder from "./AboutFounder";
import AboutStory from "./AboutStory";
import AboutCertifications from "./AboutCertifications";
import AboutWhy from "./AboutWhy";
import CtaSection from "../Home/CtaSection/CtaSection";
import FAQSection from "../neetPredictor/FAQSection";
import Services from "../Home/Services";
import MobileSection from "../Home/mobileSection/MobileSection";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutGrowth />
      <AboutFounder />
      <AboutStory />
      <CtaSection/>
      <AboutCertifications />
      <AboutWhy />
      <FAQSection/>
      <Services/>
      <MobileSection/>

    </>
  );
};

export default AboutPage;
