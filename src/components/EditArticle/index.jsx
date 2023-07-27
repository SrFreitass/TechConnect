import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../../firebaseconfig";
import { collection, query, where, getDocs, updateDoc, doc} from "firebase/firestore"
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react"
import { CreateForm, UploadContainer, IconsContainer, Btoaolegal, Oie } from '../FormCreate/style'
import { Editor } from "@tinymce/tinymce-react";
import { Header } from "../Header";
import { Wrapper } from "../../Styles/Wrapper";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

export function EditArticle() {
    const [content, setContent] = useState('');
    const [contentEdit, setContentEdit] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');
    const [emphasis, setEmphasis] = useState(false);
    const [emphasisEdit, setEmphasisEdit] = useState(false);
    const [imageUpload, setImageUpload] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [imageEditURL, setImageEditURL] = useState('');
  
    const { newstitle } = useParams();
    const editorRef = useRef();

  
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("title", "==", newstitle));
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
  }, [newstitle]);

  useEffect(() => {

    if (content != contentEdit) {
      console.log('você mudou algo')
      updateDoc(doc(db, "articles", id), {
        title: title,
        summary: summary,
        author: author,
        content: contentEdit,
      })
    }
      
       if (imageURL != imageEditURL) { 
         console.log('você mudou a imagem')
         updateDoc(doc(db, "articles", id), {
           imageURL: imageEditURL,
         })
    }

  }, [contentEdit, imageEditURL])


  const testeoie = async (e) => {
    e.preventDefault()
    const contentEditor = editorRef.current.getContent()
    setContentEdit(contentEditor) 
    setTitle(/<h1>(.*?)<\/h1>/.exec(contentEditor)[1])
    setSummary(/<h2>(.*?)<\/h2>/.exec(contentEditor)[1])
    setAuthor(/<p>(.*?)<\/p>/.exec(contentEditor)[1])
    setImageEditURL(imageURL)

    console.log(emphasis)
    updateDoc(doc(db, "articles", id), {
      emphasis
    })

    const imageRef = ref(storage, `images/${imageUpload.name}`)      
    if (imageUpload == '') {
      return 
    } else {
      try {
        uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(imageRef)
        setImageEditURL(url)
        }
        catch (error) { 
          console.log('error')
        }
      }
    } 
    
    return (
      <Wrapper>
      <Header/>
      <CreateForm>
        <form onSubmit={testeoie}>
            <div>
              
              <UploadContainer>
                <CloudArrowDown size={50} />
                <input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => { setImageUpload(e.target.files[0]) }}/> 
                <span>Select Files</span>
              </UploadContainer>  
              
              <IconsContainer>
                <button> <TrashSimple size={24}  color="#4D4DB5"/> </button>
                <p></p>
              </IconsContainer>

              <IconsContainer>
                <NotePencil size={24}  color="#4D4DB5"/>
                <p>Posted</p>
              </IconsContainer>

              
              <IconsContainer>
                <Bookmarks size={24}  color="#4D4DB5"/>
                <label htmlFor="">É um artigo de destaque?</label>
                <input type="checkbox" checked={emphasis} onChange={(e) => setEmphasis(!emphasis)} />
              </IconsContainer>
              
              <Oie>
                <Btoaolegal>Voltar</Btoaolegal>
                <Btoaolegal type="submit">Editar</Btoaolegal>
              </Oie>

          </div>

            <Editor
            initialValue={content}
            onInit={(evt, editor) => (editorRef.current = editor)} 
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"  
            />
          
        </form>
      </CreateForm>
      </Wrapper>
    )
}
