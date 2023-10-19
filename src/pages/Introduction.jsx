import { Header } from "../components/Header";
import { SectionAbout } from "../components/SectionAbout";
import { SectionMain } from "../components/SectionMain";
import { SectionChoice } from "../components/SectionChoice";
import { Background } from "../Styles/Background";
import { Wrapper } from "../Styles/Wrapper";
import { useEffect, useState } from "react";
import bg from "../assets/images/background.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionGoHome } from "../components/SectionGoHome";
import { Footer } from "../components/Footer";

export function Introduction() {
  useEffect(() => {
    document.title =
      "TechConnect | Explora as últimas tendências do mundo tech";
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Background bg={bg} />
      <Wrapper>
        <Header isIntroductionPage={true} />
      </Wrapper>
      <SectionMain />
      <SectionAbout />
      <SectionChoice />
      <SectionGoHome />
      <Footer />
    </>
  );
}
