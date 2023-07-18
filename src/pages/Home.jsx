import { Aside } from "../components/Aside";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { News } from "../components/SectionNews";
import { NewsContainer } from "../components/SectionNews/style";
import { Wrapper } from "../Styles/Wrapper";
import { Footer } from "../components/Footer";

export function Home() {
    return (
      <>
      <Wrapper>
        <Header/>
        <Carousel/>
        <NewsContainer>
          <News/>
          <Aside/>
        </NewsContainer>
      </Wrapper>
      <Footer/>
      </>
    )
}