import { BodyNews } from "../components/BodyNews";
import { Header } from "../components/Header";
import { Wrapper } from "../Styles/Wrapper";

export function NewsPage() {
    return (
      <Wrapper>
        <Header/>
        <BodyNews/>
      </Wrapper>
    )
}