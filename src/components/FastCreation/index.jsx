import { CloudArrowDown } from "@phosphor-icons/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Theme } from "../../Styles/Theme";
import { Wrapper } from "../../Styles/Wrapper";
import posterPreview from "../../assets/images/thumbcreatefast.png";
import { auth, db, storage } from "../../services/firebase";
import {
  ButtonDefault,
  UploadContainer
} from "../ArticleComposer/style";
import { ContainerInputForm } from "../Auth/Register/style";
import { Header } from "../Header";
import { MobileVideo } from "../SectionFast/style";
import { MainStyled } from "./style";

export function FastCreation() {
  const [videoUpload, setVideoUpload] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [title, setTitle] = useState("");

  const fastCollectionRef = collection(db, "fast");

  useEffect(() => {
    const uploadVideo = async () => {
      if (videoUpload == "") {
        return;
      }

      try {
        const storageRef = ref(storage, `videos/${videoUpload.name}`);
        toast.loading("Enviando a imagem");
        await uploadBytes(storageRef, videoUpload);
        const url = await getDownloadURL(storageRef);
        setVideoURL(url);
        toast.success("Imagem enviada com sucesso");
        console.log(`enviado ${url}`);
      } catch {
        console.log("error");
        toast.error("Ocorreu um erro ao enviar a imagem");
      }
    };

    uploadVideo();
  }, [videoUpload]);

  const handlePostFast = async (e) => {
    e.preventDefault();

    const titlePurify = title.replace(/[<>#"{}|\\\^[\]`]/g, "");

    if (videoURL && title) {
      if (title.length > 60) {
        toast.error("Máximo 60 caracteres");
        return;
      }

      await addDoc(fastCollectionRef, {
        title: titlePurify,
        author: auth?.currentUser?.displayName,
        videoURL,
        date: serverTimestamp(),
      });

      setTitle("");
      setVideoURL("");
      setVideoUpload("");

      toast.success("Postagem feita com sucesso");

      return;
    }
  };

  return (
    <Wrapper>
      <Toaster
        position="bottom-left"
        toastOptions={{
          loading: {
            duration: 1000,
          },
        }}
      />
      <Header />
      <MainStyled>
        <form>
          <h2 style={{ color: "white" }}>
            Crie seu{" "}
            <span style={{ color: `${Theme.colors.purple400}` }}>#fast 🎬</span>
          </h2>
          <UploadContainer>
            <CloudArrowDown size={50} />{" "}
            <input
              type="file"
              accept=".mp4"
              onChange={(e) => setVideoUpload(e.target.files[0])}
            />
            <span>Selecione arquivos</span>
          </UploadContainer>
          <ContainerInputForm>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Insira um título"
              value={title}
            />
          </ContainerInputForm>
          <div>
            <ButtonDefault>
              <Link to="../admin">Cancelar</Link>
            </ButtonDefault>

            {title ? (
              <ButtonDefault onClick={handlePostFast}>Publicar</ButtonDefault>
            ) : (
              ""
            )}
          </div>
        </form>
        <MobileVideo>
          <video src={videoURL} loop controls poster={posterPreview}></video>
        </MobileVideo>
      </MainStyled>
    </Wrapper>
  );
}
