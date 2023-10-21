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
    <MetaversoIframe src="https://www.spatial.io/s/Metaverso-TechConnect-64ebfa810969def9be3236b0?share=9123803830227446099"></MetaversoIframe>
  );
}
