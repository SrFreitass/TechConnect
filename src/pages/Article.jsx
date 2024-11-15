import { ArticleBody } from "../components/ArticleBody";
import { Header } from "../components/Header";
import { GridSection } from "../containers/GridSection/style";
import { Wrapper } from "../Styles/Wrapper";

export function ArticlePage() {
  return (
    <Wrapper>
      <Header />
      <GridSection gap={true} oneGrid="1fr" twoGrid=".5fr">
        <ArticleBody />
      </GridSection>
    </Wrapper>
  );
}
