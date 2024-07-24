import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { albums, musics } from '../assets/assets';
import { useMemo } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
    const searchBar = useRef();
    const searchInput = useRef(null); 
    const closeSearch = useRef(); 


    const [isOnSearch,setIsOnSearch] = useState(false);
    const [isSearchFull , setIsSearchFull ]= useState(false);
    const [filterAlbumData , setFilterAlbumData] = useState([]);
    const [filterMusicData , setFilterMusicData] = useState([]);
    const [inSearch , setInSearch] = useState('');

   
    const handleChange = (e) => {
        if(e.target.value === "" ){
            setInSearch(e.target.value)
            closeSearch.current.style.display = "none"
        }
        else{
            setInSearch(e.target.value)
            closeSearch.current.style.display = "inline"
            setFilterAlbumData([...albums ].filter(f => f.name.toLowerCase().includes(inSearch)))
            setFilterMusicData([ ...musics].filter(f => f.name.toLowerCase().includes(inSearch)))
        }
    }
    useMemo(()=>{
        if(inSearch === ""){
            setIsSearchFull(false)
        }else{
            setIsSearchFull(true)
        }
        
    }, [inSearch])

    const contextSearchValue = {
        handleChange,
        isSearchFull , setIsSearchFull, 
        searchBar,
        isOnSearch,setIsOnSearch,
        searchInput,
        closeSearch,
        filterAlbumData,
        filterMusicData,

    }

  return (
    <SearchContext.Provider value={contextSearchValue}>
        {props.children}
    </SearchContext.Provider>
  )
}
