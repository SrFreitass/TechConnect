import { Header } from "./components/Header"
import { SectionMain } from "./components/SectionMain/index"
import bgvideo from './assets/videos/background.mp4'
import { Background } from './Styles/Background'

export function App() {
  return (
    <>
        <Background src={bgvideo} autoPlay loop muted/>
        <Header/>
        <SectionMain/>
    </>
  )
}

