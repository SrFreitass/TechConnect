import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { SectionAdmin } from "../components/SectionAdmin"
import { useParams } from "react-router-dom";
import { ArticleEditForm } from '../components/ArticleEditForm'
import { useState, useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader } from "../components/Loader";
import { Login } from "../components/Login";
import { ControlsAdmin } from "../components/ControlsAdmin";
import { SectionGrid } from "../components/SectionGrid/style";

export function AdminPanel() {
  const [token, setToken] = useState('')
  const [componentReady, setComponentReady] = useState('');

  useEffect(() => {
    console.log('renderizou')
    const q = query(collection(db, "admin"), where("uid", "==", localStorage.getItem("token")));
    const teste = (getDocs(q)).then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0].uid
    })
    teste.then((res) => {
      setToken(res)
    })
      .catch((error) => {
        setComponentReady('error')
      })
  }, [])



  if (localStorage.getItem("token") === token) {
    return (
      <Wrapper>
        <Header />
        <SectionGrid >
          <ControlsAdmin />
          <SectionAdmin />
        </SectionGrid>
      </Wrapper>
    )
  } else if (componentReady === 'error') {
    return (
      <Wrapper>
        <Header />
        <Login />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Header />
        <Loader />
      </Wrapper>
    )
  }
}
