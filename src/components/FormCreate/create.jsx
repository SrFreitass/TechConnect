import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from 'react'
import { db } from '../../firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { CreateForm } from './style'

export function CreateTeste() {

    const [content, setContent] = useState('');
    const [ title, setTitle ] = useState('')
    const [ summary, setSummary ] = useState('')
    const [ image, setImage ] = useState('')

    const editorRef = useRef();
    const articleCollectionRef = collection(db, 'articles');
    

    /* Este é um efeito que será acionado toda vez que o estado content for alterado. 
    Se o content estiver vazio, será exibida uma mensagem de log "vazio". Caso contrário, 
    os valores de content, title e summary são registrados no console e um novo documento 
    é adicionado à coleção "articles" no Firestore usando a função addDoc.*/

    useEffect(() => {

      if(content == '') {
        console.log('vazio')
      } else {
        console.log(content)
        console.log(title)

        addDoc(articleCollectionRef, {
          title,
          summary,
          content,
        }).then(() => console.log('adicionado'))
          .catch((err) => console.log(err)
        );
      }
    }, [content]);
    
    
    const onClickHandler = (e) => {
      e.preventDefault()
      setContent(editorRef.current.getContent());
      setTitle(/<h1>(.*?)<\/h1>/.exec(editorRef.current.getContent())[1])
      setSummary(/<h2>(.*?)<\/h2>/.exec(editorRef.current.getContent())[1])
    };    
    
    
    return (
      <>
      <CreateForm>

          <form>

            <Editor 
            onInit={(evt, editor) => (editorRef.current = editor)} 
            initialValue="Escreva qualquer coisa"
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"  
            />

            <button 
            type="submit" 
            onClick={onClickHandler}>
            Enviar
          </button>

          </form>

      </CreateForm>
      </>
    );
  }

