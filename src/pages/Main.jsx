import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { SectionFast } from "../components/SectionFast";
import { News } from "../components/ArticleFeed";
import { auth } from "../services/firebaseconfig";
import { Wrapper } from "../Styles/Wrapper";
import { AsideHome } from "../components/AsidePanel";
import { GridSection } from "../containers/GridSection/style";

export function MainPage() {
  return (
    <Wrapper>
      <Header />
      <Carousel />
      <GridSection oneGrid="1fr" twoGrid="20rem">
        <News />
        <AsideHome />
      </GridSection>
    </Wrapper>
  );
}
