import { Files, ChartBar, Chat, Newspaper } from "@phosphor-icons/react";
import { IconsContainer } from "../ArticleComposer/style";
import { AsideStyled } from "./style";
import { Link } from "react-router-dom";

export function ControlsAdmin() {
    return (
        <AsideStyled>
            <button><Link to="./create">+ NOVO ARTIGO</Link></button>
            <button>
                <Files size={32} color="#8A8AE0" />
                <p>Artigos</p>
            </button>
            <button>
                <ChartBar size={32} color="#757575" />
                <p>Análise</p>
            </button>
            <button>
                <Chat size={32} color="#757575" />
                <p>Comentarios</p>
            </button>
            <button>
                <Newspaper size={32} color="#757575" />
                <p>Newslatter</p>
            </button>
        </AsideStyled>
    )
}