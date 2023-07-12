import { Header } from "../components/Header/index"
import { SectionMain } from "../components/SectionMain/index"
import bgvideo from '../assets/videos/background.mp4'
import { Background } from '../Styles/Background'
import { Wrapper } from "../Styles/Wrapper";

export function Introduction() {
    return (
      <>
        <Background src={bgvideo} autoPlay loop muted/>
        <Wrapper>
          <Header/>
          <SectionMain/>
        </Wrapper>
      </>
    )
}