import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../../../services/firebaseconfig"

export const useVerifyEmail = () => {

    const [status, setStatus] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {

            if (user?.emailVerified) {
                setStatus('emailVerified')
                return
            }

            if(user) {
                setStatus('verifyEmail')
            }

            setStatus('loggedOut')
        })
    }, [])
    
    return status
}