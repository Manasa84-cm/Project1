import React from 'react'
import './Body.css'
function Body() {
  function hi(){
      alert("ಸ್ವಾಗತಗಳು ಕರ್ನಾಟಕ ಡೈರಿಸ್ ಗೆ")

  }
  function hello(){
    location.href="https://www.google.com/maps/place/Karnataka/@14.7673619,73.122755,7.5z/data=!4m6!3m5!1s0x3ba35a4c37bf488f:0x41f1d28cd1757cd5!8m2!3d15.3172775!4d75.7138884!16zL20vMDQ5bHI?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
  }
  function hey() {
    location.href = 'https://youtu.be/Hg3wm8fMSv8'
    
  }
  return (
    <div id='body'>
      <div id='jh'>
        <h1>ನಮಸ್ತೆ ಕರ್ನಾಟಕ ಡೈರಿಸ್</h1>
        <h2>From Packing Bags To Packing Memories</h2> 
      </div>
      <div id='hmm'>
        <h3>"Lost in the beauty of unfamiliar places,<br/> found in the joy of discovery 📸✈<br/> #KarnatakaDiaries #WanderLust"<br/>

Coming Back From Trip With Dirty Clothes 5000 Photos, <br/>an empty wallet🧳🚀🪐</h3>
      </div>
      

      <div id='hol'>
        
        <div id='onclick'>
          <button onClick={hi} id='onclick'>Home</button>
          <button onClick={hello} id='onclick'>Map</button>
          <button onClick={hey} id='onclick'>Overview</button>
        </div>

      </div >


    </div>
  )
}

export default Body