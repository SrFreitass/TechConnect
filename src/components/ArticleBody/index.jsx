import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../services/firebaseconfig";
import { collection, query, where, getDoc, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ArticleStyled, MainStyled, ArticleContainerStyled, CommentContainer } from "./style";
import DOMPurify from "dompurify";

import toast, { Toaster } from 'react-hot-toast';
import { Comments } from "../Comments";

export function BodyNews() {
  const [content, setContent] = useState(null)
  const [image, setImage] = useState('')
  const [comments, setComments] = useState([])
  const [eventHandlerComment, setEventHandlerComment] = useState(false)
  const inputRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()
  const { title } = useParams()
  const userID = auth.currentUser?.uid
  const displayName = auth.currentUser?.displayName

  useEffect(() => {
    const fetchData = async () => {
      const q = doc(db, "articles", title)
      const querySnapshot = await getDoc(q)

      if (querySnapshot.exists()) {
        setContent((querySnapshot.data()).content)
        setImage((querySnapshot.data()).imageURL)
      }

    }

    fetchData();
  }, [title]);

  useEffect(() => {

    const q = query(collection(db, `/articles/${title}/comments`))
    const querySnapshot = getDocs(q).then((r) => {
      const doc = r.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      doc.sort((a, b) => {
        return a.date < b.date
      })

      setComments(doc)
    }
    )

  }, [eventHandlerComment])

  const commentsCollectionRef = collection(db, `/articles/${title}/comments`);

  const handleComment = async () => {
    const date = new Date()
    const valueComment = inputRef.current.value

    toast.loading('Publicando comentário...')
    await addDoc(commentsCollectionRef, {
      valueComment,
      displayName,
      userID,
      date,
    })


    toast.success('Comentário publicado')
    setEventHandlerComment(!eventHandlerComment)

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


  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          loading: {
            duration: 1000,
          }
        }}
      />

      <ArticleContainerStyled>
        <h3>#tecnologia</h3>
        <div ref={contentRef} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />

        <hr />

        <Comments />

      </ArticleContainerStyled>

    </>
  )
}



