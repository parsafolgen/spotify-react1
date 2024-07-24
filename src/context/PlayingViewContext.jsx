import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const PlayingViewContext = createContext(null);

const PlayingViewContextProvider = (props) => {
    const [isPlayingView,setIsPlayingView] = useState(false);
    const [isQueue,setIsQueue] = useState(false);
    const [isSpeaker,setIsSpeaker] = useState(false);
    const isDisplayPV = [isQueue , isPlayingView , isSpeaker].some(value => value === true); 
    const isSQ = [ isSpeaker , isQueue].some(value => value === true);


    
    const contextViewValue = {
            isPlayingView,setIsPlayingView,
            isQueue,setIsQueue,
            isDisplayPV,
            isSpeaker,setIsSpeaker,
            isSQ,
        }
  return (
    <PlayingViewContext.Provider value={contextViewValue}>
        {props.children}
    </PlayingViewContext.Provider>
  )
}
export default PlayingViewContextProvider;
