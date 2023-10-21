import { db } from "../../services/firebaseconfig";
import { useEffect, useState, useRef } from "react";
import {
  getDocs,
  collection,
  where,
  query,
  orderBy,
  limit,
  startAfter,
  startAt,
} from "firebase/firestore";
import { Articles } from "../common/Articles";

export function News() {
  const [news, setNews] = useState([]);
  const userCollectionRef = collection(db, "articles");
  const [lastVisible, setLastVisible] = useState("");
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const getData = async () => {
      if (window.innerWidth <= 800) {
        const q = query(
          userCollectionRef,
          where("emphasis", "==", false),
          orderBy("date", "desc"),
          limit(5)
        );

        const qEmphasis = query(
          userCollectionRef,
          where("emphasis", "==", true),
          orderBy("date", "desc"),
          limit(5)
        );

        const querySnapshotEmphasis = await getDocs(qEmphasis);
        const querySnapshot = await getDocs(q);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);

        const dataEmphasis = querySnapshotEmphasis.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews([...dataEmphasis, ...data]);
        console.log(data, dataEmphasis);

        return;
      }

      const q = query(
        userCollectionRef,
        where("emphasis", "==", false),
        orderBy("date", "desc"),
        limit(5)
      );

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setNews(data);
    };
    getData();
  }, []);

  const handleNextArticles = async (e) => {
    try {
      console.log(lastVisible);
      const next = await query(
        userCollectionRef,
        where("emphasis", "==", false),
        orderBy("date", "desc"),
        startAfter(lastVisible),
        limit(5)
      );
      const querySnapshot = await getDocs(next);

      console.log(querySnapshot);
      const nextData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("teste");

      if (querySnapshot.docs.length < 1) {
        console.log("tem nada não meu fi");
        setShowButton(false);
        return;
      }

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setNews((state) => [...state, ...nextData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Articles articlesList={news} handleNextArticles={handleNextArticles} />
  );
}
