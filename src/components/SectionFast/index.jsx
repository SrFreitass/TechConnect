import untitled from './untitled.mp4'
import { MobileVideo, SectionFastStyled, ShareButtons } from './style'
import { InstagramLogo, TelegramLogo, FacebookLogo, TwitterLogo, Pause, Play, SoundcloudLogo, SpeakerSimpleHigh, SpeakerSimpleSlash, WhatsappLogo, Share, X } from '@phosphor-icons/react'
import { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../Links'
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../../services/firebaseconfig'

export function SectionFast() {

    const videoRef = useRef(null)
    const myRef = useRef(null)
    const [playing, setPlaying] = useState(true)
    const [sound, setSound] = useState(true)
    const [fast, setFast] = useState([])
    const [share, setShare] = useState(false)
    console.log('RENDERIZO')

    useEffect(() => {
        const FetchFast = async () => {
            const q = await query(collection(db, "fast"), where("title", "!=", "teste"))
            const querySnapshot = await getDocs(q)
            const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(data)
            setFast(data)
        }
        FetchFast()

    }, [])



    const handleSound = (e) => {
        const video = (e.target.parentElement.parentElement.parentElement.querySelector('video'))
        console.log(e.target.closest('section > div video'))
        if (video) {
            setSound(!sound)
            video.muted = !video.muted
        }
        console.log('olha clicou')
    }

    const videoState = (e) => {
        setPlaying(!playing)
        e.target.paused ? e.target.play() : e.target.pause()
    }

    const nextVideo = (e) => {
        const legal = (e.target.querySelectorAll('video'))
        legal.forEach((video) => {
            video.pause()
            video.currentTime = 0
            video.muted = false
        })
        setPlaying(true)
        setSound(true)
        setShare(false)
    }

    const teste123 = (e) => {
        console.log(e.target.parentElement.querySelector('video'))
        console.log('')

    }

    const handleShareButtons = () => {
        setShare(!share)
    }

    return (
        <SectionFastStyled onScroll={nextVideo}>
            {
                fast.map((fast, index) => {
                    return (
                        <>
                            <MobileVideo key={index}>
                                <video src={fast.videoURL} autoplay loop controls controlsList="nodownload nofullscreen noremoteplayback" onClick={videoState}>
                                </video>
                                <ShareButtons>

                                    {
                                        share ? <ShareAside setShare={setShare} share={share} /> : <> <button onClick={handleShareButtons}><Share size="32" color="#C291F4" /></button> <button title='Sair'><Link to="/home"><X size="32" color="#C291F4" /></Link></button></>
                                    }
                                </ShareButtons>
                            </MobileVideo>
                        </>
                    )
                })
            }
        </SectionFastStyled >
    )
}

const ShareAside = ({ setShare, share }) => {

    const handleShareButtons = () => {
        setShare(!share)
    }

    return (
        <ShareButtons>
            <button onClick={handleShareButtons}><X size="32" color="#C291F4" /></button>
            <button><a href="#"><FacebookLogo size={32} /></a></button>
            <button><a href="#"><InstagramLogo size={32} /></a></button>
            <button><a href="#"><TwitterLogo size={32} /></a></button>
            <button><a href="#"><WhatsappLogo size={32} /></a></button>
            <button><a href="#"><TelegramLogo size={32} /></a></button>
        </ShareButtons>
    )
}