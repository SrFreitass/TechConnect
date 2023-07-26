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
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState('');
    const [emphasis, setEmphasis] = useState(false);
    const [imageUpload, setImageUpload] = useState('');
    const [imageURL, setImageURL] = useState('');
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
        setContent(articleData.content);
        setId(articleData.id);
      } else {
        setContent(null);
      }
    };
    
    fetchData();
  }, [newstitle]);
  
  useEffect(() => {
    if (imageURL == '' || content == '') {
      console.log('nada')
    } else {
      const articleDoc = doc(db, "articles", id)
      console.log('mudou')
      updateDoc(articleDoc, {
        title,
        summary,
        author,
        content,
        emphasis,
        imageURL,
      })
    }

  }, [imageURL, content])

    const testeoie = async (e) => {
        e.preventDefault()
        
        if (title == null || summary == null || author == null || content == null) {
          console.log('vai se fuder firebase do caralho')
        } else {
          setTitle(/<h1>(.*?)<\/h1>/.exec(editorRef.current.getContent())[1]);
          setSummary(/<h2>(.*?)<\/h2>/.exec(editorRef.current.getContent())[1]);
          setAuthor(/<p>(.*?)<\/p>/.exec(editorRef.current.getContent())[1]);
          setContent(editorRef.current.getContent());
        }
      
        const imageRef = ref(storage, `images/${imageUpload.name}`)      
      if (imageUpload == '') {
        return 
      } else {
        try {
          uploadBytes(imageRef, imageUpload)
          const url = await getDownloadURL(imageRef)
          setImageURL(url)
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
                <button onClick={''}> <TrashSimple size={24}  color="#4D4DB5"/> </button>
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
                {console.log(emphasis)}
              </IconsContainer>
              
              <Oie>
                <Btoaolegal>Voltar</Btoaolegal>
                <Btoaolegal type="submit">Enviar</Btoaolegal>
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
