import React, { useContext } from 'react'
import { PlayingViewContext } from '../context/PlayingViewContext';
import { useRef } from 'react';
import { useEffect } from 'react';
import {useSpring ,  animated } from '@react-spring/web'
import { PlayingViewDisplay } from './PlayingViewDisplay';
import { QueueDisplay } from './QueueDisplay';
import { SpeakerDisplay } from './SpeakerDisplay';

const PlayingView = () => {

    const queueBgRef = useRef();


    const {isPlayingView , isQueue , isDisplayPV , isSQ , setIsSpeaker ,  isSpeaker } = useContext(PlayingViewContext)


    const [springs, api] = useSpring(() => ({
            from: { y: 200 , opacity : 0, height:0},
        }))


    useEffect(() => {
        
        if(isSQ){
            api.start({
                from: {
                  y: 200,
                  opacity : 0,
                  height: 0,
                },
                to: {
                  y: 0,
                  opacity : 1,
                  height: 665,
                },
                config: {
                    duration: 200,
                  },
              })
        }
        
        
    })

   
    
  return (
    <>
    {isDisplayPV &&
        <div className='w-[40%] my-2 mx-3 rounded bg-[#121212] overflow-auto flex items-center flex-col p-4 overflow-y-auto '>
        {isPlayingView &&
        <PlayingViewDisplay />
        }    
            <>
                {isSQ &&
                <animated.div style={{...springs}} className='absolute w-[25%] z-30 bg-[#121212] flex flex-col overflow-auto h-[85.8%] transition-transform ' ref={queueBgRef}>
                    {isQueue &&
                    <QueueDisplay />
                    }
                    {isSpeaker &&
                    <SpeakerDisplay setIsSpeaker={setIsSpeaker} />
                    }
                </animated.div>
                }
                    
                
            </>
        </div>
    }
    </>
  )
}
export default PlayingView;