import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { SearchContainer } from "./style";
import { useState } from "react";
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebaseconfig";
import { Navigate } from "react-router-dom";
import { list } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import he from 'he'

export function Search() {

    const [search, setSearch] = useState(false)
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleActiveSearch = () => {
        setSearch(!search)
    }

    const searchResults = (e) => {
        e.preventDefault()
        navigate(`/results/${input}`)
    }

    const contentInput = (e) => {
        setInput(he.encode(e.target.value, {
            'useNamedReferences': true
        }))
    }

    return (
        <SearchContainer search={search} >
            <form onSubmit={searchResults}>
                <input type="text" placeHolder="Buscar..." onChange={contentInput} />
                <button type="submit"></button>
            </form>
            {search ? <X color="#666" onClick={handleActiveSearch} /> : < MagnifyingGlass color="#666" onClick={handleActiveSearch} />}

        </SearchContainer>
    )
}