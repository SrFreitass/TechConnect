import { Link } from 'react-router-dom'
import { FooterStyle } from './style'
import { YoutubeLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react'
import DiscordLogo  from '../../assets/images/discord-svgrepo-com.svg'
import  { InfoFooter } from './style'

export function Footer() {
    return (
        <FooterStyle>
            <div>
                <span>&#60;techconnect/&#62;</span>
                <div>
                    <Link to="./home">Home</Link>
                    <Link>Fast</Link>
                    <Link to="./metaverso">Metaverso</Link>
                    <a href="https://github.com/srfreitass/techconnect" target='__blank'>Github</a>
                </div>
            </div>
            <InfoFooter>
                <div>
                <a><TwitterLogo size={32} color="#757575" weight="fill"/></a>
                <a><InstagramLogo size={32} color="#757575"/></a>
                <a><img src={DiscordLogo}/></a>
                <a><YoutubeLogo size={32} color="#757575"/></a>
                </div>
                <div>
                    <span>Projeto para feira de ciências da E.E Silvio Oliveira dos Santos.
                       <br/> <span>Todos os direitos reservados a ConnectionXS &copy; 2023</span>
                    </span>
                </div>
            </InfoFooter>
            {/* <p>Todos direitos reservados a TechConnect  &copy; 2023</p> */}
        </FooterStyle>
    )
}