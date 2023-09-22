import untitled from './untitled.mp4'
import { MobileVideo, SectionFastStyled, ShareButtons } from './style'
import { InstagramLogo, TelegramLogo, FacebookLogo, TwitterLogo, Pause, Play, SoundcloudLogo, SpeakerSimpleHigh, SpeakerSimpleSlash, WhatsappLogo, Share, X } from '@phosphor-icons/react'
import { useRef, useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Links } from '../Links'
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../../services/firebaseconfig'
import toast, { Toaster } from 'react-hot-toast'
import he from 'he'

export function SectionFast() {

    const videoRef = useRef(null)
    const myRef = useRef(null)
    const [playing, setPlaying] = useState(true)
    const [sound, setSound] = useState(true)
    const [fast, setFast] = useState([])
    const [share, setShare] = useState(false)
    const { title } = useParams()

    console.log(title)
    console.log('RENDERIZO')

    useEffect(() => {


        const FetchFast = async () => {
            const q = await query(collection(db, "fast"), where("title", "==", title))
            const outherQ = await query(collection(db, "fast"), where("title", "!=", title))
            const querySnapshot = {
                maindoc: await getDocs(q),
                docs: await getDocs(outherQ)
            }

            console.log(querySnapshot)
            const data = {
                maindoc: querySnapshot.maindoc.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
                docs: querySnapshot.docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            };
            
            setFast([...data.maindoc, ...data.docs])
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
                                <div>
                                    <video ref={videoRef} src={fast.videoURL} loop controls controlsList="nodownload nofullscreen noremoteplayback" onClick={videoState} onTouchStart={videoState}>
                                    </video>
                                    <h3>{fast.title} <span>#fast🎬</span> </h3>
                                    <p>De: {fast.author}</p>
                                </div>
                            </MobileVideo>
                        </>
                    )
                })
            }
        </SectionFastStyled >
    )
}

export const ShareAside = ({ setShare, share, title }) => {
    const { titleID } = useParams()
    console.log(title, titleID)
    const handleShareButtons = () => {
        setShare(!share)
    }

    const copyLink = async (e) => {
        e.preventDefault()
        await navigator.clipboard.writeText(`https://techconnectdev.vercel.app/home/news/${titleID}`)
        toast.success('Link copiado com sucesso')
    }

    return (
        <ShareButtons>
            {/* <button onClick={handleShareButtons}><X size="32" color="#C291F4" /></button> */}
            <button><a href={`https://www.facebook.com/sharer.php?u=https://techconnectdev.vercel.app/home/news/${titleID}`} target='__blank' ><FacebookLogo size={28} /></a></button>
            <button><a href="" onClick={copyLink}><InstagramLogo size={28} /></a></button>
            <button><a href={`https://twitter.com/intent/tweet?url=https://techconnectdev.vercel.app/home/news/${titleID}&text=${title}`} target='__blank' ><TwitterLogo size={28} /></a></button>
            <button><a href={`https://whatsapp://send?text=${title}+https://techconnectdev.vercel.app/home/news/${titleID}`} target='__blank'> <WhatsappLogo size={28} /> </a> </button>
            <button><a href={`https://telegram.me/share/url?url=https://techconnectdev.vercel.app/home/news/${titleID}&text=${title}`} target='__blank'><TelegramLogo size={28} /></a></button>
        </ShareButtons >
    )
}