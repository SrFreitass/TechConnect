import { Editor } from "@tinymce/tinymce-react";
import { StyleArticleCreationForm, UploadContainer, IconsContainer, ButtonDefault, ButtonsContainer } from './style'
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react";
import toast, { Toaster } from 'react-hot-toast';
import { useArticleCreate } from "./hook/UseArticleCreate";
import { Link } from "react-router-dom";


export function ArticleCreationForm() {

    const {
        emphasis,
        setEmphasis,
        imageUpload,
        setImageUpload,
        editorRef,
        standardStructure,
        handleFormSubmit,
        handleImageDelete,
    } = useArticleCreate();

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
            <StyleArticleCreationForm>
                <form>
                    <div>

                        <UploadContainer>
                            <CloudArrowDown size={50} /> <input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => setImageUpload(e.target.files[0])} />
                            <span>Selecione arquivos</span>
                        </UploadContainer>

                        <IconsContainer>
                            <button onClick={handleImageDelete}> <TrashSimple size={24} color="#4D4DB5" /> </button>
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

                        <ButtonsContainer>
                            <ButtonDefault onClick={(e) => e.preventDefault()}><Link to="../admin">Voltar</Link></ButtonDefault>
                            <ButtonDefault onClick={handleFormSubmit}>Enviar</ButtonDefault>
                        </ButtonsContainer>

                    </div>

                    <Editor
                        initialValue={standardStructure}
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
                    />
                </form>
            </StyleArticleCreationForm>
        </>
    );
}
