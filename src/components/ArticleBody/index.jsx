import DOMPurify from "dompurify";
import {
  doc,
  getDoc
} from "firebase/firestore";
import he from "he";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { Comments } from "../Comments";
import { Recomend } from "../Recomend";
import { ShareAside } from "../SectionFast";
import {
  ArticleContainerStyled
} from "./style";

export function ArticleBody() {
  const [content, setContent] = useState({});
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const contentRef = useRef();
  const { titleID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = doc(db, "articles", titleID);
      const querySnapshot = await getDoc(q);

      if (querySnapshot.exists()) {
        setContent(querySnapshot.data());
        setImage(querySnapshot.data().imageURL);
        setTitle(he.decode(querySnapshot.data().title));
        document.title = he.decode(querySnapshot.data().title);
      }
    };

    fetchData();
  }, [titleID]);

  useEffect(() => {
    if (contentRef.current.querySelector("p")) {
      const author = contentRef.current.querySelector("p");
      const createImage = document.createElement("img");
      createImage.src = image;

      author.after(createImage);

      const date = new Date(content.date.seconds * 1000);
      author.after(``);

      author.innerText += ` ${date.toLocaleDateString(
        "pt-br"
      )} ás ${date.getHours()}h`;
    }
  }, [image]);

  return (
    <>
      <Toaster
        position="bottom-left"
        toastOptions={{
          loading: {
            duration: 1000,
          },
        }}
      />

      <ArticleContainerStyled>
        <ShareAside title={title} />
        <div>
          <h6>#{content.category}</h6>
          <div
            ref={contentRef}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content.content),
            }}
          />
          <br />
          <ShareAside title={title} />
          <Comments />
        </div>
      </ArticleContainerStyled>
      <Recomend category={content.category} title={content.title} />
    </>
  );
}
