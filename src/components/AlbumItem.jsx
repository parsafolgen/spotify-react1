import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { asset } from '../assets/assets'

export const AlbumItem = ({img,name,desc,id}) => {
  
  const navigate = useNavigate();
  const playBtn = useRef();

  const handlePlayBtnOver = () => {
    playBtn.current.style.transform = 'translateY(-10px)';
    playBtn.current.style.opacity = '0.8';
  }
  const handlePlayBtnOut = () => {
    playBtn.current.style.transform = 'translateY(0px)';
    playBtn.current.style.opacity = '0';
  }
  return (
    <>
    <div onClick={()=>navigate(`/album/${id}`)} onMouseOver={handlePlayBtnOver} onMouseOut={handlePlayBtnOut} className='transition-all min-w-[200px] max-w-[250px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] items-center relative'>
        <img ref={playBtn} className='transition-all bg-green-700 rounded-full w-12 absolute bottom-[100px] left-[160px] opacity-0' src={asset.playIcon} alt="" />
        <img className='rounded min-w[200px] px-3' src={img} alt="" />
        <p className='font-bold mt-2 mb1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc.slice(0,70)}</p>
    </div>
    </>
  )
}
