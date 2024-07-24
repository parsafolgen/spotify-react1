import React from 'react'
import { asset } from '../assets/assets';

export const AccountBox = (props) => {

  return (
    <div ref={props.accountBoxRef} className='absolute w-48 h-52 bg-zinc-900 rounded right-[0px] top-[50px] hidden flex-col px-3 py-2 text-sm justify-between z-30'>
                <span className='flex justify-between px-1 py-2 rounded items-center hover:bg-zinc-700 cursor-default'><p className='text-center'>Account</p> <img className='w-5' src={asset.arrowOutIcon} alt="" /></span>
                <span className='flex justify-between px-1 py-2 rounded items-center hover:bg-zinc-700 cursor-default'><p className='text-center'>Profile</p></span>
                <span className='flex justify-between px-1 py-2 rounded items-center hover:bg-zinc-700 cursor-default'><p className='text-center'>Upgread to Premium</p> <img className='w-5' src={asset.arrowOutIcon} alt="" /></span>
                <span className='flex justify-between px-1 py-2 rounded items-center hover:bg-zinc-700 cursor-default'><p className='text-center'>Setting</p> </span>
                <hr className='h-[0.05px]'/>
                <span className='flex justify-between px-1 py-2 rounded items-center hover:bg-zinc-700 cursor-default'><p className='text-center'>Log out</p></span>
    </div>
  )
}
