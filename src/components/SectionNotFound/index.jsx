import { Section404 } from "./style"
import { ButtonStyled } from "../SectionMain/style"
import image404 from '../../assets/images/image-404.svg'
import { Link } from "react-router-dom"

export function SectionNotFound() {
    return (
      <>
        <Section404>
            <div>
                <img src={image404} alt="" />
                <h1>Hmmmm..... Parece que não achamos essa página. - 404</h1>
            </div>
            <ButtonStyled><Link to="..">Volte para casa</Link></ButtonStyled>
        </Section404>
      </>
    )
}
