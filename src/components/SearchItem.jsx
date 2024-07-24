import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

export const SearchItem = (props) => {
    const bgCover = useRef();
    useEffect(()=>{
        bgCover.current.style.background = props.color;
    },[bgCover])
  return (
    <>
    <span ref={bgCover} className='overflow-hidden h-32 rounded flex object-cover relative cursor-pointer' id='browsecover'>
    <img className='object-cover w-24 h-24 rounded rotate-45 browse-image absolute left-[65%] top-11 drop-shadow-lg shadow-gray-950 select-none' src={props.img} alt="" />
    <h1 className='font-bold mx-6 my-6 text-2xl z-10 text-slate-200 select-none'>{props.name}</h1>
    </span>
    </>
    
  )
}
