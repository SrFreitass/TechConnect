import { useState, useEffect, useRef } from "react";
import { db, storage } from "../../../../services/firebaseconfig";
import { collection, query, where, getDoc, updateDoc, doc } from "firebase/firestore"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useParams } from "react-router-dom";
import { toast } from 'react-hot-toast'

export function useArticleEdit() {

    const [content, setContent] = useState('');
    const [contentEdit, setContentEdit] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');
    const [emphasis, setEmphasis] = useState(false);
    const [imageUpload, setImageUpload] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageEditURL, setImageEditURL] = useState('');

    const { articleTitle } = useParams();
    const editorRef = useRef();
    const categoryRef = useRef(null)
    const [category, setCategory] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const q = doc(db, "articles", articleTitle);
            const docSnap = await getDoc(q)
            if (docSnap.exists()) {
                setId(articleTitle)
                setContent((docSnap.data()).content)
                setEmphasis((docSnap.data()).emphasis)
                setCategory((docSnap.data()).category)
                return
            }

        };

        fetchData();
    }, [articleTitle]);



    useEffect(() => {
        const uploadImage = async () => {
            const imageRef = ref(storage, `images/${imageUpload.name}`)
            if (imageUpload == '') {
                return
            }
            try {
                toast.loading('Upando a imagem')
                await uploadBytes(imageRef, imageUpload)
                const url = await getDownloadURL(imageRef)
                toast.success('Imagem enviada com sucesso')
                setImageURL(url)
            }
            catch (error) {
                toast.error('Erro no envio da imagem')
            }
        }
        uploadImage()
    }, [imageUpload])

    useEffect(() => {
        const updateArticle = async () => {
            try {
                if (imageEditURL) {
                    updateDoc(doc(db, "articles", id), {
                        imageURL: imageEditURL,
                    })
                    toast('Imagem alterada com sucesso!', {
                        icon: '🖼️'
                    })
                }
        
                if (contentEdit) {
                    const categoryCurrent = category != categoryRef.current.value ? categoryRef.current.value : category
                    console.log(categoryCurrent)

                    updateDoc(doc(db, "articles", id), {
                        title,
                        summary,
                        author,
                        content: contentEdit,
                        category: categoryCurrent,
                    })
                    toast.success('Artigo alterado com sucesso!')
                }
            } catch (error) {
                toast.error('Houve algum erro no envio do artigo')
                console.log(error)
            }

        }

        updateArticle()


    }, [imageEditURL, contentEdit])

    const SendArticleEdited = async (e) => {
        e.preventDefault()

        const contentEditor = editorRef.current.getContent()
        setContentEdit(contentEditor)
        setTitle((/<h1>(.*?)<\/h1>/.exec(contentEditor)[0]).replace(/(<([^>]+)>)/ig, ''))
        setSummary((/<h2>(.*?)<\/h2>/.exec(contentEditor)[0]).replace(/(<([^>]+)>)/ig, ''));
        setAuthor((/<p>(.*?)<\/p>/.exec(contentEditor)[0]).replace(/(<([^>]+)>)/ig, ''));
        setImageEditURL(imageURL)
        
                updateDoc(doc(db, "articles", id), {
                    emphasis,
                })
        
        }

    return {
        content,
        imageUpload,
        setImageUpload,
        SendArticleEdited,
        editorRef,
        setEmphasis,
        emphasis,
        categoryRef,
    }
}