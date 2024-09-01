import {
  FacebookLogo,
  InstagramLogo,
  NotePencil,
  Pause,
  PencilSimpleLine,
  Play,
  ShareFat,
  SignOut,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
  TelegramLogo,
  TrashSimple,
  TwitterLogo,
  WhatsappLogo,
  X
} from "@phosphor-icons/react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  query,
  updateDoc,
  where
} from "firebase/firestore";
import he from "he";
import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { ButtonDefault } from "../ArticleComposer/style";
import {
  MobileVideo,
  SectionFastStyle,
  SectionFastStyled,
  ShareButtons,
} from "./style";

export function SectionFast({ isAdmin }) {
  const videosRef = useRef(null);
  const popup = useRef(null);
  const element = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(true);
  const [fast, setFast] = useState([]);
  const { titleID } = useParams("");
  const [fastEdit, setFastEdit] = useState(false);
  
  console.log("RENDERIZO");

  console.log(titleID);

  useEffect(() => {
    document.querySelector("dialog").style.display = "none";

    const FetchFast = async () => {
      const q = await query(
        collection(db, "fast"),
        where("title", "==", titleID ? titleID : ""),
        limit(1)
      );

      const outherQ = await query(
        collection(db, "fast"),
        where("title", "!=", titleID ? titleID : "")
      );

      const querySnapshot = {
        maindoc: await getDocs(q),
        docs: await getDocs(outherQ),
      };

      const data = {
        maindoc: querySnapshot.maindoc.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
        docs: querySnapshot.docs.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      };

      setLastVisible(
        querySnapshot.docs.docs[querySnapshot.docs.docs.length - 1]
      );
      setFast([...data.maindoc, ...data.docs]);
    };

    FetchFast();
    toast("Dê o primeiro play", { icon: "🎬" });
  }, []);

  const videoState = async (e) => {
    const elementVideo =
      e.target.parentElement.parentElement.querySelector("video");

    if (elementVideo) {
      elementVideo.paused ? elementVideo.play() : elementVideo.pause();
      setPlaying(!playing);
    }
  };

  const muteVideo = (e) => {
    const elementVideo =
      e.target.parentElement.parentElement.querySelector("video");
    if (elementVideo) {
      elementVideo.muted
        ? (elementVideo.muted = false)
        : (elementVideo.muted = true);
      setSound(!sound);
    }
  };

  const nextVideo = async (e) => {
    const videos = e.target.querySelectorAll("video");
    const video = e.target.querySelector("video");
    const index =
      document.querySelector("section").scrollTop /
      (video.offsetHeight +
        Number(
          getComputedStyle(document.querySelector("section")).gap.replace(
            "px",
            ""
          )
        ));

    videos[Math.floor(index)].play().then(() => {
      sound
        ? (videos[Math.floor(index)].muted = false)
        : (videos[Math.floor(index)].muted = true);
      setPlaying(false);
      videos.forEach((video, indexVideo) => {
        indexVideo != Math.floor(index)
          ? (video.pause(), (video.currentTime = 0))
          : "";
      });
    });
  };

  const handleDelFast = async (id) => {
    let indexOf;
    const fastUpdate = fast;

    await deleteDoc(doc(db, "fast", id));

    fastUpdate.find((item, index) => {
      item.id == id ? (indexOf = index) : "";
    });

    fastUpdate.splice(indexOf, 1);

    console.log(fastUpdate);

    setFast([...fastUpdate]);
  };

  const handleEditFast = async () => {
    setFastEdit(true);
  };

  const handleEditTitle = async (e, id) => {
    console.log(e.target.innerText);

    await updateDoc(doc(db, "fast", id), {
      title: e.target.innerText,
    });
    toast.success("Conteúdo alterado");
    setFastEdit(false);
  };

  const shareFast = (title) => {
    document.querySelector("dialog").style.display = "flex";

    popup.current.showModal();
    console.log(he.encode(title));
    console.log(navigator);
    popup.current.querySelector("input").value = `${
      window.location.origin
    }/home/fast/${title.replace(/\s/g, "%20")}`;
  };

  const copyboardFast = async () => {
    const urlShare = popup.current.querySelector("input").value;
    await navigator.clipboard.writeText(urlShare);
    toast.success("Link copiado");
  };

  const closeDialog = () => {
    popup.current.close();
    document.querySelector("dialog").style.display = "none";
  };

  return (
    <SectionFastStyle isAdmin={isAdmin}>
      {isAdmin ? (
        <>
          <h2>
            Gerenciamento de <span>#fast</span>
          </h2>
          <br />
        </>
      ) : (
        ""
      )}

      <SectionFastStyled onScroll={nextVideo} ref={videosRef}>
        <Toaster
          position="bottom-left"
          reverseOrder={false}
          toastOptions={{
            loading: {
              duration: 1000,
            },
          }}
        />

        <dialog ref={popup}>
          <div>
            <header>
              <h3>Compartilhar</h3>
              <X onClick={closeDialog} size={24} color="white" />
            </header>

            <ShareAside title={title} direction="row" />
            <div>
              <input type="text" readOnly />
              <ButtonDefault onClick={copyboardFast}>Copiar</ButtonDefault>
            </div>
          </div>
        </dialog>

        {fast.map((fast, index) => {
          return (
            <>
              <MobileVideo key={index}>
                <div>
                  <video src={fast.videoURL} loop onClick={videoState}></video>
                  <footer>
                    <h3
                      onBlur={(e) => handleEditTitle(e, fast.id)}
                      contentEditable={fastEdit}
                    >
                      {fast.title} {isAdmin ? "" : <span>#fast🎬</span>}{" "}
                    </h3>
                    <p>De: {fast.author}</p>
                  </footer>
                </div>

                <div>
                  {isAdmin ? (
                    <>
                      <TrashSimple
                        onClick={() => handleDelFast(fast.id)}
                        size={48}
                        color="#8A8AE0"
                      />
                      {fastEdit ? (
                        <PencilSimpleLine size={48} color="#8A8AE0" />
                      ) : (
                        <NotePencil
                          onClick={handleEditFast}
                          size={48}
                          color="#8A8AE0"
                        />
                      )}
                      {playing ? (
                        <Play onClick={videoState} color="#8A8AE0" size="48" />
                      ) : (
                        <Pause onClick={videoState} color="#8A8AE0" size="48" />
                      )}
                      {sound ? (
                        <SpeakerSimpleHigh
                          onClick={muteVideo}
                          color="#8A8AE0"
                          size="48"
                        />
                      ) : (
                        <SpeakerSimpleSlash
                          onClick={muteVideo}
                          color="#8A8AE0"
                          size="48"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {playing ? (
                        <Play onClick={videoState} color="#8A8AE0" size="48" />
                      ) : (
                        <Pause onClick={videoState} color="#8A8AE0" size="48" />
                      )}
                      {sound ? (
                        <SpeakerSimpleHigh
                          onClick={muteVideo}
                          color="#8A8AE0"
                          size="48"
                        />
                      ) : (
                        <SpeakerSimpleSlash
                          onClick={muteVideo}
                          color="#8A8AE0"
                          size="48"
                        />
                      )}
                      <ShareFat
                        onClick={() => shareFast(fast.title)}
                        size={48}
                        color="#8A8AE0"
                      />
                      <Link to="../home">
                        <SignOut size={48} color="#8A8AE0" title="Voltar" />
                      </Link>
                    </>
                  )}
                </div>
              </MobileVideo>
            </>
          );
        })}
        <br />
        <br ref={element} />
      </SectionFastStyled>
    </SectionFastStyle>
  );
}

export const ShareAside = ({ setShare, share, title, direction }) => {
  const { titleID } = useParams();
  console.log(title, titleID);
  const handleShareButtons = () => {
    setShare(!share);
  };

  const copyLink = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(
      `https://techconnectdev.vercel.app/home/article/${titleID}`
    );
    toast.success("Link copiado com sucesso");
  };

  return (
    <ShareButtons direction={direction}>
      {/* <button onClick={handleShareButtons}><X size="32" color="#C291F4" /></button> */}
      <a
        href={`https://www.facebook.com/sharer.php?u=https://techconnectdev.vercel.app/home/article/${titleID}`}
        target="__blank"
      >
        <FacebookLogo size={28} />
      </a>
      <a href="" onClick={copyLink}>
        <InstagramLogo size={28} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=https://techconnectdev.vercel.app/home/article/${titleID}&text=${title}`}
        target="__blank"
      >
        <TwitterLogo size={28} />
      </a>
      <a
        href={`whatsapp://send?text=${title}+https://techconnectdev.vercel.app/home/article/${titleID}`}
        target="__blank"
      >
        {" "}
        <WhatsappLogo size={28} />{" "}
      </a>
      <a
        href={`https://telegram.me/share/url?url=https://techconnectdev.vercel.app/home/article/${titleID}&text=${title}`}
        target="__blank"
      >
        <TelegramLogo size={28} />
      </a>
    </ShareButtons>
  );
};
