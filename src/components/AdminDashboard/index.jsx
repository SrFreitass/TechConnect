import { Files, Video } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Theme } from "../../Styles/Theme";
import { ButtonDefault } from "../ArticleComposer/style";
import { AsideStyled } from "./style";

export function ControlsAdmin({ sectionState }) {
  return (
    <AsideStyled sectionState={sectionState}>
      <ButtonDefault>
        <Link
          to={sectionState.section == "article" ? "./create" : "./fast/create"}
        >
          + NOVO {sectionState.section == "article" ? "ARTIGO" : "FAST"}
        </Link>
      </ButtonDefault>

      <button>
        <Files
          size={32}
          color={
            sectionState.section == "article"
              ? Theme.colors.purple500
              : Theme.colors.secundary
          }
        />
        <Link onClick={() => sectionState.setSection("article")}>
          <p>Artigos</p>
        </Link>
      </button>

      <button>
        <Video
          size={32}
          color={
            sectionState.section == "fast"
              ? Theme.colors.purple500
              : Theme.colors.secundary
          }
        />
        <Link onClick={() => sectionState.setSection("fast")}>
          <p>Fast</p>
        </Link>
      </button>
      {/* 
      <button>
        <ChartBar size={32} color={Theme.colors.secundary} />
        <Link>
          <p>Análise</p>
        </Link>
      </button>
      <button>
        <Chat size={32} color={Theme.colors.secundary} />
        <Link>
          <p>Comentarios</p>
        </Link>
      </button>
      <button>
        <Newspaper size={32} color={Theme.colors.secundary} />
        <Link>
          <p>Newslatter</p>
        </Link>
      </button> */}
    </AsideStyled>
  );
}
