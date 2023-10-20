import { SectionFast } from "../components/SectionFast";
import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { StyleFastPage } from "./style";

export function FastPage() {
  return (
    <>
      <StyleFastPage>
        <Wrapper>
          <Header />
        </Wrapper>
      </StyleFastPage>
      <SectionFast />
    </>
  );
}
