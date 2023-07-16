import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { FormCreate } from "../components/FormCreate/index";

export function CreateArticle() {
    return (
      <Wrapper>
        <Header/>
        <FormCreate/>
      </Wrapper>
    )
}