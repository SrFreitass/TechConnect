import { db } from "../../services/firebaseconfig";
import {
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
  doc,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import {
  CloudArrowDown,
  TrashSimple,
  NotePencil,
  Bookmarks,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NewsStyled, ButtonsContainer } from "../ArticleFeed/style";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../Loader";
import { SectionAdminStyled } from "./style";
import DOMPurify from "dompurify";
import { ButtonDefault } from "../ArticleComposer/style";
import { Search } from "../Header/Search";
import { Articles } from "../common/Articles";

export function SectionAdmin() {
  const [newsEdit, setNewsEdit] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [search, setSearch] = useState("");
  const [selectFilter, setSelectFilter] = useState("");
  const [lastVisible, setLastVisible] = useState();
  const userCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getData = async () => {
      const q = query(userCollectionRef, orderBy("date", "desc"), limit(5));
      const data = await getDocs(q);
      setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLastVisible(data.docs[data.docs.length - 1]);
    };
    getData();
  }, []);

  useEffect(() => {
    const getDataFilter = async () => {
      if (searchFilter) {
        const q = query(userCollectionRef, where("title", ">=", searchFilter));
        const data = await getDocs(q);
        if (data.docs.length == 0) {
          toast.error("Nenhum artigo encontrado");
          const data = await getDocs(userCollectionRef);
          setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          return;
        }
        const dataFilterd = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        toast.success("Artigos encontrados");
        setLastVisible(data.docs[data.docs.length - 1]);
        setNewsEdit(dataFilterd);
      }
    };
    getDataFilter();
  }, [searchFilter]);

  const handleNextArticles = async () => {
    if (selectFilter) {
      const q = query(
        userCollectionRef,
        where("category", "==", selectFilter),
        orderBy("date", "desc"),
        startAfter(lastVisible),
        limit(5)
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNewsEdit((lastData) => [...lastData, ...data]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      return;
    }

    const q = query(
      userCollectionRef,
      orderBy("date", "desc"),
      startAfter(lastVisible),
      limit(5)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNewsEdit((lastData) => [...lastData, ...data]);
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
  };

  const handleDeleteArticle = async (id) => {
    const articleDoc = doc(db, "articles", id);
    let indexOf = null;

    try {
      await deleteDoc(articleDoc);

      newsEdit.find((item, index) => {
        item.id == id ? (indexOf = index) : "";
      });

      const data = newsEdit;
      data.splice(indexOf, 1);
      setNewsEdit([...data]);
      toast.success("Artigo excluído com sucesso");
    } catch (e) {
      console.error(e);
      toast.error("Houve algum erro na exclusão");
    }
  };

  const handleFilterArticle = async (e) => {
    const valueFilter = e.target.value;
    console.log(e.target.value);

    if (valueFilter == "") {
      const q = query(userCollectionRef, orderBy("date", "desc"), limit(5));
      const data = await getDocs(q);
      setNewsEdit(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLastVisible(data.docs[data.docs.length - 1]);
      setSelectFilter("");
      return;
    }

    const q = query(
      userCollectionRef,
      valueFilter == "emphasis"
        ? where("emphasis", "==", true)
        : where("category", "==", valueFilter)
    );
    const data = await getDocs(q);

    if (data.docs.length == 0) {
      toast.error("Não há artigos dessa categoria");
      setSelectFilter("");
      return;
    }

    const dataFilterd = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setNewsEdit(dataFilterd);
    setSelectFilter(valueFilter);
  };

  return (
    <SectionAdminStyled>
      <Toaster position="bottom-left" />
      <h2>Gerenciamento de artigos</h2>
      <br />
      <div>
        <Search
          adminFilter={{ setSearchFilter, searchFilter }}
          searchProps={{ search, setSearch }}
        />

        <select onChange={handleFilterArticle} value={selectFilter}>
          <option value="">Categoria</option>
          <option value="emphasis">Destaques</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="inovação">Inovação</option>
          <option value="computação">Computação</option>
          <option value="empreendendorismo">Empreendendorismo</option>
          <option value="jogos">Jogos</option>
        </select>
      </div>
      <Articles
        articlesList={newsEdit}
        handleNextArticles={handleNextArticles}
        asidePanel={false}
        management={{
          isPageAdmin: true,
          handleFilterArticle,
          handleDeleteArticle,
        }}
      />
    </SectionAdminStyled>
  );
}
