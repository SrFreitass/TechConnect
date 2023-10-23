import {
  Briefcase,
  CaretDown,
  CaretUp,
  DesktopTower,
  FacebookLogo,
  GameController,
  Lightbulb,
  List,
  Popcorn,
  TwitterLogo,
  UserCircle,
  UserPlus,
  Graph,
  FastForwardCircle,
  X,
  VirtualReality,
} from "@phosphor-icons/react";
import { Search } from "../Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenuStyle } from "./style";

export function MobileMenu({ menuProps, searchProps, currentUser }) {
  const { menu, setMenu } = menuProps;
  const { search, setSearch } = searchProps;
  const [menuCategory, setMenuCategory] = useState(false);

  const HandlemenuCategory = () => {
    setMenuCategory(!menuCategory);
  };

  const handleMenu = () => {
    setMenu(!menu);
    menu
      ? (document.documentElement.style.overflow = "auto")
      : (document.documentElement.style.overflow = "hidden");
    console.log(document.documentElement);
  };

  return (
    <MobileMenuStyle menu={menu}>
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
              <Link onClick={handleMenu} to="../category/empreendendorismo">
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
              <Link onClick={handleMenu} to="../metaverso">
                <VirtualReality />
                Metaverso
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
              <Link to="../auth/login" onClick={handleMenu}>Entrar</Link>
            </li>
            <li>
              <Link to="../auth/register" onClick={handleMenu}>Criar conta</Link>
            </li>
          </>
        )}
      </ul>
    </MobileMenuStyle>
  );
}
