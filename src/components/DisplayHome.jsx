import React, { useState } from 'react'
import Navbar from './Navbar'
import { albums, musics } from '../assets/assets'
import { AlbumItem } from './AlbumItem'
import { SongItem } from './SongItem'
import { useMemo } from 'react'

 const DisplayHome = () => {
  
  const [typeSelect , setTypeSelect] = useState('all')
  const [typeSelected,setTypeSelected] = useState([]);
  const musicItems = [];
  const podcastItems = [];


  musics.map(item => {
    const musicitem = Object.getOwnPropertyDescriptor(item, 'type');
      if (musicitem.value === 'music') {
        musicItems.push(item)
      }

  })
  musics.map(item => {
    const musicitem = Object.getOwnPropertyDescriptor(item, 'type');
      if (musicitem.value === 'podcast') {
        podcastItems.push(item)
      }
  })

  useMemo(()=>{
    switch (typeSelect) {
      case 'all':
        setTypeSelected(musics)
        break;
      case 'podcast':
        setTypeSelected(podcastItems)
        break;
      case 'music':
        setTypeSelected(musicItems)
        break;

    }
  },[typeSelect])
  return (
    <>
        <Navbar setTypeSelect={setTypeSelect}/>
        <div className='mb-4 w-full'>
          <h1 className='my-5 font-bold text-2xl'>New Albums</h1>
          <div className='flex overflow-x-auto justify-center flex-wrap'>
            {albums.map((item,index) =>(
              <AlbumItem key={index} img={item.img} name={item.name} desc={item.desc} id={item.id} />))
            }
          </div>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl '>Today's Musics</h1>
          <div className='flex overflow-auto flex-wrap justify-center'>
            {
              typeSelected.map((item , index) => (
                <SongItem key={index} name={item.name} img={item.img} desc={item.desc} id={item.id} />
              ))
            }
          </div>
        </div>
        
    </>
  )
}
export default DisplayHome;