import { useEffect } from "react";
import { styled } from "styled-components";

const MetaversoIframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;

export function Metaverso() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
  }, []);

  return (
    <MetaversoIframe src="https://www.spatial.io/s/Guilherme-Freitass-Virtual-Space-653141e99a71afefbc4cce83?share=7175629859969925409http://localhost:5173/home/article/PF7v0V2yLH5uKNe2BCDMhttp://localhost:5173/home/article/PF7v0V2yLH5uKNe2BCDM"></MetaversoIframe>
  );
}
