import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { FormCreate } from "../components/FormCreate";

export function CreateArticle() {
    return (
      <Wrapper>
        <Header/>
        <FormCreate/>
      </Wrapper>
    )
}