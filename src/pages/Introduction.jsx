import { Header } from "../components/Header/index"
import { SectionMain } from "../components/SectionMain/index"
import bgvideo from '../assets/videos/background.mp4'
import { Background } from '../Styles/Background'

export function Introduction() {
    return (
      <>
        <Background src={bgvideo} autoPlay loop muted/>
        <Header/>
        <SectionMain/>
      </>
    )
}