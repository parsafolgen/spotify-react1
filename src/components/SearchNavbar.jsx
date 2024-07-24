import React from 'react'
import { useContext } from 'react';
import { asset } from '../assets/assets';
import { SearchContext } from '../context/SearchContext';


export const SearchNavbar = () => {


    const { handleChange , isOnSearch , setIsOnSearch , setIsSearchFull , searchBar , searchInput , closeSearch,} = useContext(SearchContext) ;

    const handleCloseSearch = (e) => {
        if(searchInput.current.value !== ""){
            setIsSearchFull(false)
            closeSearch.current.style.display = "none"
            searchInput.current.value = ""
        }
    }


  return (
    <> 
    <div 
            ref={searchBar} 
            className='flex sm:w-full h-12 rounded-full bg-zinc-800 cursor-text w-full'
            onClick={()=>{ setIsOnSearch(true); searchBar.current.style.outline = "solid";
                searchInput.current.style.background = "#27272a";
                searchBar.current.style.background = "#27272a";
                searchInput.current.focus()
             }}
            onMouseOver={()=>{if(isOnSearch ===false) {searchBar.current.style.outline = "solid 1px"; 
                searchInput.current.style.background = "#3f3f46";
                searchBar.current.style.background = "#3f3f46";  
            }}}
            onMouseOut={()=>{if(isOnSearch === false) {searchBar.current.style.outline = "none";
                searchInput.current.style.background = "#27272a";
                searchBar.current.style.background = "#27272a";
            }}}
            >
                <div className='flex p-2 w-full'>
                    <img className='w-10 p-1' src={asset.searchIcon} alt="" />
                    <input ref={searchInput} onChange={handleChange} className='bg-zinc-800 outline-none w-full px-2 text-xs sm:text-sm' type="text" placeholder='What do you want to play?' />
                </div>
                    <img ref={closeSearch} onClick={handleCloseSearch}  className='w-10 pr-4 cursor-default hidden' src={asset.closeIcon} alt="" />
            </div>
    </>
  )
}
