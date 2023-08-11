import { useState, useEffect, useRef } from "react";
import { db, storage } from "../../firebaseconfig";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"
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

    useEffect(() => {
        const fetchData = async () => {
            const q = query(collection(db, "articles"), where("title", "==", articleTitle));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.docs.length > 0) {
                const doc = querySnapshot.docs[0];
                const articleData = { ...doc.data(), id: doc.id };
                setId(articleData.id)
                setEmphasis(articleData.emphasis);
                setImageURL(articleData.imageURL)
                setContent(articleData.content);
            } else {
                setContent(null);
            }
        };

        fetchData();
    }, [articleTitle]);



    useEffect(() => {
        const uploadImage = async () => {
            const imageRef = ref(storage, `images/${imageUpload.name}`)
            if (imageUpload == '') {
                return

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
        }
        uploadImage()
    }, [imageUpload])

    useEffect(() => {
        if (imageEditURL) {
            updateDoc(doc(db, "articles", id), {
                imageURL: imageEditURL,
            })
        }

        if (contentEdit) {
            updateDoc(doc(db, "articles", id), {
                title,
                summary,
                author,
                content: contentEdit,
            })
        }

    }, [imageEditURL, contentEdit])

    const SendArticleEdited = async (e) => {
        e.preventDefault()
        const contentEditor = editorRef.current.getContent()
        setContentEdit(contentEditor)
        setTitle(/<h1>(.*?)<\/h1>/.exec(contentEditor)[1])
        setSummary(/<h2>(.*?)<\/h2>/.exec(contentEditor)[1])
        setAuthor(/<p>(.*?)<\/p>/.exec(contentEditor)[1])
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
    }
}