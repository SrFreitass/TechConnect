import { Section404 } from "./style";
import { ButtonStyled } from "../IntroSection/style";
import { Link } from "react-router-dom";
import { ButtonDefault } from "../ArticleComposer/style";
import { useEffect, useState, useRef } from "react";

export function NotFound() {
  const [scale, setScale] = useState(1);
  const [data, setData] = useState({});
  const ref404 = useRef(null);

  useEffect(() => {
    ref404.current ? (ref404.current.style.transform = `scale(${scale})`) : "";

    const error404 = async () => {
      if (scale <= 0.1) {
        const fetchApi = await fetch("https://dog.ceo/api/breeds/image/random");
        setData(await fetchApi.json());
      }
    };

    error404();
  }, [scale]);

  return (
    <>
      <Section404>
        {scale <= 0.1 ? (
          <>
            <h2>Esse cachorro não trabalha para o &#60;techconnect/&#62;</h2>
            <img src={data.message} />
          </>
        ) : (
          <h1 ref={ref404} onClick={() => setScale(scale - 0.1)}>
            404
          </h1>
        )}
        <p>Bem, acho que tentou entrar numa página que não existe!</p>
        <Link to="./home">Volte para o início.</Link>
      </Section404>
    </>
  );
}
