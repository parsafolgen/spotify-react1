import { useContext, useEffect, useState } from "react";
import { asset} from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
import { PlayingViewContext } from "../context/PlayingViewContext";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../context/LocationContext";
import { AppContext } from "../context/AppContext";

const Player = () => {

    
    
    const navigate = useNavigate();
    
    const {handle , setIsMiniPlayer} = useContext(AppContext)
    const {track, setVolume , seekBar , seekAfterBar , seekBg , playState , play , pause ,time , next , previos , seekSong , loopPlay , loop , loop1 , loop1State, shuffel , shuffelOff , shuffelState , shuffelOnOff ,isMute, setIsMute, arrowTrack, rangeInput, seekVolume, circleVolume, handleChangeRange} = useContext(PlayerContext);
    const {isLyrics} = useContext(LocationContext)
    const {isPlayingView , setIsPlayingView , isQueue ,setIsQueue  , isSpeaker , setIsSpeaker} = useContext(PlayingViewContext);

    
    
    useEffect(()=>{loopPlay(); shuffelOnOff();},[loopPlay])

    const handleClick = (e) =>{
        switch(e.target.name){
            case "Pon" : setIsPlayingView(false); 
            break;
            case "Poff" : setIsPlayingView(true); setIsQueue(false); setIsSpeaker(false)
            break;
            case "Qon" : setIsQueue(false)
            break;
            case "Qoff" : setIsQueue(true); setIsSpeaker(false); setIsPlayingView(false)
            break;
            case "Son" : setIsSpeaker(false)
            break;
            case "Soff" : setIsSpeaker(true); setIsQueue(false); setIsPlayingView(false)
            break;
        } 
        
    }
    const handleSeekBgOver = () => {
        seekBar.current.style.background = '#2ecc71'
        seekAfterBar.current.style.display = 'inline'
    }
    const handleSeekBgOut = () => {
        seekBar.current.style.background = '#e2e8f0'
        seekAfterBar.current.style.display = 'none'
    }

    return ( 
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <span                 
                onMouseOver={()=> {arrowTrack.current.style.opacity = '0.5'}}
                onMouseOut={()=>{arrowTrack.current.style.opacity = '0'}}
                onClick = {()=>{
                    if(isPlayingView){
                        setIsPlayingView(false)
                        arrowTrack.current.style.rotate = '0deg'
                    }
                    if(!isPlayingView){
                        setIsPlayingView(true)
                        arrowTrack.current.style.rotate = '180deg'
                    }
                }}>
                <img className="w-12" src={track.img}/>
                <img ref={arrowTrack} className="absolute bottom-10 left-10 w-5 rounded-full bg-black opacity-0 rotate-180"
                 src={asset.arrowDownIcon}  />
                </span>

                <div>
                    <p >{track.name}</p>
                    <p className="font-light">{`${track.desc.slice(0,12)}...`}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    {shuffelState
                    ?<img onClick={shuffel} className="cursor-pointer w-4" src={asset.shuffelIcon} />
                    :<img onClick={shuffelOff} className="cursor-pointer w-4" src={asset.shuffelOffIcon} />
                    }
                    
                    <img onClick={previos} className="cursor-pointer w-4" src={asset.prevIcon} />
                    {playState 
                      ?<img onClick={pause} className="cursor-pointer bg-gray-400  hover:bg-green-800 rounded-full w-9 h-9 p-1" src={asset.pauseIcon} /> 
                      :<img onClick={play} className="cursor-pointer bg-gray-400 hover:bg-green-800 rounded-full w-9 h-9 p-1" src={asset.playIcon} /> 
                    }
                    <img onClick={next} className="cursor-pointer w-4" src={asset.nextIcon} />
                    {
                    loop1State 
                    ?<img onClick={loop1} className="cursor-pointer w-4" src={asset.loop1Icon} />
                    :<img onClick={loop} className="cursor-pointer w-4" src={asset.loopIcon} />
                    }
                    
                </div>
                <div className="flex items-center gap-5">
                    <p>{`${time.currentTime.minute <= 9 
                        ?"0"+(time.currentTime.minute).toString() 
                        :time.currentTime.minute}:${ 
                        time.currentTime.second <= 9    
                        ? "0"+(time.currentTime.second).toString()
                        :time.currentTime.second}`}</p>
                    <div ref={handle.active ? {} : seekBg} onMouseOver={handleSeekBgOver} onMouseOut={handleSeekBgOut} onClick={seekSong} className="relative w-[60vw] max-w-[500px] rounded-full bg-gray-700 flex flex-row items-center justify-start">
                        <hr ref={handle.active ? {} : seekBar} className="h-1 border-none bg-slate-200 rounded-full "/>
                        <span ref={handle.active ? {} : seekAfterBar} className="rounded-full w-3 h-3 bg-slate-200 absolute hidden cursor-pointer"></span>
                    </div>
                    <p>{`${time.totalTime.minute <= 9 
                        ?"0"+(time.totalTime.minute).toString() 
                        :time.totalTime.minute}:${time.totalTime.second <= 9 
                        ?"0"+(time.totalTime.second).toString() 
                        :time.totalTime.second}`}</p>
                </div>
                
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                {isPlayingView
                ?<img  name="Pon" className="w-4 cursor-pointer hover:scale-110" onClick={handleClick} src={asset.playsOnIcon} />
                :<img  name="Poff" className="w-4 cursor-pointer hover:scale-110" onClick={handleClick} src={asset.playsIcon} />

                }
                    {isLyrics
                    ?<img className="w-4 cursor-pointer hover:scale-110" src={asset.micOnIcon} onClick={()=>{
                        navigate(-1);
                    }} />
                    :<img className="w-4 cursor-pointer hover:scale-110" src={asset.micIcon} onClick={()=>{
                        navigate('/lyrics');
                    }} />
                    }
                    {isQueue
                    ?<img name="Qon"  className="w-4 cursor-pointer hover:scale-110" src={asset.queueOnIcon} onClick={handleClick} />
                    :<img name="Qoff"  className="w-4 cursor-pointer hover:scale-110" src={asset.queueIcon} onClick={handleClick}/>
                    }
                    {isSpeaker
                    ?<img name="Son" className="w-4 cursor-pointer hover:scale-110" src={asset.speakerOnIcon} onClick={handleClick} />
                    :<img name="Soff" className="w-4 cursor-pointer hover:scale-110" src={asset.speakerIcon} onClick={handleClick} />
                    }
                    {isMute
                    ?<img className="w-4 cursor-pointer " src={asset.volumeOffIcon} onClick={()=>{setIsMute(prev => !prev);  setVolume(5)}} />
                    :<img className="w-4 cursor-pointer " src={asset.volumeIcon} onClick={()=>{setIsMute(prev => !prev); setVolume(0)}} />
                    }
                    <div 
                    className="w-20 bg-gray-500 h-1 rounded-full appearance-none volume relative flex justify-start" 
                    onMouseOver={()=>{circleVolume.current.style.display = 'inline'; seekVolume.current.style.background = '#16a34a'}}
                    onMouseOut={()=>{circleVolume.current.style.display = 'none'; seekVolume.current.style.background = '#ffffff'}}
                    >
                        <hr ref={handle.active ? {} :seekVolume}
                         className="h-full bg-white"/>
                        <span ref={handle.active ? {} :circleVolume} className="w-3 h-3 hidden bg-white rounded-full relative bottom-1"></span>
                        <input ref={handle.active ? {} : rangeInput} type="range" className="w-20 bg-gray-300 h-1 rounded-full cursor-pointer appearance-none volume absolute opacity-0" onChange={handleChangeRange} name="volume" id="" />
                    </div>
                    <img className="w-4 cursor-pointer hover:scale-110" src={asset.miniPlayerIcon} onClick={()=>setIsMiniPlayer(prev => !prev)} />
                    <img className="w-4 cursor-pointer hover:scale-110" onClick={handle.enter} src={asset.zoomIcon} />
                </div>
        </div>
     );
}
 
export default Player;