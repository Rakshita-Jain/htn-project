import React from 'react'
import { Map } from './components/Map';

const App = () => {
  return (
    <div className= "App">
      <h1 className="welcome">Welcome to Healthtech!</h1>
      <div className="doctors">

      </div>
    
      <p className="button-click">Click the button below to chat with our</p> 
      <p className="button-click"> bot and find the best hospital near you</p>
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