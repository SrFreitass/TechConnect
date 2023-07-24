import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { Editor } from "@tinymce/tinymce-react";

export function EditArticle() {
    const [content, setContent] = useState(null);
    const [id, setId] = useState(null);
    const { title } = useParams();
    const editorRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("title", "==", title));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        const articleData = { ...doc.data(), id: doc.id };
          setContent(articleData.content);
          setId(articleData.id);
      } else {
        setContent(null);
      }
    };

    fetchData();
  }, [title]);

  if (!content) {
    return null;
  }

    const testeoie = () => {
        const title = /<h1>(.*?)<\/h1>/.exec(editorRef.current.getContent())[1]
        const sumary = /<h2>(.*?)<\/h2>/.exec(editorRef.current.getContent())[1]
        const author = /<h2>(.*?)<\/h2>/.exec(editorRef.current.getContent())[1]
        console.log(id)
        const articleDoc = doc(db, "articles", id)
        updateDoc(articleDoc, {
            title,
            content: "oie"
        })
        console.log(articleDoc)
  } 
    
    return (
        <>
            <Editor
            initialValue={content}
            onInit={(evt, editor) => (editorRef.current = editor)} 
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"  
            />
            <button onClick={testeoie}>Enviar</button>
        </>
    )
}
