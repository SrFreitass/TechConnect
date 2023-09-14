import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../../services/firebaseconfig";
import { collection, query, where, getDoc, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ArticleStyled, MainStyled, ArticleContainerStyled, CommentContainer } from "./style";
import { ShareAside } from "../SectionFast";
import DOMPurify from "dompurify";
import he from 'he'
import toast, { Toaster } from 'react-hot-toast';
import { Comments } from "../Comments";
import { Recomend } from "../Recomend";

export function BodyNews() {
  const [content, setContent] = useState({})
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [comments, setComments] = useState([])
  const [eventHandlerComment, setEventHandlerComment] = useState(false)
  const inputRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()
  const modalRef = useRef()
  const { titleID } = useParams()


  console.log('renderizou')


  useEffect(() => {
    const fetchData = async () => {
      const q = doc(db, "articles", titleID)
      const querySnapshot = await getDoc(q)

      if (querySnapshot.exists()) {
        setContent((querySnapshot.data()))
        setImage(querySnapshot.data().imageURL)
        setTitle(he.decode(querySnapshot.data().title))
        document.title = he.decode(querySnapshot.data().title)

      }

    }

    fetchData();
  }, [titleID]);

  useEffect(() => {
    if (contentRef.current.querySelector('img') || contentRef.current.querySelector('p')) {
      contentRef.current.querySelector('img').src = image
      const author = contentRef.current.querySelector('p')
      author.after(``)
      author.innerText = `${author.innerText} ${new Date(content.date.seconds * 1000).toLocaleString('pt-BR')}`
      author.style.borderBottom = '1px solid #757575'
      console.log(window.innerWidth)
    }
  }, [image])

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
        <ShareAside title={title} />
        <div>
          <h6>#{content.category}</h6>
          <div ref={contentRef} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.content) }} />
          <ShareAside title={title} />
          <Comments />
        </div>
      </ArticleContainerStyled>
      <Recomend category={content.category} title={content.title} />

    </>
  )
}



