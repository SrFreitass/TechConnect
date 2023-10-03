import untitled from './untitled.mp4'
import { MobileVideo, SectionFastStyled, ShareButtons, SectionFastStyle } from './style'
import { InstagramLogo, TelegramLogo, FacebookLogo, TwitterLogo, Pause, Play, SoundcloudLogo, SpeakerSimpleHigh, SpeakerSimpleSlash, WhatsappLogo, Share, X, TrashSimple, NotePencil, PencilSimpleLine } from '@phosphor-icons/react'
import { useRef, useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Links } from '../Links'
import { getDocs, query, collection, where, deleteDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebaseconfig'
import toast, { Toaster } from 'react-hot-toast'
import he from 'he'
import { ButtonDefault } from '../ArticleComposer/style'
import { Search } from '../Header/Search'

export function SectionFast(props) {
    console.log(props)

    const videoRef = useRef(null)
    const myRef = useRef(null)
    const [playing, setPlaying] = useState(true)
    const [sound, setSound] = useState(true)
    const [fast, setFast] = useState([])
    const [share, setShare] = useState(false)
    const { title } = useParams()
    const [fastEdit, setFastEdit] = useState(false)

    console.log(title)
    console.log('RENDERIZO')


    useEffect(() => {


        const FetchFast = async () => {
            const q = await query(collection(db, "fast"), title ? where("title", "==", title) : '')
            const outherQ = await query(collection(db, "fast"),  title ? where("title", "!=", title) : '')
            const querySnapshot = {
                maindoc: await getDocs(q),
                docs: await getDocs(outherQ)
            }

            const data = {
                maindoc: querySnapshot.maindoc.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
                docs: querySnapshot.docs.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
            };
            
            setFast([...data.maindoc, ...data.docs])
            console.log(data.maindoc)
        }

        FetchFast()

    }, [])

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


    const handleShareButtons = () => {
        setShare(!share)
    }

    const handleDelFast = async (id) => {
        console.log(id)
        await deleteDoc(doc(db, "fast", id))
        toast.success("Conteúdo deletado")
    }

    const handleEditFast = async () => {
        console.log('ué')
        setFastEdit(true)
    }

    const handleEditTitle = async (e, id) => {

        console.log(e.target.innerText)

        await updateDoc(doc(db, "fast", id), {
            title: e.target.innerText,
        })
        toast.success("Conteúdo alterado")
        setFastEdit(false)

    }

    return (
        <SectionFastStyle>
            <h2>Gerenciamento de <span>#fast</span></h2>

            <SectionFastStyled onScroll={nextVideo}>
                <Toaster
                    position="bottom-left"
                    reverseOrder={false}
                    toastOptions={{
                        loading: {
                            duration: 1000,
                        },
                    }}
                />

                {
                    fast.map((fast, index) => {
                        return (
                            <>
                                <MobileVideo key={index}>
                                    <div>
                                        <video ref={videoRef} src={fast.videoURL} loop controls controlsList="nodownload nofullscreen noremoteplayback" onClick={videoState} onTouchStart={videoState}>
                                        </video>
                                        <h3 onBlur={(e) => handleEditTitle(e, fast.id)} contentEditable={fastEdit}>{fast.title} {props.isAdmin ? '' : <span>#fast🎬</span>} </h3>
                                        <p>De: {fast.author}</p>
                                    </div>
                                    <div>
                                    { props.isAdmin ? (
                                        <>  
                                            <TrashSimple  onClick={() => handleDelFast(fast.id)} size={28} color="#4D4DB5" />
                                            {fastEdit ? <PencilSimpleLine size={24}  color="#4D4DB5"/> : <NotePencil onClick={handleEditFast}size={28} color="#4D4DB5" /> }
                                        </> 
                                    )
                                    : '' }
                                    </div>
                                </MobileVideo>
                            </>
                        )
                    })
                }
            </SectionFastStyled >
        </SectionFastStyle> 
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