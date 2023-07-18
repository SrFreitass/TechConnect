import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from 'react'
import { db } from '../../firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { CreateForm } from './style'
import ReactHtmlParser from 'react-html-parser'

export function CreateTeste() {

    const [content, setContent] = useState('');
    const [preview, setPreview] = useState('');
    const editorRef = useRef();
    const articleCollectionRef = collection(db, 'articles');
  
    useEffect(() => {
        if(content == '') {
            console.log('vazio')
        } else {
            addDoc(articleCollectionRef, {
                content: content
            });
        }
    }, [content]);
  
    const onClickHandler = () => {
      setContent(editorRef.current.getContent());
    };

    const testeoie = (e) => {
      setPreview(e.target.getContent())
    }
  
    return (
      <>
      <CreateForm>

          <form>
            <h1>Crie o artigo</h1>
            <label>Título</label>
            <input type="text"/>
            <label>Sinopse</label>
            <textarea></textarea>
            <label>Image(Apenas URL)</label>
            <input type="text"/>

            <Editor 
            onInit={(evt, editor) => (editorRef.current = editor)} 
            initialValue="Escreva qualquer coisa"
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
            onChange={testeoie}
            />

            <button 
            type="submit" 
            onClick={onClickHandler}>
            Enviar
          </button>

          </form>

          <div>
            { ReactHtmlParser(preview)}
          </div> 
      </CreateForm>
      </>
    );
  }

