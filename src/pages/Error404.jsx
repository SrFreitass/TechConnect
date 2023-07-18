import { Header } from "../components/Header";
import { SectionNotFound } from "../components/SectionNotFound";
import { Wrapper } from "../Styles/Wrapper";
import { Footer } from "../components/Footer";

export function Error404() {
    return (
      <Wrapper>
        <Header/>
        <SectionNotFound/>
        <Footer/>
      </Wrapper>
    )
}

