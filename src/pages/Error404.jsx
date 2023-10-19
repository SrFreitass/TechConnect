import { Header } from "../components/Header";
import { NotFound } from "../components/NotFound";
import { Wrapper } from "../Styles/Wrapper";

export function Error404() {
  return (
    <Wrapper>
      <Header />
      <NotFound />
    </Wrapper>
  );
}
