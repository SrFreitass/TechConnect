import { News } from "../components/ArticleFeed";
import { AsideHome } from "../components/AsidePanel";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { GridSection } from "../containers/GridSection/style";
import { Wrapper } from "../Styles/Wrapper";

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
