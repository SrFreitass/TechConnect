import { useParams } from "react-router-dom";
import { ArticleBody } from "../components/ArticleBody";
import { Header } from "../components/Header";
import { GridSection } from "../containers/GridSection/style";
import { Wrapper } from "../Styles/Wrapper";
import { useEffect, useState } from "react";

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
