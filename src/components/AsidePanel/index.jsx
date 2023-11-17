import { Link } from "react-router-dom";
import { AsidePanel } from "../ArticleFeed/style";
import { ButtonDefault } from "../ArticleComposer/style";
import {
  CurrencyBtc,
  CurrencyDollar,
  CurrencyEur,
} from "@phosphor-icons/react";

import { useEffect, useState } from "react";

export function AsideHome() {
  const [exchangeRate, setExchangeRate] = useState();

  return (
    <AsidePanel>
      <div>
        <h3>Categorias</h3>
        <ul>
          <li>
            <Link to="../category/fast">#fast</Link>
          </li>
          <li>
            <Link to="../category/inovação">#inovação</Link>
          </li>
          <li>
            <Link to="../category/jogos">#jogos</Link>
          </li>
          <li>
            <Link to="../category/computação">#computação</Link>
          </li>
          <li>
            <Link to="../category/tecnologia">#tecnologia</Link>
          </li>
          <li>
            <Link to="../category/empreendendorismo">#empreendendorismo</Link>
          </li>
        </ul>
      </div>
    </AsidePanel>
  );
}
