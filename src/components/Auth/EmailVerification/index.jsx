import { ButtonDefault } from "../../ArticleCreationForm/style"
import { ProgressForm } from "../Register/style"
import { VerificationContainer } from "./style"
import { Link } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../firebaseconfig"

export function EmailVerification({status, setStatus}) {
    return (
        <VerificationContainer>
            <ProgressForm value="90" max="100"/>
            <h1>Quase lá...</h1>
            <img src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2021/08/giphy-19-5.gif"/>
            <p>Confirme seu e-mail para ser um membro verificado da comunidade TechConnect</p>
            <p>Se você pular essa etapa sua conta irar ter várias restrições em nossa comunidade!</p>
            <p>Inseriu o e-mail incorretamente? <span onClick={() => setStatus(!status)}>Volte aqui</span></p>                
        </VerificationContainer>
    )
}