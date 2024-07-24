import React from 'react'
import { asset } from '../assets/assets'

export const SpeakerDisplay = (props) => {
  return (
    <>
    <div className='flex flex-col justify-between'>
        <div className='w-full flex justify-between px-2 pb-3 text-white'>
            <p className=' cursor-pointer hover:underline'>Connect to a device</p>
            <div className='flex'>
                <img onClick={()=>{props.setIsSpeaker(false)}} className='px-1 py-1 hover:bg-zinc-900 rounded-full transition-all cursor-pointer' src={asset.closeIcon} alt="" /> 
            </div>
            
        </div> 
        <div className='w-[95%] h-20 rounded-lg bgspeaker place-self-center text-white'>
            <div className='flex px-3 pt-2'>
                <img src={asset.laptopcon} />
                <p className='font-bold text-2xl px-3'>Current device</p>
            </div>
            <p className='font-medium text-md pl-4'>This web browser</p>
        </div>   
        <div className='flex flex-col text-white p-4 text-sm font-semibold'>
            <p className='text-md font-bold '>No other devices found</p>
            <div className='flex '>
                <img src={asset.wifiIcon} alt="" />
                <div className='flex flex-wrap px-2 py-6'>
                    <p>Check your WiFi</p>
                    <p className='text-zinc-500 text-nowrap'>Connect the devices you’re using to the same WiFi.</p>
                </div>
            </div>
            <div className='flex '>
                <img src={asset.devicesIcon} alt="" />
                <div className='flex flex-wrap px-2 py-6'>
                    <p>Play from another device</p>
                    <p className='text-zinc-500 text-nowrap'>It will automatically appear here.</p>
                </div>
            </div>
            <div className='flex '>
                <img src={asset.switchIcon} alt="" />
                <div className='flex flex-wrap px-2 py-6'>
                    <p>Switch to the Spotify app</p>
                    <p className='text-zinc-500 text-nowrap'>The app can detect more devices.</p>
                </div>
            </div>
        </div>
        <div className='absolute bottom-2 w-full'>
            <div className='flex justify-between items-center  text-white p-5 self-end cursor-pointer rounded hover:bg-zinc-900 transition-all'>
                <p className='hover:underline'>Don't see your device?</p>
                <img src={asset.arrowOutIcon} alt="" />
            </div>
            <div className='flex justify-between items-center text-white p-5 self-end cursor-pointer rounded hover:bg-zinc-900 transition-all'>
                <p className='hover:underline'>What can i connect to?</p>
                <img src={asset.arrowOutIcon} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
