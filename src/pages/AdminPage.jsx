import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { SectionAdmin } from "../components/ArticlesManagement";
import { Loader } from "../components/Loader";
import { Login } from "../components/Login";
import { ControlsAdmin } from "../components/AdminDashboard";
import { GridSection } from "../containers/GridSection/style";
import { useAdminVerify } from "../hooks/useAdminVerify";
import { auth } from "../services/firebaseconfig";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SectionFast } from "../components/SectionFast";
import { useState } from "react";
export function AdminPanel() {
  const token = useAdminVerify();
  const [section, setSection] = useState("article");
  const navigate = useNavigate();

  console.log("1");

  if (token === "admin") {
    return (
      <Wrapper>
        <Header />
        <GridSection oneGrid="0.5fr" twoGrid="3fr">
          <ControlsAdmin sectionState={{ section, setSection }} />
          {section == "fast" ? (
            <SectionFast isAdmin={true} />
          ) : (
            <SectionAdmin />
          )}
        </GridSection>
      </Wrapper>
    );
  }

  if (token === "error") {
    return navigate("./404");
  }

  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}
