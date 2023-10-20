import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { SectionFast } from "../components/SectionFast";
import { News } from "../components/ArticleFeed";
import { auth } from "../services/firebaseconfig";
import { Wrapper } from "../Styles/Wrapper";
import { AsideHome } from "../components/AsidePanel";
import { SectionGrid } from "../containers/SectionGrid/style";

export function Home() {
  return (
    <Wrapper>
      <Header />
      <Carousel />
      <SectionGrid oneGrid="1fr" twoGrid="20rem">
        <News />
        <AsideHome />
      </SectionGrid>
    </Wrapper>
  );
}
