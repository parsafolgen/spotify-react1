import React from 'react'
import { asset, musics } from '../assets/assets'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { PlayingViewContext } from '../context/PlayingViewContext';

export const PlayingViewDisplay = () => {


    const {track} = useContext(PlayerContext);
    const {setIsPlayingView} = useContext(PlayingViewContext)
  
  
    return (
    <>
        <div className='w-full flex justify-between pb-3'>
                <p className='text-white cursor-pointer hover:underline'>{musics[track.id].name}</p>
                <div className='flex'>
                    <img className='px-1 py-1 cursor-pointer' src={asset.moreIcon} alt="" />
                    <img onClick={()=>{setIsPlayingView(false)}} className='px-1 py-1 hover:bg-zinc-900 rounded-full transition-all cursor-pointer' src={asset.closeIcon} alt="" /> 

                </div>

        </div>
            <img className='w-full rounded' src={musics[track.id].img} alt="" />
            <div className='flex w-full justify-between'>
                <div className='flex flex-col p-5'>
                <p className='text-white font-bold text-2xl'>{musics[track.id].name}</p>
                <p className='text-zinc-400 font-bold'>{musics[track.id].album}</p>
            </div>
            <img src={asset.addIcon} alt="" />
            </div>
            <div className='w-full bg-zinc-800 rounded-lg'>
                <div className='relative'>
                    <img className='w-full h-[250px] object-cover rounded-lg' src={musics[track.id].img} alt="" />
                    <p className='absolute text-white bottom-52 right-56 font-semibold'>About the Music</p>
                </div>
                <div className='px-4 py-3'>
                    <p className='font-bold text-white text-xl'>{musics[track.id].name}</p>
                    <p className='font-semibold text-zinc-500 pt-2'>{musics[track.id].singer}</p>
                    <p className='font-semibold text-zinc-500 pb-3'>{musics[track.id].album}</p>
                    <p className='font-semibold text-zinc-500 py-5'>{musics[track.id].desc}</p>
                </div>
            </div>    
        </>
  )
}
