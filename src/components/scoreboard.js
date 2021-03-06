import React from 'react';

class ScoreboardDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreboard: ""
    }
  };

  componentDidMount(){
    this.fetchData('https://afternoon-fjord-26832.herokuapp.com/')
  }

  fetchData = (apiToFetch) => {
    fetch(apiToFetch)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          scoreboard: data,
        })
      })
  }

  display = () => {
    var displayInfo = []

    var sorted = this.getPostsSortedByNewest()
    if(sorted === undefined){
      console.log("")
    }
    else if(sorted.length > 0){
      sorted.forEach((item, i) => {
        var decimalScore = item.score.toFixed(2)
        var score = item.name + " " + "-" + " " + " " + decimalScore + "M"
        displayInfo.push(score)
      });
    }

    return displayInfo

  }

  getPostsSortedByNewest() {
    for(var i = 0; i < this.state.scoreboard.length; i++){
      if(this.state.scoreboard[i].score > 1){
         return this.state.scoreboard.sort(function(postA, postB) {
          var dateA = postA.score
          var dateB = postB.score
          return dateB - dateA
        })
      }
    }
  }


  render(){
    return(
    <div id="scoreboard">
      <center><h1>ScoreBoard</h1>
      {this.display().map((score, index) => {
        return (

          <p>{index + 1}. {score} </p>
        )
      })
    }
      </center>

    </div>
    )
  }


}

export default ScoreboardDisplay