import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ArticleStyled, MainStyled } from "./style";
import DOMPurify from "dompurify";

export function BodyNews() {
  const [content, setContent] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "articles"), where("title", "==", title));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const doc = querySnapshot.docs[0];
        const articleData = { ...doc.data(), id: doc.id };
        setContent(articleData.content);
      } else {
        setContent(null);
      }
    };

    fetchData();
  }, [title]);

  if (!content) {
    return null;
  }

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </main>
  )
}
