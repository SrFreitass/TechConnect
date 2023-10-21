import { Header } from "../components/Header";
import { AboutSection } from "../components/AboutSection";
import { IntroSection } from "../components/IntroSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { Wrapper } from "../Styles/Wrapper";
import { useEffect, useState } from "react";
import bg from "../assets/images/background.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionGoHome } from "../components/GetStartedSection";
import { Footer } from "../components/Footer";

export function Overview() {
  useEffect(() => {
    document.title =
      "TechConnect | Explora as últimas tendências do mundo tech";
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Wrapper>
        <Header isIntroductionPage={true} />
      </Wrapper>
      <IntroSection />
      <AboutSection />
      <WhyChooseSection />
      <SectionGoHome />
      <Footer />
    </>
  );
}
