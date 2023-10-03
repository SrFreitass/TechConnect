import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { SectionAdmin } from "../components/ArticlesManagement"
import { Loader } from "../components/Loader";
import { Login } from "../components/Login";
import { ControlsAdmin } from "../components/AdminDashboard";
import { SectionGrid } from "../containers/SectionGrid/style";
import { useAdminVerify } from "../hooks/useAdminVerify";
import { auth } from "../services/firebaseconfig";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { SectionFast } from "../components/SectionFast";
import { useState } from "react";
export function AdminPanel() {

  const token = useAdminVerify()
  const [section, setSection] = useState('article')
  const navigate = useNavigate()


  if (token == 'admin') {
    return (
      <Wrapper>
        <Header />
        <SectionGrid oneGrid='0.5fr' twoGrid='3fr' >
          <ControlsAdmin sectionState={{section, setSection}} />
          {section == "fast" ? <SectionFast isAdmin={true}/> : <SectionAdmin />  }
        </SectionGrid>
      </Wrapper>
    )
  } else if (token == 'error') {
    return navigate('./404')
  } else {
    return (
      <Wrapper>
        <Header />
        <Loader />
      </Wrapper>
    )
  }
}
