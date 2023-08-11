import untitled from './untitled.mp4'
import { MobileVideo, SectionFastStyled } from './style'
import { Pause, Play } from '@phosphor-icons/react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../Links'

export function SectionFast() {

    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        if (playing) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }

    }, [playing])

    const endVideo = () => {
        setPlaying(false)
    }

    return (
        <SectionFastStyled>
            <MobileVideo status={playing}>
                <Links />
                <div>
                    <video src={untitled} ref={videoRef} onEnded={endVideo} />
                    <button>   <Link to="./fast/1"> <Play size="32" /> </Link> </button>
                    <div>
                        <h3>Lorem ipsum</h3>
                        <p>Guilherme Freitas</p>
                    </div>
                </div>
            </MobileVideo >

        </SectionFastStyled>
    )
}