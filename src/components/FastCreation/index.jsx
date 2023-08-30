import { useState, useEffect } from "react";
import { ButtonDefault, ButtonsContainer, UploadContainer } from "../ArticleComposer/style";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../../services/firebaseconfig";
import { CloudArrowDown } from '@phosphor-icons/react'
import { addDoc, collection } from "firebase/firestore";
import { MainStyled } from './style'
import { Wrapper } from '../../Styles/Wrapper'
import testeVideo from '../../assets/videos/celularteste.mp4'
import { Header } from "../Header";

export function FastCreation() {
    const [videoUpload, setVideoUpload] = useState('')
    const [videoURL, setVideoURL] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const storageRef = ref(storage, `videos/${videoUpload.name}`)
    const fastCollectionRef = collection(db, 'fast');



    useEffect(() => {

        const uploadVideo = async () => {
            console.log('enviando')
            await uploadBytes(storageRef, videoUpload)
            const url = await getDownloadURL(storageRef)
            setVideoURL(url)
            console.log('enviado' + ' ' + url)
        }

        uploadVideo()

    }, [videoUpload])

    const handlePostFast = async (e) => {
        e.preventDefault()
        console.log(title, description)
        if (videoUpload && title) {
            await addDoc(fastCollectionRef, {
                title,
                description,
                videoURL
            })
            setTitle('')
            setDescription('')
            setVideoURL('')
            setVideoUpload('')
        }
    }

    return (
        <Wrapper>
            <Header />
            <MainStyled>
                <form>
                    <h2>Crie seu <span>#fast</span></h2>
                    <UploadContainer>
                        <CloudArrowDown size={50} /> <input type="file" accept=".mp4" onChange={(e) => setVideoUpload(e.target.files[0])} />
                        <span>Selecione arquivos</span>
                    </UploadContainer>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Insira um título" value={title} />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Insira uma breve descrição do vídeo" value={description} />
                    <ButtonsContainer>
                        <ButtonDefault>Voltar</ButtonDefault>
                        <ButtonDefault onClick={handlePostFast}>Postar</ButtonDefault>
                    </ButtonsContainer>
                </form>
                <div>
                    <video src={videoUpload ? videoURL : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} controls />
                </div>
            </MainStyled>
        </Wrapper>
    )
}