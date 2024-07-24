import React, { useContext, useRef } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { asset } from '../assets/assets';

export const SongItem = ({name,img,desc,id}) => {
  const playBtn = useRef();

  const {playWithId} = useContext(PlayerContext);

  const handlePlayBtnOver = () => {
    playBtn.current.style.transform = 'translateY(-10px)';
    playBtn.current.style.opacity = '0.9';
  }
  const handlePlayBtnOut = () => {
    playBtn.current.style.transform = 'translateY(0px)';
    playBtn.current.style.opacity = '0';
  }
      
  
  return (
    <div onClick={()=>{playWithId(id)}} onMouseOver={handlePlayBtnOver} onMouseOut={handlePlayBtnOut} className='relative max-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img ref={playBtn} className='transition-all bg-green-700 rounded-full w-12 absolute bottom-[80px] left-[150px] opacity-0' src={asset.playIcon} alt="" />
            <img className='rounded' src={img} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc.slice(0,20)}</p>
    </div>
  )
}
