import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { SectionAdmin } from "../components/ArticlesManagement"
import { Loader } from "../components/Loader";
import { Login } from "../components/Login";
import { ControlsAdmin } from "../components/AdminDashboard";
import { SectionGrid } from "../containers/SectionGrid/style";
import { useAdminVerify } from "../hooks/useAdminVerify";

export function AdminPanel() {

  const token = useAdminVerify()

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
  } else if (token === 'error') {
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
