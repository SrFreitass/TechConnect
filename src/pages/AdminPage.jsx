import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../Styles/Wrapper";
import { ControlsAdmin } from "../components/AdminDashboard";
import { SectionAdmin } from "../components/ArticlesManagement";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { SectionFast } from "../components/SectionFast";
import { GridSection } from "../containers/GridSection/style";
import { useAdminVerify } from "../hooks/useAdminVerify";
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
