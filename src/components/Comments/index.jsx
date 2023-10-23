import { useState, useEffect, useRef } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import { auth, db } from "../../services/firebaseconfig";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
  serverTimestamp,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import {
  ArticleStyled,
  MainStyled,
  ArticleContainerStyled,
  CommentContainer,
} from "./../ArticleBody/style";
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleComposer/style";
import toast, { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { Pen, TrashSimple, PaperPlaneRight } from "@phosphor-icons/react";
import { ContainerComments, Nocomments } from "./style";
import { Link } from "react-router-dom";
import { useAdminVerify } from "../../hooks/useAdminVerify";
import { useVerifyEmail } from "../Auth/hook/useVerifyEmail";

export function Comments() {
  const [comments, setComments] = useState([]);
  const [eventHandlerComment, setEventHandlerComment] = useState(false);
  const [lastVisible, setLastVisible] = useState("");
  const [userID, setUserID] = useState("");
  const [displayName, setDisplayName] = useState("");
  const inputRef = useRef();
  const commentRef = useRef();
  const elementObserver = useRef(null);
  const token = useAdminVerify();
  const { titleID } = useParams();
  const [clicksPersMin, setClicksPersMin] = useState(0);
  const [count, setCount] = useState(0);
  const { status } = useVerifyEmail();
  console.log("renderizouX");

  const FetchComments = async () => {
    const q = query(
      collection(db, `/articles/${titleID}/comments`),
      orderBy("date", "desc"),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      const doc = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setComments(doc);
      return;
    }

    setComments([]);
  };

  useEffect(() => {
    FetchComments();
  }, [titleID]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
        setUserID(user.uid);
      }
    });

    console.log(elementObserver.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCount((state) => state + 1);
      }
    });

    observer.observe(elementObserver.current);

    return () => observer.disconnect();
  }, [userID]);

  useEffect(() => {
    FetchComments();
  }, [eventHandlerComment]);

  useEffect(() => {
    count > 1 && handleNextComments();
  }, [count]);

  const commentsCollectionRef = collection(db, `/articles/${titleID}/comments`);

  const handleComment = async () => {
    if (inputRef.current.value == false) {
      toast.error("Preencha os espaços em brancos");
      return;
    }

    if (clicksPersMin < 3) {
      const date = new Date();
      const valueComment = inputRef.current.value;
      setClicksPersMin(clicksPersMin + 1);
      toast.loading("Publicando comentário...");
      await addDoc(commentsCollectionRef, {
        valueComment,
        displayName,
        userID,
        date: serverTimestamp(),
      });
      toast.success("Comentário publicado");
      setEventHandlerComment(!eventHandlerComment);
      return;
    }

    setTimeout(() => {
      setClicksPersMin(0);
    }, 60000);

    toast.error("Sua ações estão sendo limitadas.");
  };

  const handleDelComment = async (id) => {
    const commentDoc = doc(db, `/articles/${titleID}/comments`, id);

    try {
      toast.loading("Excluindo comentario");
      await deleteDoc(commentDoc);
      setEventHandlerComment(!eventHandlerComment);
      toast.success("Comentario excluido");
    } catch (err) {
      console.log(err.message);
      toast.error("Ocorreu algum problema");
    }
  };

  const handleNextComments = async () => {
    const q = query(
      collection(db, `/articles/${titleID}/comments`),
      orderBy("date", "desc"),
      startAfter(lastVisible),
      limit(10)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      const doc = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setComments((state) => [...state, ...doc]);
    }
  };

  if (auth.currentUser) {
    return (
      <>
        <ContainerComments>
          <span />
          <br />
          <h3>Comentários</h3>
          <section>
            {status == "emailVerified" ? (
              <>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="O que deseja comentar?"
                  ref={inputRef}
                />
                <ButtonDefault onClick={handleComment}>
                  <PaperPlaneRight size="28" />
                </ButtonDefault>
              </>
            ) : (
              <Link to="../auth/register">
                Verifique seu e-mail para comentar
              </Link>
            )}
          </section>
          {comments.map((comment, index) => {
            return (
              <CommentContainer key={index}>
                <div>
                  <h4>{comment.displayName}</h4>
                  <p>{comment.valueComment}</p>
                </div>
                {(comment.userID == userID && (
                  <TrashSimple
                    onClick={() => handleDelComment(comment.id)}
                    size={24}
                  />
                )) ||
                  (token == "admin" && (
                    <TrashSimple
                      onClick={() => handleDelComment(comment.id)}
                      size={24}
                    />
                  ))}
              </CommentContainer>
            );
          })}
          <div ref={elementObserver}></div>
        </ContainerComments>
      </>
    );
  }

  return (
    <ContainerComments>
      <br />
      <h3>Comentários</h3>
      <Nocomments>
        <br />
        <span>
          Faça{" "}
          <Link to="../auth/login">
            <u>login</u>{" "}
          </Link>
          para ter acesso aos comentários
        </span>
        <br ref={elementObserver} />
      </Nocomments>
      <br />
    </ContainerComments>
  );
}
