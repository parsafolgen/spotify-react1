import React from 'react'
import Navbar from './Navbar'
import {browse,} from '../assets/assets'
import { SearchItem } from './SearchItem'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext'

export const DisplaySearch = () => {

  const navigate = useNavigate();

  const {isSearchFull , filterAlbumData , filterMusicData} = useContext(SearchContext);
  const {playWithId} = useContext(PlayerContext);


  return (
    <>
        <Navbar />
        {isSearchFull
        ?<div className='flex flex-col gap-5 py-5'>
          {filterAlbumData.map((item , index) => (
            <div className='flex gap-4 hover:bg-zinc-600 rounded-md p-2 cursor-default'
            onClick={() => navigate(`/album/${item.id}`)}
            key={index}>
              <img className='w-40 rounded-md' src={item.img} />
              <div className='flex flex-col gap-5'>
                <p>{item.name}</p>
                <p className='w-48'>{item.desc}</p>
              </div>
              
            </div>
          ) )

          }
          {filterMusicData.map((item , index) => (
            <div key={index} 
            onClick={() => {playWithId(item.id)}}
            className='flex gap-5 hover:bg-zinc-600 rounded-md p-2 cursor-default'>
              <img className='w-24 rounded-md' src={item.img} />
              <div>
                <p>{item.name}</p>
                <p>{item.singer}</p>
                <p>{item.album}</p>
              </div>
              
            </div>
          ))}
        </div>
        :<div className='py-14 px-1'>
          <div className=''>
            <p className='font-bold text-2xl '>Browse all</p>
            <div className='w-full py-4  grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 '>
              {
                browse.map((item,index) => (
                  <SearchItem key={index} id={item.id} name={item.name} img={item.img} color={item.color} />
                ))
              }
            </div>
          </div>
        </div>
        }
        
    </>
  )
}
