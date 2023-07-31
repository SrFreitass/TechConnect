import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState, useEffect } from 'react'
import { db, storage } from '../../firebaseconfig'
import { addDoc, collection } from '@firebase/firestore'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { CreateForm, UploadContainer, IconsContainer, Btoaolegal, Oie } from './style'
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react";
import toast, { Toaster } from 'react-hot-toast';
import uploadIcon from '../../assets/images/upload.svg'

export function CreateTeste() {

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [author, setAuthor] = useState('')
  const [emphasis, setEmphasis] = useState(false)
  const [imageUpload, setImageUpload] = useState(null)
  const [imageURL, setImageURL] = useState('')


  const editorRef = useRef();
  const articleCollectionRef = collection(db, 'articles');

  const standardStructure =
    `<h1>Tit&uacute;lo.</h1>
<h2>Subtit&uacute;lo.</h2>
<p>Autor.</p>
<hr>
<p><img>Imagem principal ficar&aacute; aqui.</p>
<p>Conte&uacute;do...</p>`

  /* Este é um efeito que será acionado toda vez que o estado content for alterado. 
  Se o content estiver vazio, será exibida uma mensagem de log "vazio". Caso contrário, 
  os valores de content, title e summary são registrados no console e um novo documento 
  é adicionado à coleção "articles" no Firestore usando a função addDoc.*/




  useEffect(() => {
    const sendArticle = () => {
      if (content === '' || imageURL == '') {
        toast.error('Preencha todos os campos')
      } else {
        addDoc(articleCollectionRef, {
          title,
          summary,
          content,
          author,
          imageURL,
          emphasis,
        })
        toast.success('Artigo enviado com sucesso')
        setEmphasis(false)
      }
    }
    sendArticle()
  }, [content]);


  useEffect(() => {
    const uploadImage = async () => {
      if (imageUpload == null) {
        return
      }

      try {
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        await uploadBytes(imageRef, imageUpload)
        toast.loading('Upando a imagem')
        const url = await getDownloadURL(imageRef)
        setImageURL(url)
        toast.success('Imagem upada com sucesso')
        console.log(url)
      }
      catch (error) {
        toast.error('Erro ao upar a imagem')
      }
    }
    uploadImage()
  }, [imageUpload])


  const onClickHandler = async (e) => {
    e.preventDefault();
    const valueEditor = editorRef.current.getContent()
    console.log(valueEditor)
    console.log(standardStructure)
    if (valueEditor !== standardStructure) {

      try {
        setTitle(/<h1>(.*?)<\/h1>/.exec(valueEditor)[1]);
        setSummary(/<h2>(.*?)<\/h2>/.exec(valueEditor)[1]);
        setAuthor(/<p>(.*?)<\/p>/.exec(valueEditor)[1]);
        setContent(valueEditor);

      } catch (error) {
        toast.error('Revise o conteúdo do artigo')
      }
    } else {
      toast.error('Revise o conteúdo do artigo')
    }

  }

  const onClickHandlerDel = (e) => {
    e.preventDefault();
    setImageURL('')
    setImageUpload(null)
    toast('Você excluiu a imagem!', {
      icon: '🗑️',
    });
  }



  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          loading: {
            duration: 1000,
          },
        }}
      />
      <h1 style={{ color: "white" }}>Criação de Artigo</h1>
      <CreateForm>
        <form>

          <div>

            <UploadContainer>
              <CloudArrowDown size={50} /> <input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => { setImageUpload(e.target.files[0]) }} />
              <span>Select Files</span>
            </UploadContainer>

            <IconsContainer>
              <button onClick={onClickHandlerDel}> <TrashSimple size={24} color="#4D4DB5" /> </button>
              <p>{imageUpload && imageUpload.name}</p>
            </IconsContainer>

            <IconsContainer>
              <NotePencil size={24} color="#4D4DB5" />
              <p>Draft</p>
            </IconsContainer>


            <IconsContainer>
              <Bookmarks size={24} color="#4D4DB5" />
              <label htmlFor="">É um artigo de destaque?</label>
              <input type="checkbox" checked={emphasis} name="" onChange={() => setEmphasis(!emphasis)} />
            </IconsContainer>

            <Oie>
              <Btoaolegal>Voltar</Btoaolegal>
              <Btoaolegal onClick={onClickHandler}>Enviar</Btoaolegal>
            </Oie>

          </div>

          <Editor
            initialValue={standardStructure}
            onInit={(evt, editor) => (editorRef.current = editor)}
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
          />

        </form>
      </CreateForm>
    </>
  );
}