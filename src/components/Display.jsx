import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome  from './DisplayHome'
import { DisplayAlbum } from './DisplayAlbum'
import { albums } from '../assets/assets'
import { DisplaySearch } from './DisplaySearch'
import { DisplayLyrics } from './DisplayLyrics'

 const Display = () => {
    const displayRef = useRef();
    const location= useLocation();
    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.slice(-1) : "";
    const bgColor = albums[Number(albumId)].bgColor;
    
  useEffect(()=>{
    if(isAlbum){
        displayRef.current.style.background= `linear-gradient(${bgColor},#121212)`
    }else{
      displayRef.current.style.background = "#121212"
    }
  },[isAlbum])
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
            <Route path='/search' element={<DisplaySearch />} /> 
            <Route path='/lyrics' element={<DisplayLyrics />} /> 
        </Routes>
    </div>
  )
}
export default Display;