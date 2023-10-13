import { Header } from "../components/Header/index"
import { SectionMain } from "../components/SectionMain/index"
import bgvideo from '../assets/videos/background.mp4'
import { Background } from '../Styles/Background'
import { Wrapper } from "../Styles/Wrapper";
import { useEffect } from "react";

export function Introduction() {

    useEffect(() => {
      document.documentElement.style.overflowY = 'hidden'

    }, [])

    return (
      <>
      <Background />
        <Wrapper>
          <Header/>
          <SectionMain/>
        </Wrapper>
      </>
    )
}