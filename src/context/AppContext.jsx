import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { useFullScreenHandle } from 'react-full-screen';
import { SearchContext } from './SearchContext';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const appIndex = useRef();
    const accountBoxRef = useRef();
    const addPlaylistRef = useRef();
    

    const handle = useFullScreenHandle();
    

    const {isOnSearch , setIsOnSearch , searchBar} = useContext(SearchContext);


    const [isAddPlayList,setIsAddPlaylist] = useState(false);
    const [accountMenu , setAccountMenu] = useState(false);
    const [isMiniPlayer , setIsMiniPlayer] = useState(false)


    const handleAppClick = async (e) => {
        if (accountMenu){
            if(e.target !== accountBoxRef.current){
                setAccountMenu(false);
                accountBoxRef.current.style.display = 'none'
            }
        }
        if(isOnSearch){
            if(e.target !== searchBar.current){
                setIsOnSearch(false);
                searchBar.current.style.outline = "none"
            }
        }
        if (isAddPlayList){
            if(e.target !== addPlaylistRef.current){
                setIsAddPlaylist(false);
            }else{
                setIsAddPlaylist(true);
            }
        } 
    };


    const contextAppValue = {
        appIndex,
        handleAppClick,
        accountBoxRef,
        accountMenu,setAccountMenu,
        handle,
        isAddPlayList,setIsAddPlaylist,
        isMiniPlayer , setIsMiniPlayer,
    }
  return (
    <AppContext.Provider value={contextAppValue}>
        {props.children}
    </AppContext.Provider>
  )
}
