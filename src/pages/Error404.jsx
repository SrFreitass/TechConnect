import { Header } from "../components/Header";
import { SectionNotFound } from "../components/SectionNotFound";
import { Wrapper } from "../Styles/Wrapper";

export function Error404() {
    return (
      <Wrapper>
        <Header/>
        <SectionNotFound/>
      </Wrapper>
    )
}

