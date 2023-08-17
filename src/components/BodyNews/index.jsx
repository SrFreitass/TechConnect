import { useState, useEffect, useRef } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { ArticleStyled, MainStyled, ArticleContainerStyled } from "./style";
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleCreationForm/style";
import toast, { Toaster } from 'react-hot-toast';
import { setPersistence } from "firebase/auth";
import { TrashSimple } from "@phosphor-icons/react";

export function BodyNews() {
  const [content, setContent] = useState(null);
  const [image, setImage] = useState('')
  const [commentClient, setCommentClient] = useState([]);
  const [comments, setComments] = useState([])
  const inputRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()
  const { title } = useParams();

const fetchCommentsData = () => {
  console.log('renderizou')
  
  const q = query(collection(db, 'comments'), where('title', '==', title))
  const querySnapshot = getDocs(q).then((r) => {
    if (r.docs.length > 0) {
      const doc = r.docs.map((doc) => ({...doc.data()}))
      setComments(doc)
      
      return
    }
  })
}

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("id", "==", title));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        const articleData = { ...doc.data(), id: doc.id };
        setContent(articleData.content);
        setImage(articleData.imageURL)
        return
    }
    }

    fetchData();
    fetchCommentsData()
  }, [title]);

  if (!content) {
    return null;
  }

  const commentsCollectionRef = collection(db, 'comments');
  const username = 'Guilherme'

  const handleComment = async () => {
    const valueComment = inputRef.current.value
    

    toast.loading('Publicando comentário...')
    await addDoc(commentsCollectionRef, {
      valueComment,
      username,
      title,
    })
    
    
    const newComment = { valueComment, username, title };
    setCommentClient([newComment, ...commentClient])
  
    toast.success('Comentário publicado')

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
        
        {console.log(commentClient)}

        {
        commentClient.map((comment, index) => (
          <div key={index}>
           <h4>{comment.username}</h4>
           <p>{comment.valueComment}</p>
           {                  
            comment.username == username &&
            <button><TrashSimple/></button>
            }
        </div>
        ))
        }

        {
        comments.map((comment, index) => {
            return (
              <div key={index}>
                <h4>{comment.username}</h4>
                <p>{comment.valueComment}</p>
                {
                  comment.username == username &&
                  <button><TrashSimple/></button>
                }
              </div>
            )
          })
        }
        
      </ArticleContainerStyled>

    </>
  )
}
