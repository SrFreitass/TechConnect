import { sendPasswordResetEmail } from "firebase/auth"
import toast, { Toaster } from "react-hot-toast"
import { FormStyled, ContainerInputForm } from "../Register/style"
import { EnvelopeSimple, ArrowLeft } from "@phosphor-icons/react"
import { ButtonDefault } from "../../ArticleComposer/style"
import { Link } from "react-router-dom"
 
export function PasswordRecovery() {

    const handleResetPassword = async (data) => {
        try {
            await sendPasswordResetEmail(auth, data.email)
            toast.success('E-mail de recuperação enviado')
        } catch(e) {
            toast.error('E-mail inválido')
        }
    }

    return (
            <>
                <Toaster
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{
                    loading: {
                        duration: 1000,
                    },
                }}
                />
                <FormStyled>
                    <div>
                        <h2>Recuperar senha</h2>
                    </div>
                    <ContainerInputForm>
                        <input type="email" placeholder="Seu email" />
                        <EnvelopeSimple size={24} color="#757575" />
                    </ContainerInputForm>
                    <ButtonDefault>RECUPERAR</ButtonDefault>
                    <bold><Link to="../auth/login"><ArrowLeft size="24" color="#8A8AE0"/>Voltar para o login</Link></bold>
                </FormStyled>
            </>
        )
}