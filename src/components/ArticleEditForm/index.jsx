
import { Link } from "react-router-dom";
import { CloudArrowDown, TrashSimple, NotePencil, Bookmarks } from "@phosphor-icons/react"
import { StyleArticleCreationForm, UploadContainer, IconsContainer, ButtonsContainer, ButtonDefault } from '../ArticleCreationForm/style'
import { Editor } from "@tinymce/tinymce-react";
import toast, { Toaster } from 'react-hot-toast';
import { useArticleEdit } from "../../hooks/useArticleEdit";

export function ArticleEditForm() {

    const {
        content,
        imageUpload,
        setImageUpload,
        SendArticleEdited,
        editorRef,
        emphasis,
        setEmphasis,

    } = useArticleEdit()

    return (
        <StyleArticleCreationForm>
            <Toaster position="bottom-left"
                toastOptions={{
                    loading: {
                        duration: 1000,
                    }
                }}
            />
            <form>
                <div>

                    <UploadContainer>
                        <CloudArrowDown size={50} />
                        <input type="file" accept=".png, .jpeg, .jpg" onChange={(e) => setImageUpload(e.target.files[0])} />
                        <span>Select Files</span>
                    </UploadContainer>

                    <IconsContainer>
                        <button> <TrashSimple size={24} color="#4D4DB5" /> </button>
                        <p>{imageUpload && imageUpload.name}</p>
                    </IconsContainer>

                    <IconsContainer>
                        <NotePencil size={24} color="#4D4DB5" />
                        <p>Postado</p>
                    </IconsContainer>


                    <IconsContainer>
                        <Bookmarks size={24} color="#4D4DB5" />
                        <label htmlFor="">É um artigo de destaque?</label>
                        <input type="checkbox" checked={emphasis} onChange={(e) => setEmphasis(!emphasis)} />
                    </IconsContainer>

                    <ButtonsContainer>
                        <ButtonDefault onClick={(e) => e.preventDefault()}><Link to="../admin">Voltar</Link></ButtonDefault>
                        <ButtonDefault onClick={SendArticleEdited}>Editar</ButtonDefault>
                    </ButtonsContainer>

                </div>

                <Editor
                    initialValue={content}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    apiKey="ielf67vff1t8b2j119x947k095i3mlsybvf1clcnrzdja5ws"
                />

            </form>
        </StyleArticleCreationForm>
    )
}
