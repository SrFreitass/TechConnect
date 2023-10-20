import { Editor } from "@tinymce/tinymce-react";
import {
  StyleArticleCreationForm,
  UploadContainer,
  IconsContainer,
  ButtonDefault,
  ButtonsContainer,
} from "./style";
import {
  CloudArrowDown,
  TrashSimple,
  NotePencil,
  Bookmarks,
  Tag,
} from "@phosphor-icons/react";
import toast, { Toaster } from "react-hot-toast";
import { useArticleCreate } from "./hook/UseArticleCreate";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function ArticleCreationForm() {
  const [visible, setVisible] = useState(false);

  const {
    emphasis,
    setEmphasis,
    imageUpload,
    setImageUpload,
    editorRef,
    standardStructure,
    handleFormSubmit,
    handleImageDelete,
    categoryRef,
  } = useArticleCreate();

  const onInitEditor = (evt, editor) => {
    document.querySelector(
      "iframe"
    ).contentWindow.document.body.style.backgroundColor = "#121212";
    editorRef.current = editor;
  };

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(document.querySelector(".tox-menu"));
  }, [visible]);

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
      <h2 style={{ color: "white" }}>Criação de Artigo</h2>
      <br />
      <StyleArticleCreationForm>
        <form>
          <div>
            <UploadContainer>
              <CloudArrowDown size={50} />{" "}
              <input
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setImageUpload(e.target.files[0])}
              />
              <span>Selecione arquivos</span>
            </UploadContainer>
            <IconsContainer>
              <button onClick={handleImageDelete}>
                {" "}
                <TrashSimple size={24} color="#8A8AE0" />{" "}
              </button>
              <p>{imageUpload && imageUpload.name}</p>
            </IconsContainer>

            <IconsContainer>
              <NotePencil size={24} color="#8A8AE0" />
              <p>Draft</p>
            </IconsContainer>

            <IconsContainer>
              <Bookmarks size={24} color="#8A8AE0" />
              <label htmlFor="">É um artigo de destaque?</label>
              <input
                type="checkbox"
                checked={emphasis}
                name=""
                onChange={() => setEmphasis(!emphasis)}
              />
            </IconsContainer>

            <IconsContainer>
              <Tag size={24} color="#8A8AE0" />
              <select for="category" id="tags" ref={categoryRef}>
                <option value="tecnologia">Tecnologia</option>
                <option value="empreendedorismo">Empreendedorismo</option>
                <option value="inovação">Inovação</option>
                <option value="computação">Computação</option>
                <option value="jogos">Jogos</option>
              </select>
            </IconsContainer>

            <ButtonsContainer>
              <ButtonDefault onClick={(e) => e.preventDefault()}>
                <Link to="../admin">Voltar</Link>
              </ButtonDefault>
              <ButtonDefault onClick={handleFormSubmit}>Enviar</ButtonDefault>
            </ButtonsContainer>
          </div>

          <Editor
            initialValue={standardStructure}
            onInit={(evt, editor) => onInitEditor(evt, editor)}
            init={{
              skin: "oxide-dark",
              content_css: "dark",
            }}
            apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
          />
        </form>
      </StyleArticleCreationForm>
    </>
  );
}
