import {
  MobileVideo,
  SectionFastStyled,
  ShareButtons,
  SectionFastStyle,
} from "./style";
import {
  InstagramLogo,
  TelegramLogo,
  FacebookLogo,
  TwitterLogo,
  Pause,
  Play,
  SoundcloudLogo,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
  WhatsappLogo,
  Share,
  X,
  TrashSimple,
  NotePencil,
  PencilSimpleLine,
  ShareFat,
  SignOut,
} from "@phosphor-icons/react";
import { useRef, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Links } from "../Links";
import {
  getDocs,
  query,
  collection,
  where,
  deleteDoc,
  updateDoc,
  doc,
  limit,
} from "firebase/firestore";
import { db } from "../../services/firebaseconfig";
import toast, { Toaster } from "react-hot-toast";
import he from "he";
import { ButtonDefault } from "../ArticleComposer/style";
import { Search } from "../Header/Search";
import { set } from "react-hook-form";

export function SectionFast({ isAdmin }) {
  const videoRef = useRef(null);
  const popup = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(true);
  const [fast, setFast] = useState([]);
  const [share, setShare] = useState(false);
  const [visible, setVisible] = useState(false);
  const { titleID } = useParams("");
  const [fastEdit, setFastEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

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

      setFast([...data.maindoc, ...data.docs]);
      console.log(data.docs);
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

  const nextVideo = (e) => {
    const legal = e.target.querySelectorAll("video");
    const video = e.target.querySelector("video");
    console.log(document.querySelector("section").scrollTop);
    const index = Math.floor(
      document.querySelector("section").scrollTop /
        (video.offsetHeight +
          Number(
            getComputedStyle(document.querySelector("section")).gap.replace(
              "px",
              ""
            )
          ))
    );
    console.log(index);
    legal[index].play().then(() => {
      setPlaying(false);
      legal.forEach((video, indexVideo) => {
        indexVideo != index ? video.pause() : "";
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
    console.log(navigator);
    popup.current.querySelector(
      "input"
    ).value = `${window.location.origin}/home/fast/${title}`;
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

      <SectionFastStyled onScroll={nextVideo}>
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
                  <video
                    ref={videoRef}
                    src={fast.videoURL}
                    loop
                    onClick={videoState}
                  ></video>
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
