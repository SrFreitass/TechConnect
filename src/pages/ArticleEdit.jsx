import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { EditArticles } from '../components/EditArticles'

export function ArticleEdit() {
    return (
        <Wrapper>
            <Header/>
            <EditArticles/>
        </Wrapper>
    )
}