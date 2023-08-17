import { Wrapper } from "../Styles/Wrapper";
import { Header } from "../components/Header";
import { SectionAdmin } from "../components/SectionAdmin"
import { Loader } from "../components/Loader";
import { Login } from "../components/Login";
import { ControlsAdmin } from "../components/ControlsAdmin";
import { SectionGrid } from "../components/SectionGrid/style";
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
