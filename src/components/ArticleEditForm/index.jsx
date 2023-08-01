import { useState, useEffect, useRef } from "react";
import { redirect, useParams } from "react-router-dom";
import { db, storage } from "../../firebaseconfig";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react"
import { StyleArticleCreationForm, UploadContainer, IconsContainer, ButtonsContainer, ButtonDefault } from '../ArticleCreationForm/style'
import { Editor } from "@tinymce/tinymce-react";
import { Header } from "../Header";
import { Wrapper } from "../../Styles/Wrapper";
import toast, { Toaster } from 'react-hot-toast';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export function ArticleEditForm() {
    const [content, setContent] = useState('');
    const [contentEdit, setContentEdit] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');
    const [emphasis, setEmphasis] = useState(false);
    const [imageUpload, setImageUpload] = useState('');
    const [imageURL, setImageURL] = useState(null);
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
                setEmphasis(articleData.emphasis);
                setImageURL(articleData.imageURL)
                setContent(articleData.content);
                setId(articleData.id);
            } else {
                setContent(null);
            }
        };

        fetchData();
    }, [articleTitle]);

    useEffect(() => {

        if (content != contentEdit) {
            toast('Você alterou o conteúdo', {
                icon: '📝',
            })
            updateDoc(doc(db, "articles", id), {
                title: title,
                summary: summary,
                author: author,
                content: contentEdit,
            })
        }

        if (imageURL == imageEditURL) {
            toast('Você alterou a imagem', {
                icon: '🖼️',
            })
            updateDoc(doc(db, "articles", id), {
                imageURL: imageEditURL,
            })
        }

    }, [contentEdit, imageEditURL])



    useEffect(() => {
        const uploadImage = async () => {
            const imageRef = ref(storage, `images/${imageUpload.name}`)
            if (imageUpload == '') {
                return
            } else {
                try {
                    toast.loading('Upando a imagem')
                    await uploadBytes(imageRef, imageUpload)
                    const url = await getDownloadURL(imageRef)
                    toast.success('Imagem upada com sucesso')
                    setImageURL(url)
                }
                catch (error) {
                    console.log('error')
                    toast.error('Erro no upload da imagem')
                }
            }
        }
        uploadImage()
    }, [imageUpload])

    const SendArticleEdited = async (e) => {
        e.preventDefault()
        const contentEditor = editorRef.current.getContent()
        setContentEdit(contentEditor)
        setTitle(/<h1>(.*?)<\/h1>/.exec(contentEditor)[1])
        setSummary(/<h2>(.*?)<\/h2>/.exec(contentEditor)[1])
        setAuthor(/<p>(.*?)<\/p>/.exec(contentEditor)[1])
        setImageEditURL(imageURL)

        console.log(emphasis)
        await updateDoc(doc(db, "articles", id), {
            emphasis
        })
        toast.success('Artigo editado com sucesso')
    }

    return (
        <StyleArticleCreationForm>
            <Toaster position="bottom-left"
                toastOptions={{
                    loading: {
                        duration: 1000,
                    }
                }}
            />
            <form>
                <div>

                    <UploadContainer>
                        <CloudArrowDown size={50} />
                        <input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => setImageUpload(e.target.files[0])} />
                        <span>Select Files</span>
                    </UploadContainer>

                    <IconsContainer>
                        <button> <TrashSimple size={24} color="#4D4DB5" /> </button>
                        <p>{imageUpload && imageUpload.name}</p>
                    </IconsContainer>

                    <IconsContainer>
                        <NotePencil size={24} color="#4D4DB5" />
                        <p>Postado</p>
                    </IconsContainer>


                    <IconsContainer>
                        <Bookmarks size={24} color="#4D4DB5" />
                        <label htmlFor="">É um artigo de destaque?</label>
                        <input type="checkbox" checked={emphasis} onChange={(e) => setEmphasis(!emphasis)} />
                    </IconsContainer>

                    <ButtonsContainer>
                        <ButtonDefault onClick={(e) => e.preventDefault()}>Voltar</ButtonDefault>
                        <ButtonDefault onClick={SendArticleEdited}>Editar</ButtonDefault>
                    </ButtonsContainer>

                </div>

                <Editor
                    initialValue={content}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
                />

            </form>
        </StyleArticleCreationForm>
    )
}
