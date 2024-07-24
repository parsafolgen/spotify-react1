import React from 'react'
import { asset, musics } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext';
import { PlayingViewContext } from '../context/PlayingViewContext';
import { useContext } from 'react';

export const QueueDisplay = () => {


    const {track , play , playWithId ,} = useContext(PlayerContext);
    const { setIsQueue ,} = useContext(PlayingViewContext)


    const nextplays = [...musics].filter((item)=> item !== track);

  return (
    <>
    <div className='w-full flex justify-between pb-3 px-[9px]'>
       <p className='text-white cursor-pointer hover:underline'>Queue</p>
           <img onClick={()=>{setIsQueue(false)}} className='px-1 py-1 hover:bg-zinc-900 rounded-full transition-all cursor-pointer' src={asset.closeIcon} alt="" /> 


   </div>
   <div className=' mt-10'>
       <p className='text-white cursor-default font-bold'>Now playing</p>
       <div className='my-2 p-3 flex justify-start rounded-md bg-zinc-800 cursor-pointer hover:bg-zinc-900'>
           <div className='relative' onClick={play}>
           <img className='w-14 rounded-md hidden lg:inline' src={musics[track.id].img} alt="" />
           <img className='absolute bottom-4 left-4 z-40 hover:scale-95'
            src={asset.playIcon} 
            />
           </div>
           <div className='flex flex-col text-white'>
               <p className='font-semibold mx-2 text-green-500'>{musics[track.id].name}</p>
               <div className='flex mx-2'>        
               <p className='hover:underline'>{musics[track.id].singer}</p>, 
               <p className='hover:underline'> {musics[track.id].album}</p>
               </div>
           </div>
       </div>
   </div>

   <div className='flex flex-col mt-10'>
       <p className='text-white cursor-default font-bold'>Next list's</p>
       {
           nextplays.map((item,index) => (
           <div key={index} className='my-2 p-3 flex justify-start rounded-md bg-[#121212] cursor-pointer hover:bg-zinc-900'>
               <div className='relative' onClick={()=>playWithId(item.id)}>
               <img className='w-14 rounded-md hidden lg:inline' src={item.img} alt="" />
               <img className='absolute bottom-4 left-4 z-40 hover:scale-95'
                src={asset.playIcon} 
                />
               </div>
               <div className='flex flex-col text-white'>
                   <p className='font-semibold mx-2 text-green-500'>{item.name}</p>
                   <div className='flex mx-2'>        
                   <p className='hover:underline'>{item.singer}</p>, 
                   <p className='hover:underline'> {item.album}</p>
                   </div>
               </div>
           </div>
           )
           )
       }
   </div>

   </>

  )
}
