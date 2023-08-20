import { useState, useEffect, useRef } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, orderBy } from "firebase/firestore";
import { ArticleStyled, MainStyled, ArticleContainerStyled, CommentContainer } from "./style";
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleCreationForm/style";
import toast, { Toaster } from 'react-hot-toast';
import { setPersistence } from "firebase/auth";
import { TrashSimple } from "@phosphor-icons/react";

export function BodyNews() {
  const [content, setContent] = useState(null)
  const [image, setImage] = useState('')
  const [comments, setComments] = useState([])
  const [ eventHandlerComment, setEventHandlerComment ] = useState(false)
  const inputRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()
  const { title } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("id", "==", title));
      const querySnapshot = await getDocs(q)

      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        const articleData = { ...doc.data(), id: doc.id }
        setContent(articleData.content)
        setImage(articleData.imageURL)
    }
  
    }

    fetchData();
  }, [title]);

  useEffect(() => {

        const q = query(collection(db, 'comments'), where('title', '==', title))
        const querySnapshot = getDocs(q).then((r) => {
              const doc = r.docs.map((doc) => ({...doc.data(), id: doc.id}))
              doc.sort((a,b) => {
                return a.date < b.date
              })

              setComments(doc)
              }
            )

  }, [eventHandlerComment])

  const commentsCollectionRef = collection(db, 'comments');
  const username = 'Guilherme'

  const handleComment = async () => {
    const date = new Date()
    const valueComment = inputRef.current.value

    toast.loading('Publicando comentário...')
    await addDoc(commentsCollectionRef, {
      valueComment,
      username,
      title,
      date,
    })
    
    
    toast.success('Comentário publicado')
    setEventHandlerComment(!eventHandlerComment)

  }

  const handleDelComment = async (id) => {
    const commentDoc = doc(db, "comments", id)
    
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
        

        <hr/>

        <section>
          <textarea  cols="20" rows="10" placeholder="O que deseja comentar?" ref={inputRef}/>
        
        </section>
        
                  <ButtonDefault>Cancelar</ButtonDefault>
                  <ButtonDefault onClick={handleComment}>Comentar</ButtonDefault>
        {
        comments.map((comment, index) => {
            return (
              <CommentContainer key={index}>
                <div>
                  <h4>{comment.username}</h4>
                  <p>{comment.valueComment}</p>
                </div>
                {
                  comment.username == username &&
                  <button onClick={() => handleDelComment(comment.id)}><TrashSimple color="#4D4DB5" size={24}/></button>
                }
              </CommentContainer>
            )
          })
        }
        
      </ArticleContainerStyled>

    </>
  )
}



