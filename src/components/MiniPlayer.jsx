import { asset, musics } from '../assets/assets'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { useRef } from 'react'
import { AppContext } from '../context/AppContext'

export const MiniPlayer = () => {
    const miniPlayeroptions = useRef();

    const {track , playState , play , pause , next , previos} = useContext(PlayerContext)
    const {isMiniPlayer , setIsMiniPlayer} = useContext(AppContext)


  return (
    <>
    {isMiniPlayer &&
        <div onMouseOver={() => {miniPlayeroptions.current.style.display = 'flex'}}
                onMouseOut={() => {miniPlayeroptions.current.style.display = 'none'}} 
                className='fixed right-12 bottom-24 drag z-50'>
                    <img draggable={false} className='w-52 cursor-pointer' src={musics[track.id].img} />
                    <div ref={miniPlayeroptions} className='absolute bottom-0 hidden flex-col justify-between w-52 h-52'>
                    <img className='w-5 place-self-end m-2 cursor-pointer' src={asset.closeIcon} onClick={() => setIsMiniPlayer(false)} />
                    <div className='flex place-content-center bg-[#121212bb]'>
                        <img className='w-10 cursor-pointer' src={asset.prevIcon} onClick={previos}  />
                        {playState
                        ?<img className='w-12 cursor-pointer' src={asset.pauseIcon}  onClick={pause}/>
                        :<img className='w-12 cursor-pointer' src={asset.playIcon}  onClick={play}/>
                        }
                        
                        <img className='w-10 cursor-pointer' src={asset.nextIcon} onClick={next}  />
                    </div>    
                    </div>
                    
                </div>
    }
        
    </>
  )
}
