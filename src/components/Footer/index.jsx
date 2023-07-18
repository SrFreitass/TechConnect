import { FooterStyled } from "./style";
import { Logo } from "../Logo";
import { FacebookLogo, InstagramLogo, TwitterLogo, GithubLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
      <FooterStyled>
        <Logo/>
        <p>Explore as últimas inovações na TechConnect, seu guia para as descobertas científicas e avanços tecnológicos mais recentes na feira. Conecte-se ao futuro da ciência e mergulhe em um mundo de possibilidades!</p>
        <ul>
          <li><a href=""><FacebookLogo size={32} color="white"/></a></li>
          <li><a href=""><InstagramLogo size={32} color="white"/></a></li>
          <li><a href=""><TwitterLogo size={32} color="white"/></a></li>
          <li><a href=""><GithubLogo size={32} color="white"/></a></li>
        </ul>
          <p>© 2023 TechConnect. All rights reserved.</p>
      </FooterStyled> 
    )
}