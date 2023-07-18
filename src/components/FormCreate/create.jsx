import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from 'react'
import { db } from '../../firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { CreateForm, StyledEditor } from './style'
import ReactHtmlParser from 'react-html-parser'

export function CreateTeste() {

    const [content, setContent] = useState('');
    const [preview, setPreview] = useState('');
    const [image, setImage] = useState('');
    const editorRef = useRef();
    const articleCollectionRef = collection(db, 'articles');
    const standardStructure = `
    <header>
      <h1>Titulo</h1>
      <h2>Sinopse</h2>
      <p>Feito pelo (Nome do autor), para techconnect</p>
      <time>00/00/0000</time>
    </header>
      <hr/>
      <p>Imagem de capa (Insira nessa posição).</p>
      <p>Conteúdo...</p>
    `
    const [titlecontent, setTittlecontent] = useState('')
    const [summarycontent, setSummaryContent] = useState('')
    const [autorcontent, setAutorContent] = useState('')

    
    const onClickHandlerContent = (e) => {
      e.preventDefault()
      setContent(editorRef.current.getContent())
      console.log(titlecontent, summarycontent, autorcontent)
    };
    
    useEffect(() => {

        if(content == '') {
            console.log('vazio')
        } else {
            addDoc(articleCollectionRef, {
              content: content
            });
        }
    }, [content]);
  

    return (
      <>
      <CreateForm>

          <form>
            <h1>Crie o artigo</h1>
            <label>Image(Apenas URL)</label>
            <input type="text" onChange={(e) => setImage(e.target.value)}/>

            <Editor 
            onInit={(evt, editor) => (editorRef.current = editor)} 
            initialValue={standardStructure}
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
            />
          
           

            <button 
            type="submit" 
            onClick={onClickHandlerContent}>
            Enviar
          </button>

          </form>

          <StyledEditor>
            { ReactHtmlParser(preview)}
          </StyledEditor> 
      </CreateForm> 
      </>
    );
  }

