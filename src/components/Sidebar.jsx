import {asset} from './../assets/assets.js'
import LongButton from './little-component/LongButton.jsx';
import { useContext } from 'react';
import { LocationContext } from '../context/LocationContext.jsx';
import { useRef } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
const Sidebar = (props) => {
    const sidebarRef = useRef();
    const arrowRef = useRef();
    

    const [isArrow , setIsArrow] = useState(false)

    const {isSearch,isHome} = useContext(LocationContext)
    const {addPlaylistRef , isAddPlayList , setIsAddPlaylist} = useContext(AppContext)



    const handleArrow = () => {
        if(!isArrow){
            setIsArrow(true)
            sidebarRef.current.style.width = '35%';
            arrowRef.current.style.rotate = '180deg';
        }
        else{
            setIsArrow(false)
            sidebarRef.current.style.width = '25%';
            arrowRef.current.style.rotate = '0deg';
        }

    
    }
    
    return ( 
        <div ref={sidebarRef} className="text-white w-[25%] h-full p-2 flex-col lg:flex  gap-2">
            <div className={'bg-gray-900 flex flex-col rounded w-20 justify-center sm:w-[100%]'}>
            <LongButton loc={isHome} nav="/" src={asset.homeIcon} inText="Home" />
            <LongButton loc={isSearch} nav="/search" src={asset.searchIcon} inText="Search" />
            </div>
            <div className='bg-[#121212] h-[85%] rounded w-20 sm:w-[100%]'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-8 ml-[30%] sm:ml-0' src={asset.libraryIcon} alt="" />
                        <p className='font-semibold hidden sm:inline'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3 relative'>
                        <img ref={arrowRef} className='w-5 hidden lg:inline cursor-pointer' src={asset.arrowIcon} onClick={handleArrow} />
                        <img className='w-5 hidden md:inline cursor-pointer' src={asset.addIcon} alt="add" onClick={()=>setIsAddPlaylist(true)} />
                        {isAddPlayList &&
                        <div ref={addPlaylistRef} className='absolute bg-[#535353] flex flex-col top-10 right-8 rounded-md'>
                            <div className='bg-[#535353] cursor-pointer px-10 py-6 w-48 h-8 rounded-t-md self-center flex justify-center hover:bg-zinc-700'>
                                <p className='self-center text-nowrap'>Create a new playlist</p></div>
                            <div className='bg-[#535353] cursor-pointer px-10 py-6 w-48 h-8 rounded-b-md self-center flex justify-center hover:bg-zinc-700'>
                                <p className='self-center text-nowrap'>Create a playlist folder</p></div>
                        </div>
                        }
                    </div>

                </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold md:flex flex-col items-start justify-start gap-1 pl-4 hidden '>
                        <h1>Create your first playlist</h1>
                        <p className='font-light'>it's easy we will help you</p>
                        <button  className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:shadow-lg hover:scale-105'>Create Playlist</button>

                    </div>
                    <div className='p-4 bg-[#242424] m-2 rounded font-semibold md:flex flex-col items-start justify-start gap-1 pl-4 mt-4 hidden '>
                        <h1>Let's find podcast to follow</h1>
                        <p className='font-light'>wi'll keep you updateon new episodes</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:shadow-lg hover:scale-105'>Browse podcasts</button>
                    </div>
            </div>
        </div>
     
        
     );
   
}
 
export default Sidebar;