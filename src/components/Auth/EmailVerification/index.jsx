import { ButtonDefault } from "../../ArticleComposer/style"
import { ProgressForm } from "../Register/style"
import { VerificationContainer } from "./style"
import { Link } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../services/firebaseconfig"

export function EmailVerification({ status, setStatus }) {



    return (
        <VerificationContainer>
            <ProgressForm value="90" max="100" />
            <h1>Quase lá...</h1>
            <p>Confirme seu e-mail para ser um membro verificado da comunidade TechConnect</p>  
            <ButtonDefault onClick={() => location.reload()}>Já verifiquei</ButtonDefault>
            <p>Inseriu o e-mail incorretamente? <span onClick={() => setStatus(!status)}>Volte aqui</span></p>
        </VerificationContainer>
    )
}