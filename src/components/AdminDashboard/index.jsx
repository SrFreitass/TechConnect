import { Files, ChartBar, Chat, Newspaper, Video } from "@phosphor-icons/react";
import { IconsContainer } from "../ArticleComposer/style";
import { AsideStyled } from "./style";
import { Link } from "react-router-dom";
import { Theme } from "../../Styles/Theme";

export function ControlsAdmin({sectionState}) {


    return (
        <AsideStyled sectionState={sectionState}>
            <button>
                <Link to="./create">+ NOVO {sectionState.section == "article" ? "ARTIGO" : "FAST"}</Link>
            </button>


            <button>
                <Files size={32} color={sectionState.section == "article" ? Theme.colors.purple500 : Theme.colors.secundary} />
                <Link onClick={() => sectionState.setSection('article')}><p>Artigos</p></Link>
            </button>

            <button>
                <Video size={32} color={sectionState.section == "fast" ? Theme.colors.purple500 : Theme.colors.secundary}  />
                <Link onClick={() => sectionState.setSection('fast')}><p>Fast</p></Link>
            </button>

            <button>
                <ChartBar size={32} color={Theme.colors.secundary} />
                <Link><p>Análise</p></Link>
            </button>
            <button>
                <Chat size={32} color={Theme.colors.secundary} />
                <Link><p>Comentarios</p></Link>
            </button>
            <button>
                <Newspaper size={32} color={Theme.colors.secundary} />
                <Link><p>Newslatter</p></Link>
            </button>
        </AsideStyled>
    )
}