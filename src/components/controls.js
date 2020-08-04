import upKey from '../images/up_key.png';
import leftKey from '../images/left_key.png'
import rightKey from '../images/right_key.png'
import muteKey from '../images/mute_key.png'
import unMuteKey from '../images/unmute_key.png'
import pause from '../images/pause_key.png'
import unpause from '../images/unpause_key.png'
// import '../media/App.css';

import React from 'react';

function Controls(){
  return(
    <div className="controls">
      <center>
        <div class="background-container">
        <div class="about-images-container">
          <div>
            <center>
              <div class="grid-item">
              <img src={leftKey} alt="leftkey" id="left_key"></img>
              <p> Use "Left Key" to walk left</p>
              </div>

              <div class="grid-item">
              <img src={muteKey} alt="mutekey" id="mute_key"></img>
              <p> Use "M Key" to mute audio </p>
              </div>
            </center>
          </div>

         <div>
          <center>
            <div class="grid-item">
            <img src={upKey} alt="upkey" id="up_key"></img>
            <p> Use "Up Key" to jump </p>
            </div>

            <div class="grid-item">
            <img src={unMuteKey} alt="unmutekey" id="unmute_key"></img>
            <p> Use "N Key" to unmute audio </p>
            </div>

            <div class="grid-item">
            <img src={unpause} alt="pausekey" id="unpause"></img>
            <p> Use "O Key" to unpause game </p>
            </div>
         </center>
        </div>

        <div>
         <center>
            <div class="grid-item">
            <img src={rightKey} alt="rightkey" id="right_key"></img>
            <p> Use "Right Key" to walk right </p>
            </div>

            <div class="grid-item">
            <img src={pause} alt="pausekey" id="pause"></img>
            <p> Use "P Key" to pause game </p>
            </div>
         </center>
        </div>


        </div>
        </div>

      </center>
    </div>

  )
}

export default Controls
