import { Wrapper } from '../Styles/Wrapper'
import { Header } from '../components/Header'
import { SearchContainer } from '../components/SearchResults'

export function ArticlesFinder() {
    return (
        <Wrapper>
            <Header />
            <SearchContainer />
        </Wrapper>
    )
}