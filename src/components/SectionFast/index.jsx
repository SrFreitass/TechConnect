import untitled from './untitled.mp4'
import { MobileVideo, SectionFastStyled } from './style'
import { Pause, Play, SpeakerSimpleHigh, SpeakerSimpleSlash } from '@phosphor-icons/react'
import { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../Links'

export function SectionFast() {

    const videoRef = useRef(null)
    const myRef = useRef(null)
    const [playing, setPlaying] = useState(true)
    const [sound, setSound] = useState(true)

    console.log(myRef.current)


    const handleSound = () => {
        setSound(!sound)

        if (sound) {

        }
    }

    const videoState = () => {
        setPlaying(!playing)
    }

    return (
        <SectionFastStyled>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
            <video src={untitled} ref={videoRef}></video>
        </SectionFastStyled>
    )
}