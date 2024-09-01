import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { SectionGoHome } from "../components/GetStartedSection";
import { Header } from "../components/Header";
import { IntroSection } from "../components/IntroSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { Wrapper } from "../Styles/Wrapper";
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
