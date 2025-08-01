import React from 'react'
import './Head.css'

function Head() {
    function sign(){
        alert("Thank you , your signup process is completed")
    }

    function log(){
        alert(" your Login  process is completed")
    }
    return (

        <div id='first'>
            <div id='logo'>
               <p>. -   🏖🏝🏜 <br/> ಕರ್ನಾಟಕ ಡೈರಿಸ್ </p> 
            </div>
            <div id='line'>
                <li>Where To Go</li>
                <li>Experiences</li>
                <li>Plan Your Trip</li>
                
                

            </div>
            <div id='login'>
                <button onClick={log}  id='login'  > Login</button>
                <button onClick={sign} id='login' >Sign up</button>
                
            </div>
            
        </div>
    )
}

export default Head
