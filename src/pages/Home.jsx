import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { SectionFast } from "../components/SectionFast";
import { News } from "../components/SectionNews";
import { auth } from "../firebaseconfig";
import { Wrapper } from "../Styles/Wrapper";

export function Home() {

  return (
    <Wrapper>
      <Header />
      <Carousel />
      <News />
    </Wrapper>
  )
}