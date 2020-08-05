import React from 'react';
import { useState } from 'react';

function Play(){

  const [score, setScore] = useState(0);

  const [name, setName] = useState('');

  // const importScore = () => {
  //   var scoreGame = document.getElementById("score")
  //   var score = scoreGame.innerHTML
  //   var numberScore = parseFloat(score)
  //   setScore(numberScore)
  // }

  const mySubmitHandler = (event) => {
    event.preventDefault()
    console.log('my submit handler called')

    var scoreGame = document.getElementById("score")
    var score = scoreGame.innerHTML
    var numberScore = parseFloat(score)
    setScore(numberScore)

    let newScore = {
      name: name,
      score: score
    }

    fetch('https://afternoon-fjord-26832.herokuapp.com/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(newScore)
      })
      .then((response) => {
        console.log(response)
      })
  }

  const myChangeHandler = (event) => {
    setName(event.target.value)
  }

  return(
    <div className="play">
      <center>
        <canvas id="gameScreen" width="1500" height="800"></canvas>
        <div id="submitScore">
        <h1> Game over </h1>
        <div id="score-info">

          <p>Your distance was: </p>
          <p id="score">Score</p>
          
          <form id="submitScoreForm" onSubmit={mySubmitHandler}>
            <p> Enter your name to save your score! </p> 
            <input id="name" type="text" id="nameinput" placeholder="Type your name here" class="form" onChange={myChangeHandler}></input> <br></br>
            <input type="submit" id="submitButton" class="button" value="Submit"></input>
          </form>


        </div>
        
        </div>
      </center>
    </div>
  )
}



export default Play