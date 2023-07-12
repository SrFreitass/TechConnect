import { useRef } from 'react'
import { Editor } from "@tinymce/tinymce-react";
import { FormStyled } from './style';

export function FormCreate() {

  const editorRef = useRef()

  const onClickHandler = () => {
    console.log(editorRef.current.getContent())
  }


  return (
    <>
    <h1 style={{color: 'white'}}>Crie o artigo</h1>
    <FormStyled>
      <Editor
        onInit={ (evt, editor ) => editorRef.current = editor}
      />

      <button type="button" onClick={onClickHandler}>Enviar</button>
    </FormStyled>
    </>
  );
}

