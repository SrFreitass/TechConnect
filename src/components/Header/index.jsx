import { useState, useEffect, useRef } from "react";
import { HeaderContainer } from "./style";
import {
  Briefcase,
  CaretDown,
  CaretUp,
  DesktopTower,
  FacebookLogo,
  GameController,
  InstagramLogo,
  Lightbulb,
  List,
  Popcorn,
  TwitterLogo,
  UserCircle,
  UserPlus,
  Graph,
  FastForwardCircle,
  X,
} from "@phosphor-icons/react";
import { Search } from "./Search";
import { auth } from "../../services/firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { ButtonDefault } from "../ArticleComposer/style";

export function Header({ isIntroductionPage }) {
  const [menu, setMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [menuCategory, setMenuCategory] = useState(false);
  const popup = useRef();
  const { currentUser } = auth;

  const handleMenu = () => {
    setMenu(!menu);
    menu
      ? (document.documentElement.style.overflow = "auto")
      : (document.documentElement.style.overflow = "hidden");
    console.log(document.documentElement);
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

  const HandlemenuCategory = () => {
    setMenuCategory(!menuCategory);
  };

  return (
    <>
      <HeaderContainer
        menu={menu}
        setMenu={setMenu}
        search={search}
        isIntroductionPage={isIntroductionPage}
      >
        <span>&#60;techconnect/&#62;</span>
        <span>&#60;/&#62;</span>

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

          <div>
            {menu ? (
              <X size="32" color="#757575" onClick={handleMenu} />
            ) : (
              <List size="32" color="#757575" onClick={handleMenu} />
            )}
            <ul>
              <li>
                <Search
                  searchProps={{ search, setSearch }}
                  menuProps={{ menu, setMenu }}
                />
              </li>

              <li onClick={HandlemenuCategory}>
                <div>
                  Categorias
                  {menuCategory ? <CaretUp /> : <CaretDown />}
                </div>
                {menuCategory && (
                  <div>
                    <Link onClick={handleMenu} to="../category/inovação">
                      <Lightbulb />
                      Inovação
                    </Link>
                    <Link onClick={handleMenu} to="../category/tecnologia">
                      <Graph />
                      Tecnologia
                    </Link>
                    <Link onClick={handleMenu} to="../category/computação">
                      <DesktopTower />
                      Computação
                    </Link>
                    <Link
                      onClick={handleMenu}
                      to="../category/empreendendorismo"
                    >
                      <Briefcase />
                      Empreendedorismo
                    </Link>
                    <Link onClick={handleMenu} to="../category/jogos">
                      <GameController />
                      Jogos
                    </Link>
                    <Link onClick={handleMenu} to="../home/fast/fast">
                      <FastForwardCircle />
                      Fast
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="../home" onClick={handleMenu}>
                  Artigos
                </Link>
              </li>

              <li>
                <Link to="../">Sobre nós</Link>
              </li>
              {currentUser ? (
                <li onClick={handleSignOut}>
                  <X />
                  Sair da plataforma
                </li>
              ) : (
                <>
                  <li>
                    <Link to="../auth/login">Entrar</Link>
                  </li>
                  <li>
                    <Link to="../auth/register">Criar conta</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <ul>
            <li>
              <FacebookLogo size={32} />
            </li>
            <li>
              <InstagramLogo size={32} />
            </li>
            <li>
              <TwitterLogo size={32} />
            </li>
            <div>
              <li onClick={() => setUserMenu(!userMenu)}>
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
            </div>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}
