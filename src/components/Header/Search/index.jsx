import { MagnifyingGlass, X } from '@phosphor-icons/react';
import { SearchContainer } from './style';
import { useState, useRef } from 'react';
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../../services/firebaseconfig';
import { Navigate } from 'react-router-dom';
import { list } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import he from 'he';

export function Search({ adminFilter, searchProps, menuProps }) {
  const inputRef = useRef();
  const navigate = useNavigate();
  console.log(searchProps);
  console.log('renderizou');

  const handleActiveSearch = () => {
    searchProps.setSearch(!searchProps.search);
    inputRef.current.focus();
  };

  const searchResults = (e) => {
    e.preventDefault();

    const input = he.encode(inputRef.current.value, {
      useNamedReferences: true,
    });

    if (adminFilter) {
      adminFilter.setSearchFilter(input);
      return;
    }

    navigate(`../results/${input}`);
    menuProps.setMenu(false);
  };

  const contentInput = (e) => {
    setInput(
      he.encode(e.target.value, {
        useNamedReferences: true,
      }),
    );
  };

  return (
    <>
      <SearchContainer search={searchProps.search}>
        {searchProps?.search ? (
          <X color='#666' size={20} />
        ) : (
          <MagnifyingGlass
            color='#666'
            size={20}
            onClick={handleActiveSearch}
          />
        )}
        <form onSubmit={searchResults}>
          <button type='submit'></button>
          <input
            onBlur={() => searchProps.setSearch(false)}
            type='text'
            placeholder='Buscar...'
            ref={inputRef}
          />
        </form>
      </SearchContainer>
    </>
  );
}
