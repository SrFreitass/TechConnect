import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../services/firebaseconfig";
import { onAuthStateChanged } from "firebase/auth"


export const useAdminVerify = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                const q = query(collection(db, "admin"), where("userID", "==", user.uid))
                getDocs(q).then((r) => {
                    if (r.docs.length > 0) {
                        console.log('usuário é administrador')
                        setToken("admin")
                        return
                    }
                    setToken('error')
                })
            } else {
                setToken('error')
            }
        }
        )

    }, [])

    return token
}