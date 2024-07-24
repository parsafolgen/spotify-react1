import React, { useRef, useState } from 'react'
import { asset } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AccountBox } from './AccountBox';
import { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import { AppContext } from '../context/AppContext';
import { SearchNavbar } from './SearchNavbar';

const Navbar = (props) => {
    const navigate = useNavigate();
    const all = useRef(); 
    const music = useRef(); 
    const podcast = useRef(); 
   

    const [accountList] = useState([all,music,podcast]);
    
    
    
    const {accountBoxRef, accountMenu , setAccountMenu } = useContext(AppContext);
    const {isSearch, isHome , isLyrics} = useContext(LocationContext);



    const handleSelectTypes = (e) => {
        props.setTypeSelect(e.target.getAttribute("name"))
        switch (e.target.getAttribute("name")) {
            case "all":
                accountList[0].current.style.background = '#ffffff'
                accountList[0].current.style.color = '#000000'
                accountList[1].current.style.background = '#000000'
                accountList[1].current.style.color = '#ffffff'
                accountList[2].current.style.background = '#000000'
                accountList[2].current.style.color = '#ffffff'
                break;
                
                case "music":
                    accountList[0].current.style.background = '#000000'
                    accountList[0].current.style.color = '#ffffff'
                    accountList[1].current.style.background = '#ffffff'
                    accountList[1].current.style.color = '#000000'
                    accountList[2].current.style.background = '#000000'
                    accountList[2].current.style.color = '#ffffff'
                    break;
                    
                    case "podcast":
                        accountList[0].current.style.background = '#000000'
                        accountList[0].current.style.color = '#ffffff'
                        accountList[1].current.style.background = '#000000'
                        accountList[1].current.style.color = '#ffffff'
                        accountList[2].current.style.background = '#ffffff'
                        accountList[2].current.style.color = '#000000'
                        break;
                    }
                    
                }
                

                    
    const handleAccountClick = () => {
        if(accountMenu === false){
            accountBoxRef.current.style.display = 'flex'
            setAccountMenu(true)
        }
        
    } 
                

                    
  return (
    <>
    <div className='w-full flex flex-col-reverse justify-between items-center font-semibold gap-2 sm:flex-row'>
        <div className='flex flex-col justify-center w-full sm:w-[60%] sm:justify-start sm:flex-row gap-2 sm:gap-5'> 
            <div  className=' flex items-center justify-center sm:justify-start gap-2 w-32 self-center sm:justify-self-center'>
                <img onClick={()=> navigate(-1)} className='w-8 h-8 bg-black pl-2 rounded-2xl cursor-pointer' src={asset.arrowLeft}/>
                <img onClick={()=> navigate(1)} className='w-8 h-8 bg-black pl-2 sm:pl-[5%] sm:py-1 rounded-2xl cursor-pointer' src={asset.arrowRight}/>
            </div>
            {isSearch &&
            <SearchNavbar />
            }
            
        
        </div>
        <div className='flex items-center gap-4 relative flex-col-reverse sm:flex-row'>
            {isHome &&
                <p className='bg-white text-black text-[15px] text-nowrap px-4 py-1 rounded-3xl space-y-0 hidden md:block cursor-pointer hover:shadow-lg hover:scale-105'>Explore Premium</p> 
            }
            {isLyrics &&
                <p className='bg-white text-black text-[15px] text-nowrap px-4 py-1 rounded-3xl hidden md:block cursor-pointer hover:shadow-lg hover:scale-105'>Explore Premium</p>
            }
            <p className='bg-black text-white text-[15px] px-4 py-1 text-nowrap rounded-2xl cursor-pointer hover:shadow-lg hover:scale-105'> Install App</p>
            <p onClick={handleAccountClick} className=' select-none bg-rose-700 w-7 h-7 rounded-full text-black flex items-center cursor-pointer justify-center hover:shadow-lg hover:scale-105'>S</p>
            <AccountBox accountBoxRef={accountBoxRef} accountMenu={accountMenu} setAccountMenu={setAccountMenu} />
        </div>

    </div>
    {isHome &&
        <div className='flex items-center gap-2 mt-4'>
            <p name="all" onClick={handleSelectTypes} ref={all} className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' >All</p>
            <p name="music" onClick={handleSelectTypes} ref={music} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Musics</p>
            <p name="podcast" onClick={handleSelectTypes} ref={podcast} className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    }
        
    </>
  )
}
export default Navbar;