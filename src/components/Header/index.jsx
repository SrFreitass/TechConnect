import { UserCircle, UserPlus, X } from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import { MobileMenu } from "./MobileMenu";
import { Search } from "./Search";
import {
  DropDown,
  HeaderContainer,
  HeaderContainerLoader,
  Logo,
} from "./style";

export function Header({ isIntroductionPage }) {
  const [menu, setMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const { currentUser } = auth;

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      location.reload();
      return;
    } catch {
      console.log("Algo deu errado.");
    }
  };

  return (
    <HeaderContainerLoader>
      <span className="loader"></span>
      <HeaderContainer
        menu={menu}
        setMenu={setMenu}
        search={search}
        isIntroductionPage={isIntroductionPage}
      >
        <Logo>
          {/* Full Logo */}
          <Link to="../home">
            <span>&#60;techconnect/&#62;</span>
          </Link>

          {/* Min Logo */}
          <Link to="../home">
            <span>&#60;/&#62;</span>
          </Link>
        </Logo>

        <nav>
          <ul>
            <li>
              <Link to="../home">Artigos</Link>
            </li>
            <li>
              <Link to="../">Sobre nós</Link>
            </li>
            <li>
              <Link to="../home/fast/fast">Fast</Link>
            </li>
            <Search
              searchProps={{ search, setSearch }}
              menuProps={{ menu, setMenu }}
            />
          </ul>

          <DropDown>
            <li onClick={handleUserMenu}>
              <UserCircle size={32} />
            </li>
            {userMenu ? (
              <div>
                {currentUser ? (
                  <button onClick={handleSignOut}>
                    <X size={24} color="#C291F4" /> Sair
                  </button>
                ) : (
                  <button>
                    {" "}
                    <UserPlus size={24} color="#C291F4" />{" "}
                    <Link to="../auth/login"> Entrar </Link>
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </DropDown>

          {/*---------------------Menu Mobile--------------------- */}

          <MobileMenu
            menuProps={{ menu, setMenu }}
            searchProps={{ search, setSearch }}
            currentUser={currentUser}
            handleSignOut={handleSignOut}
          />
        </nav>
      </HeaderContainer>
    </HeaderContainerLoader>
  );
}
