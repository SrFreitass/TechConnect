import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebaseconfig";


export const useAdminVerify = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const q = query(collection(db, "admin"), where("uid", "==", localStorage.getItem("token")));
        const res = (getDocs(q)).then((querySnapshot) => {
            return querySnapshot.docs.map((doc) => ({ ...doc.data() }))[0].uid
        })
        res.then((rtoken) => {
            setToken(rtoken)
        })
            .catch((error) => {
                setToken('error')
                console.log('errou')
            })
    }, [])

    return token
}