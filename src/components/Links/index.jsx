import { FacebookLogo, InstagramLogo, TelegramLogo, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react";
import { LinksContainer } from './style'

export function Links() {
    return (
        
        <LinksContainer>
            <FacebookLogo size={48} color="#8A8AE0" />
            <InstagramLogo size={48} color="#8A8AE0" />
            <TwitterLogo size={48} color="#8A8AE0" />
            <WhatsappLogo size={48} color="#8A8AE0" />
            <TelegramLogo size={48} color="#8A8AE0" />
        </LinksContainer>
    )
}