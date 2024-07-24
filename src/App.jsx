
import { useContext} from 'react'
import './App.css'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'
import PlayingView from './components/PlayingView'
import { AppContext } from './context/AppContext'
import { DisplayPlayerFullScreen } from './components/DisplayPlayerFullScreen'
import { MiniPlayer } from './components/MiniPlayer'

function App() {
  const{audioRef, track} = useContext(PlayerContext);
  const {appIndex , handleAppClick } = useContext(AppContext)


  return (
    <div ref={appIndex} onClick={handleAppClick} className='h-screen bg-gray-950 '>
      
        <div className='h-[90%] flex ' >
        <Sidebar />
        <Display />
        <PlayingView />
            <MiniPlayer/>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      <DisplayPlayerFullScreen />
      
      

    </div>

  )
}

export default App
