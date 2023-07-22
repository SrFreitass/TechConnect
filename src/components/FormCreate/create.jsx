import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from 'react'
import { db, storage } from '../../firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { CreateForm, UploadContainer } from './style'
import { CloudArrowDown, TrashSimple } from "@phosphor-icons/react";
import uploadIcon from '../../assets/images/upload.svg'

export function CreateTeste() {

    const [content, setContent] = useState('');
    const [ title, setTitle ] = useState('')
    const [ summary, setSummary ] = useState('')
    const [ author, setAuthor ] = useState('')
    const [ emphasis, setEmphasis ] = useState(false)
    const [ imageUpload, setImageUpload] = useState('')
    const [ imageURL, setImageURL] = useState('')


 
    const editorRef = useRef();
    const articleCollectionRef = collection(db, 'articles');
    

    /* Este é um efeito que será acionado toda vez que o estado content for alterado. 
    Se o content estiver vazio, será exibida uma mensagem de log "vazio". Caso contrário, 
    os valores de content, title e summary são registrados no console e um novo documento 
    é adicionado à coleção "articles" no Firestore usando a função addDoc.*/

    useEffect(() => {

      if(content == '' || imageURL == '') {
        console.log('vazio')
      } else {
        console.log(content)
        console.log(title)

        addDoc(articleCollectionRef, {
          title,
          summary,
          content,
          author,
          bannerURL: imageURL,
          emphasis,
        })
        console.log('sucesso')
        setEmphasis(false)
      }
    }, [content, imageURL]);
    
    

    const onClickHandler = (e) => {
      e.preventDefault();
      setContent(editorRef.current.getContent());
      setTitle(/<h1>(.*?)<\/h1>/.exec(editorRef.current.getContent())[1]);
      setSummary(/<h2>(.*?)<\/h2>/.exec(editorRef.current.getContent())[1]);
      setAuthor(/<p>(.*?)<\/p>/.exec(editorRef.current.getContent())[1]);
      
      if(imageUpload == null) return

      const imageRef = ref(storage, `images/${imageUpload.name}`);

      uploadBytes(imageRef, imageUpload)
      .then(() => {
        // Após o upload, pegar a URL da imagem
        getDownloadURL(imageRef)
          .then((url) => {
            // Agora você tem a URL da imagem
            console.log("Image URL:", url);
            setImageURL(url)
            // Aqui você pode fazer o que quiser com a URL da imagem, como salvá-la no Firestore junto com outros dados do artigo
          })
          .catch((error) => {
            // Tratar erros ao obter a URL da imagem
            console.error("Error getting download URL:", error);
          });
      })
      .catch((error) => {
        // Tratar erros no upload da imagem
        console.error("Error uploading image:", error);
      });
  };

    return (
      <>
      <h1 style={{color: "white"}}>Criação de Artigo</h1>
      <CreateForm>
          <form onSubmit={onClickHandler} >
          <div>
            <div>
              <label htmlFor="">É um artigo de destaque?</label>
              <input type="checkbox" checked={emphasis} name="" onChange={() => setEmphasis(!emphasis)} />
              </div>
              
            <UploadContainer>
              <CloudArrowDown size={50} /> <input type="file" name="" onChange={(e) => { setImageUpload(e.target.files[0]) }} />
              <span>Select Files</span>
              </UploadContainer>  
              <TrashSimple size={24} color="#7b9be1" />
              <h4>STATUS DO ARTIGO</h4>
              <p>Rascunho</p>
            </div>    
            
            <div>
              <Editor 
              init={{
                  skin: 'oxide-dark',
                  content_css: 'dark'
                }}
                
              onInit={(evt, editor) => (editorRef.current = editor)} 
              apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"  
              /> 

              <button type="submit">Enviar</button>
            </div>
          </form>


      </CreateForm>
      </>
    );
  }

