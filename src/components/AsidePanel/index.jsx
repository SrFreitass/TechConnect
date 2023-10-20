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

  useEffect(() => {
    const fetchApiExchangeRate = async () => {
      const response = await fetch(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
      );
      const data = await response.json();
      setExchangeRate(data);
    };

    fetchApiExchangeRate();
  }, []);

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
      <div>
        <h3>Metaverso</h3>
        <p>
          Conecte com os membros do techconnect em nosso{" "}
          <Link>
            <u>Metaverso</u>
          </Link>
          <ButtonDefault>CONECTAR</ButtonDefault>
        </p>
      </div>
      <div>
        <h3>Cotação atual</h3>
        <p>
          <CurrencyDollar size={32} />
          R$ {exchangeRate?.USDBRL?.ask.replace(".", ",")} - USD
        </p>
        <p>
          <CurrencyEur size="32" />
          R$ {exchangeRate?.EURBRL?.ask.replace(".", ",")} - EUR
        </p>
        <p>
          <CurrencyBtc size="32" />
          R$ {exchangeRate?.BTCBRL?.ask} - BTC
        </p>
      </div>
    </AsidePanel>
  );
}
