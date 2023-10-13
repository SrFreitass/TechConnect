import { BodyNews } from "../components/ArticleBody";
import { Header } from "../components/Header";
import { Recomend } from "../components/Recomend";

import { SectionGrid } from "../containers/SectionGrid/style";
import { Wrapper } from "../Styles/Wrapper";
import { useEffect } from 'react'

export function NewsPage() {
  
  return (
    <Wrapper>
      <Header />
      <SectionGrid oneGrid='1fr' twoGrid='.5fr' >
        <BodyNews />
      </SectionGrid>
    </Wrapper >
  )
}