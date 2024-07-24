import { createContext, useEffect, useRef, useState } from "react";
import { musics } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    
    
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const seekAfterBar = useRef();
    const arrowTrack = useRef();
    const rangeInput = useRef();
    const seekVolume = useRef();
    const circleVolume = useRef();


    const [track ,setTrack] = useState(musics[0]);
    const [playState ,setPlayState] = useState(false);
    const [loop1State ,setLoop1State] = useState(false);
    const [nextplay , setNextplay] = useState(0)
    const [shuffelState , setShuffelState] = useState(true)
    const [isMute , setIsMute] = useState(false)
    const [volume , setVolume] = useState(50)

    const [time,setTime] = useState({
        currentTime : {
            second : 0,
            minute : 0,
        },
        totalTime : {
            second : 0,
            minute : 0,
        },
    })


    const play = () => {
        audioRef.current.play();
        setPlayState(true)
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayState(false)
    }

    const playWithId = async(id) => {
        await setTrack(musics[id]);
        await audioRef.current.play();
        setPlayState(true)
    }

    const previos = async () => {
        if(track.id > 0)
        await setTrack (musics[track.id-1]);
        await audioRef.current.play();
        setPlayState(true);
    }
    const next = async () => {
        if(track.id < musics.length){
            await setTrack (musics[nextplay]);
            await audioRef.current.play();
            setPlayState(true);
        }
    }
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
    }
    const loopPlay = async () =>{
        if(audioRef.current.currentTime == audioRef.current.duration) {
            const repeatplay = track.id
            await setTrack (loop1State ? musics[repeatplay] : musics[nextplay]);
            await audioRef.current.play();
            setPlayState(true)
        }
    } 
    const loop = async () => {
        setLoop1State(true)
    }
    const loop1 = async () => {
        setLoop1State(false);
    }

    const shuffelOnOff = () => {
        if (loop1State === false && shuffelState === true){
            setNextplay(Math.floor(Math.random()*musics.length))
        }
        if (loop1State === false && shuffelState === false){
            if(track.id !== musics.length - 1){
                setNextplay(track.id + 1)
            }
            if (track.id === musics.length - 1){
                setNextplay(0)
            }
            
        }
    }
        
    const shuffel = () => {
            setShuffelState(false)
    }
    const shuffelOff = () => {
            setShuffelState(true)
    }



    useEffect(()=>{
        seekVolume.current.style.width = `${volume}%`
        if(volume == 0 ){
            setIsMute(true)
        }else{
            setIsMute(false)
        }
        if(isMute){
            setVolume(0)
            audioRef.current.muted = true;
        }else{
            audioRef.current.muted = false;
        }
    },[seekVolume, volume , isMute])
    
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                seekAfterBar.current.style.left = + (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) - 1 + "%";
                setTime({currentTime : {
                    second : Math.floor(audioRef.current.currentTime % 60),
                    minute : Math.floor(audioRef.current.currentTime / 60),
                },
                totalTime : {
                    second : Math.floor(audioRef.current.duration % 60),
                    minute : Math.floor(audioRef.current.duration / 60),
                },},1000) 
            }      
            
        })
    },[audioRef])

    const handleChangeRange = () =>{
        setIsMute(false) 
            setVolume(rangeInput.current.value)
            audioRef.current.volume = volume / 100;
    } 
    
        const contextValue = {
            audioRef,
            seekBar,
            seekBg,
            seekAfterBar,
            track,setTrack,
            playState,setPlayState,
            time,setTime,
            play,pause,
            playWithId,
            previos,next,
            seekSong,
            loopPlay,
            loop1State,setLoop1State,
            loop,loop1,
            shuffel,shuffelOff,
            shuffelState,
            shuffelOnOff,
            isMute,setIsMute,
            volume,setVolume,
            arrowTrack,
            rangeInput,
            seekVolume,
            circleVolume,
            handleChangeRange

    }




    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}
export default PlayerContextProvider ;