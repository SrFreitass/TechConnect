import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { SectionNews } from "../components/SectionNews";
import { Wrapper } from "../Styles/Wrapper";

export function Home() {
    return (
      <Wrapper>
        <Header/>
        <Carousel/>
        <SectionNews/>
      </Wrapper>
    )
}