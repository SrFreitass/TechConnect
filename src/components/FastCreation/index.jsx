import { useState, useEffect } from "react";
import { ButtonDefault, ButtonsContainer, UploadContainer } from "../ArticleComposer/style";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db, auth } from "../../services/firebaseconfig";
import { CloudArrowDown, Share, X } from '@phosphor-icons/react'
import { addDoc, collection } from "firebase/firestore";
import { MainStyled } from './style'
import { Wrapper } from '../../Styles/Wrapper'
import testeVideo from '../../assets/videos/celularteste.mp4'
import { Header } from "../Header";
import { MobileVideo } from "../SectionFast/style";
import toast, { Toaster } from "react-hot-toast";

export function FastCreation() {

    const [videoUpload, setVideoUpload] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [title, setTitle] = useState('')
    
    const fastCollectionRef = collection(db, 'fast');

    useEffect(() => {

        const uploadVideo = async () => {
            console.log('enviando')
            try {
                const storageRef = ref(storage, `videos/${videoUpload.name}`)
                await uploadBytes(storageRef, videoUpload)
                const url = await getDownloadURL(storageRef)
                setVideoURL(url)
                console.log(`enviado ${url}`)
            } catch {
                console.log('error')
            }
        }

        uploadVideo()

    }, [videoUpload])

    const handlePostFast = async (e) => {
        e.preventDefault()


        const titlePurify = title.replace(/\./g, '')

        if (videoUpload && title) {

            if(title.length > 60) {
                toast.error('Máximo 60 caracteres') 
                return
            }

            await addDoc(fastCollectionRef, {
                title: titlePurify,
                author: auth?.currentUser?.displayName,
                videoURL
            })
            
            setTitle('')
            setVideoURL('')
            setVideoUpload('')

            toast.success('Postagem feita com sucesso') 

            return
        }


    }

    return (
        <Wrapper>
            <Toaster 
                position="bottom-left"
                toastOptions={{
                    loading: {
                    duration: 1000,
                    }
                }}
            />
            <Header />
            <MainStyled>
                <form>
                    <h2>Crie seu <span>#fast</span></h2>
                    <UploadContainer>
                        <CloudArrowDown size={50} /> <input type="file" accept=".mp4" onChange={(e) => setVideoUpload(e.target.files[0])} />
                        <span>Selecione arquivos</span>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Insira um título" value={title} />
                    </UploadContainer>
                    <div>
                        <ButtonDefault><X size="20"/>Cancelar</ButtonDefault>
                        <ButtonDefault onClick={handlePostFast}><Share size="20" color="white"/>Publicar</ButtonDefault>
                    </div>
                </form>
                <MobileVideo>
                    <video src={videoURL} loop controls>
                    </video>
                </MobileVideo>    
            </MainStyled>
        </Wrapper>
    )
}