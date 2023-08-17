import { useState, useEffect } from "react";
import { ButtonDefault, UploadContainer } from "../ArticleCreationForm/style";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebaseconfig";
import { CloudArrowDown } from '@phosphor-icons/react'

export function FastCreation() {
    const [ videoUpload, setVideoUpload ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    
    const storageRef = (storage, `videos/${videoUpload.name}`)


    useEffect(() => {

        const uploadVideo = async () => {
            await uploadBytes(storageRef, videoUpload)
            const url = await getDownloadURL(storageRef)
            console.log(url)
        }

        uploadVideo()

    }, [videoUpload])

    const handlePostFast = (e) =>  {
        e.preventDefault()
        console.log(title, description)
    }

    return(
        <>
            <h3>Crie seu <span>#fast</span></h3>
            <UploadContainer>
                <CloudArrowDown size={50} /> <input type="file" accept=".mp4" onChange={(e) => setVideoUpload(e.target.files[0])} />
                <span>Selecione arquivos</span>
            </UploadContainer>
            <form>
                <input type="" onChange={(e) => setTitle(e.target.value)}/>
                <input type="" onChange={(e) => setDescription(e.target.value)}/>
                <ButtonDefault>Voltar</ButtonDefault>
                <ButtonDefault onClick={handlePostFast}>Postar</ButtonDefault>
            </form>
        </>
    )
}