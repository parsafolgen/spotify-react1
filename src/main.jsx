import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import PlayingViewContextProvider from './context/PlayingViewContext.jsx'
import { LocationContextProvider } from './context/LocationContext.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { SearchContextProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <LocationContextProvider>
      <PlayerContextProvider>
        <PlayingViewContextProvider>
          <SearchContextProvider>

            <AppContextProvider index={document.getElementById('root')}>
                                      <App /> 
            </AppContextProvider>
          </SearchContextProvider>
        </PlayingViewContextProvider>
      </PlayerContextProvider>
    </LocationContextProvider>
         
    </BrowserRouter>
  </React.StrictMode>,
)
