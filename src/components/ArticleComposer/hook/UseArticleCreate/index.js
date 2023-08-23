import { useRef, useState, useEffect } from 'react'
import { db, storage } from '../../../../services/firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import toast, { Toaster } from 'react-hot-toast';

export function useArticleCreate() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setAuthor] = useState('')
    const [emphasis, setEmphasis] = useState(false)
    const [imageUpload, setImageUpload] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [url, setURL] = useState('')


    const editorRef = useRef();
    const categoryRef = useRef()

    const articleCollectionRef = collection(db, 'articles');

    const standardStructure = `<h1>Tit&uacute;lo.</h1>
    <h2>Subtit&uacute;lo.</h2>
    <p>Autor.</p>
    <hr>
    <p><img>Imagem principal ficar&aacute; aqui.</p>
    <p>Conte&uacute;do...</p>`.replace(/ /g, '')

    useEffect(() => {
        if (content === '' || imageURL == '') {
            toast.error('Preencha todos os campos')
            return
        }

        const category = (categoryRef.current.value).toLowerCase()

        addDoc(articleCollectionRef, {
            title,
            summary,
            content,
            author,
            imageURL,
            emphasis,
            category,
        })
        toast.success('Artigo enviado com sucesso')
        setEmphasis(false)

    }, [content, imageURL]);


    useEffect(() => {
        const uploadImage = async (e) => {
            const imageRef = ref(storage, `images/${imageUpload.name}`);
            console.log(imageUpload)

            if (imageUpload == '') {
                return
            }

            try {
                await uploadBytes(imageRef, imageUpload)
                toast.loading('Enviando a imagem')
                const DownloadURL = await getDownloadURL(imageRef)
                setURL(DownloadURL)
                toast.success('Imagem enviada com sucesso')
                console.log(url)
            }
            catch (error) {
                toast.error('Erro ao enviar a imagem')
            }

        }
        uploadImage()
    }, [imageUpload])


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const valueEditor = editorRef.current.getContent()

        console.log(valueEditor)
        console.log(standardStructure)
        if (valueEditor != standardStructure) {

            try {
                setContent(valueEditor);
                setTitle((/<h1>(.*?)<\/h1>/.exec(valueEditor)[0]).replace(/(<([^>]+)>)/ig, ''))
                setSummary((/<h2>(.*?)<\/h2>/.exec(valueEditor)[0]).replace(/(<([^>]+)>)/ig, ''));
                setAuthor((/<p>(.*?)<\/p>/.exec(valueEditor)[0]).replace(/(<([^>]+)>)/ig, ''));
                setImageURL(url)
            } catch (error) {
                toast.error('Revise o conteúdo do artigo')
                console.log(error)
            }

            return
        }

        toast.error('Revise o conteúdo do artigo')

    }

    const handleImageDelete = (e) => {
        e.preventDefault();
        setImageURL('')
        setImageUpload(null)
        toast('Você excluiu a imagem!', {
            icon: '🗑️',
        });
    }


    return {
        emphasis,
        setEmphasis,
        imageUpload,
        setImageUpload,
        imageURL,
        editorRef,
        standardStructure,
        handleFormSubmit,
        handleImageDelete,
        categoryRef,
    }
}