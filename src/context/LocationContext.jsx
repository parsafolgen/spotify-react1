import React from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom';

export const LocationContext = createContext();

export const LocationContextProvider = (props) => {

    const location = useLocation();
    const isSearch = location.pathname.includes("search");
    const isHome = location.pathname == "/";
    const isLyrics = location.pathname.includes("lyrics");

    const contextLocationValue={
        isHome,
        isSearch,
        isLyrics,
    }
  return (
    <LocationContext.Provider value={contextLocationValue}>
        {props.children}
    </LocationContext.Provider>
  )
}
