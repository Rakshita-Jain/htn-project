import React from 'react'
import { Map } from './components/Map';

const App = () => {
  return (
    <div className= "App">
      <h1 className="welcome">Welcome to</h1>
      <div className="doctors">
       <img id="main-pic" alt="doctors"></img>
      </div>
      
      <p className="button-click">Click the button below to chat with our bot and find the best hospital near you</p>
      <div className="button">
          <div className="button-text">
            CHAT NOW
          </div>
      </div>
     
      <Map/>
     </div>
  )
}  
export default App;