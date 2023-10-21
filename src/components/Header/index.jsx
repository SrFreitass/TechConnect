import { useState, useEffect, useRef } from "react";
import { HeaderContainer, Logo, DropDown } from "./style";
import { UserCircle, UserPlus, X } from "@phosphor-icons/react";
import { Search } from "./Search";
import { auth } from "../../services/firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { ButtonDefault } from "../ArticleComposer/style";
import { MobileMenu } from "./MobileMenu";

export function Header({ isIntroductionPage }) {
  const [menu, setMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const userMenuElement = useRef(null);
  const { currentUser } = auth;

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  const observerMenu = () => {
    setUserMenu && setUserMenu(false);
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
    <>
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
              <a href="#">Artigos</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Fast</a>
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
          />
        </nav>
      </HeaderContainer>
    </>
  );
}
