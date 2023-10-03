import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { SearchContainer } from "./style";
import { useState, useRef } from "react";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebaseconfig";
import { Navigate } from "react-router-dom";
import { list } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import he from 'he'

export function Search({ adminFilter }) {

    const [search, setSearch] = useState(false)
    const inputRef = useRef()
    const navigate = useNavigate()
    console.log('renderizou')

    const handleActiveSearch = () => {
        setSearch(!search)
    }

    const searchResults = (e) => {
        e.preventDefault()

        const input = he.encode(inputRef.current.value, {
            'useNamedReferences': true
        })

            if(adminFilter) {
                adminFilter.setSearchFilter(input)
                return
            }



            navigate(`../results/${input}`)
        }

    const contentInput = (e) => {
        setInput(he.encode(e.target.value, {
            'useNamedReferences': true
        }))
    }

    return (
        <>
        <SearchContainer search={search} >
            <form onSubmit={searchResults}>
                <input type="text" placeholder="Buscar..." ref={inputRef} />
                <button type="submit"></button>
            </form>
            {search ? <X color="#666" size={18}  onClick={handleActiveSearch} /> : < MagnifyingGlass color="#666" size={20} onClick={handleActiveSearch} />}
        </SearchContainer>
        </>
    )
}