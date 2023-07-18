import { BodyNews } from "../components/BodyNews";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Wrapper } from "../Styles/Wrapper";

export function NewsPage() {
    return (
      <Wrapper>
        <Header/>
        <BodyNews/>
        <Footer/>
      </Wrapper>
    )
}