
import { useContext } from 'react';
import { FullScreen} from "react-full-screen";
import { AppContext } from '../context/AppContext';
import { asset, musics } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { animated, useSpring } from '@react-spring/web';
import { useEffect } from 'react';
import { useState } from 'react';

export const DisplayPlayerFullScreen = () => {

    const [playList,setPlayList] = useState(false);

    const {handle} = useContext(AppContext)
    const {track,  setVolume , seekBar , seekAfterBar , seekBg , playState , play , pause ,time , next , previos , seekSong , loop , loop1 , loop1State, shuffel , shuffelOff , shuffelState  ,isMute,setIsMute , rangeInput, seekVolume, circleVolume, handleChangeRange} = useContext(PlayerContext);
    
    const [springs, api] = useSpring(() => ({
        from: { y: 0 , opacity : 0, },
    }))
    const [springs2, api2] = useSpring(() => ({
        from: { x: 0 , opacity : 0, },
    }))

    useEffect(()=>{
        if(handle.active){
          api.start({
            from: {
              y: 0,
              opacity : 0,
            },
            to: {
              y: -100,
              opacity : 1,
            },
            config: {
                duration: 1000,
              },
          })  
          api2.start({
            from: {
              x: 0,
              opacity : 0,
            },
            to: {
              x: 250,
              opacity : 1,
            },
            config: {
                duration: 2000,
              },
          })  
        }
        
    },[handle])

    useEffect(()=>{
        if(handle.active)
        {handle.node.current.style.display = 'block';
        }else{handle.node.current.style.display = 'none'}
    },)



    const handleSeekBgOver = () => {
        seekBar.current.style.background = '#2ecc71'
        seekAfterBar.current.style.display = 'inline'
    }
    const handleSeekBgOut = () => {
        seekBar.current.style.background = '#e2e8f0'
        seekAfterBar.current.style.display = 'none'
    }



    return (
    <>
    <FullScreen handle={handle} className='text-white px-24 py-12 flex flex-col justify-between text-2xl bg-green-800 h-[100%]'> 
        <div>
            <p className='text-[#ffffff6b] font-semibold'>Playing From Track</p>
        </div>
        <div className='relative'>
            <animated.img style={{...springs}} src={musics[track.id].img} className='relative rounded-lg w-96 top-32' alt="" />
            <animated.h1 style={{...springs2}} className=' absolute bottom-12 left-44 text-4xl font-extrabold'>{musics[track.id].name}</animated.h1>
            <animated.h3 style={{...springs2}} className=' absolute bottom-4 left-44 text-2xl font-semibold text-[#ffffff8b]'>{musics[track.id].singer}</animated.h3>
        </div>
        <div className='flex flex-col gap-4 relative top-48'>
        <div className="flex items-center gap-5">
                    <p>{`${time.currentTime.minute <= 9 
                        ?"0"+(time.currentTime.minute).toString() 
                        :time.currentTime.minute}:${ 
                        time.currentTime.second <= 9    
                        ? "0"+(time.currentTime.second).toString()
                        :time.currentTime.second}`}</p>
                    <div ref={handle.active ? seekBg : {}} onMouseOver={handleSeekBgOver} onMouseOut={handleSeekBgOut} onClick={seekSong} className="relative w-full rounded-full bg-gray-700 flex flex-row items-center justify-start">
                        <hr ref={handle.active ? seekBar : {}} className="h-1 border-none bg-slate-200 rounded-full "/>
                        <span ref={handle.active ? seekAfterBar : {}} className="rounded-full w-3 h-3 bg-slate-200 absolute hidden cursor-pointer"></span>
                    </div>
                    <p>{`${time.totalTime.minute <= 9 
                        ?"0"+(time.totalTime.minute).toString() 
                        :time.totalTime.minute}:${time.totalTime.second <= 9 
                        ?"0"+(time.totalTime.second).toString() 
                        :time.totalTime.second}`}</p>
        </div>
                <div className='flex justify-between items-center '>
                    {playList
                    ?<img src={asset.okIcon} onClick={()=>{setPlayList(prev => !prev)}} />
                    :<img src={asset.addIcon} onClick={()=>{setPlayList(prev => !prev)}} />
                    }
                    


                    <div className='flex gap-4 ml-48'>
                    {shuffelState
                        ?<img onClick={shuffel} className="cursor-pointer w-8" src={asset.shuffelIcon} />
                        :<img onClick={shuffelOff} className="cursor-pointer w-8" src={asset.shuffelOffIcon} />
                        }
                        
                        <img onClick={previos} className="cursor-pointer w-8" src={asset.prevIcon} />
                        {playState 
                        ?<img onClick={pause} className="cursor-pointer bg-gray-500  hover:bg-green-500 rounded-full w-20 h-20 p-1" src={asset.pauseIcon} /> 
                        :<img onClick={play} className="cursor-pointer bg-gray-500 hover:bg-green-500 rounded-full w-20 h-20 p-1" src={asset.playIcon} /> 
                        }
                        <img onClick={next} className="cursor-pointer w-8" src={asset.nextIcon} />
                        {
                        loop1State 
                        ?<img onClick={loop1} className="cursor-pointer w-8" src={asset.loop1Icon} />
                        :<img onClick={loop} className="cursor-pointer w-8" src={asset.loopIcon} />
                        }
                    </div>

                    <div className='flex items-center gap-4'>
                        {isMute
                        ?<img className="w-8 cursor-pointer" src={asset.volumeOffIcon} onClick={()=>{setIsMute(prev => !prev);  setVolume(5)}} />
                        :<img className="w-8 cursor-pointer" src={asset.volumeIcon} onClick={()=>{setIsMute(prev => !prev); setVolume(0)}} />
                        }
                        <div 
                        className="w-40 bg-gray-500 h-2 rounded-full appearance-none volume relative flex justify-start" 
                        onMouseOver={()=>{circleVolume.current.style.display = 'inline'; seekVolume.current.style.background = '#16a34a'}}
                        onMouseOut={()=>{circleVolume.current.style.display = 'none'; seekVolume.current.style.background = '#ffffff'}}
                        >
                            <hr ref={handle.active ? seekVolume : {}}
                            className="h-full bg-white"/>
                            <span ref={handle.active ? circleVolume : {}} className="w-6 h-6 hidden bg-white rounded-full relative bottom-2"></span>
                            <input ref={handle.active ? rangeInput : {}} type="range" className="w-40 bg-gray-300 h-2 rounded-full cursor-pointer appearance-none volume absolute opacity-0" onChange={handleChangeRange} name="volume" id="" />
                        </div>
                        <img className='cursor-pointer' onClick={handle.exit} src={asset.closeFullScreenIcon} /> 
                    </div>
                    
                </div>  
            
        </div>
        
    </FullScreen>
    </>
  )
}
