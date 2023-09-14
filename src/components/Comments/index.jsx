import { useState, useEffect, useRef } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { auth, db } from "../../services/firebaseconfig";
import { collection, query, where, getDoc, getDocs, addDoc, deleteDoc, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import { ArticleStyled, MainStyled, ArticleContainerStyled, CommentContainer } from "./../ArticleBody/style";
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleComposer/style";
import toast, { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from "firebase/auth";
import { Pen, TrashSimple, PaperPlaneRight } from "@phosphor-icons/react";
import { ContainerComments, Nocomments } from './style'
import { Link } from 'react-router-dom'


export function Comments() {

    const [comments, setComments] = useState([])
    const [eventHandlerComment, setEventHandlerComment] = useState(false)
    const [userID, setUserID] = useState('')
    const [displayName, setDisplayName] = useState('')
    const inputRef = useRef()
    const commentRef = useRef()
    const { title } = useParams()
    const [clicksPersMin, setClicksPersMin] = useState(0)
    console.log('renderizouX')




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setDisplayName(user.displayName)
                setUserID(user.uid)
            }
        })

    }, [])

    useEffect(() => {

        const q = query(collection(db, `/articles/${title}/comments`))
        const querySnapshot = getDocs(q).then((r) => {
            const doc = r.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            doc.sort((a, b) => {
                return b.date - a.date
            })

            setComments(doc)
        }
        )

    }, [eventHandlerComment])

    const commentsCollectionRef = collection(db, `/articles/${title}/comments`);

    const handleComment = async () => {

        if(inputRef.current.value == false) {
            toast.error('Preencha os espaços em brancos')
            return
        }

        if (clicksPersMin < 3) {
            const date = new Date()
            const valueComment = inputRef.current.value
            setClicksPersMin(clicksPersMin + 1)
            toast.loading('Publicando comentário...')
            await addDoc(commentsCollectionRef, {
                valueComment,
                displayName,
                userID,
                date: serverTimestamp(),
            })
            toast.success('Comentário publicado')
            setEventHandlerComment(!eventHandlerComment)
            return
        }

        setTimeout(() => {
            setClicksPersMin(0)
        }, 60000)
        
        toast.error('Sua ações estão sendo limitadas.')
    }


    const handleDelComment = async (id) => {
        const commentDoc = doc(db, `/articles/${title}/comments`, id)

        try {
            toast.loading('Excluindo comentario')
            await deleteDoc(commentDoc)
            setEventHandlerComment(!eventHandlerComment)
            toast.success('Comentario excluido')
        }

        catch (err) {
            console.log(err.message)
            toast.error('Ocorreu algum problema')
        }


    }


    if (auth.currentUser) {
        return (
            <ContainerComments>
                <span/>
                <br/>
                <h3>Comentários</h3>
                <section>
                    <textarea cols="20" rows="15" placeholder="O que deseja comentar?" ref={inputRef} />
                    <ButtonDefault onClick={handleComment}><PaperPlaneRight size="28"/></ButtonDefault>
                </section>
                {
                    comments.map((comment, index) => {
                        return (
                            <CommentContainer key={index}>
                                <div>
                                    <h4>{comment.displayName}</h4>
                                    <p>{comment.valueComment}</p>
                                </div>
                                {
                                    comment.userID == userID &&
                                    <TrashSimple onClick={() => handleDelComment(comment.id)} size={24} />
                                }
                            </CommentContainer>
                        )
                    })
                }
            </ContainerComments>

        )
    } else {
        return (
            <>
            <Nocomments>
                <h3>Comentários</h3>
                <br />
                <span>Faça <Link to="../auth/login">login</Link> para ter acesso aos comentários</span>
                <br />
            </Nocomments>
        </>
        )
    }
}