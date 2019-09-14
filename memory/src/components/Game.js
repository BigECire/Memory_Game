import React, { Component } from "react";
import ImgThing from "../components/imgThing";

class Game extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    score: 0,
    imgs: ["assets/images/black_panther.jpg",
          "assets/images/black_widow.jpg",
          "assets/images/captain_america.jpg",
          "assets/images/dr_strange.jpg",
          "assets/images/falcon.jpg",
          "assets/images/hawkeye.jpg",
          "assets/images/hulk.jpg",
          "assets/images/ironman.jpg",
          "assets/images/scarlet_witch.jpg",
          "assets/images/spiderman.jpg",
          "assets/images/thor.jpg",
          "assets/images/vision.jpg"],
    guesses: [],
    highScore: 0
  };

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  repeatChecker = (arr, guess) =>{
    let outcome = false;
    for (let i = 0; i < arr.length; i++) {
      if (guess === arr[i]){
      outcome = true;}
    }
    return outcome
  }

  imgClicked = event => {
    console.log(this.state.guesses)
    let guess = event.target.attributes.getNamedItem("src").value
    if(this.repeatChecker(this.state.guesses, guess)){
      this.setState({ score: 0, guesses: [] });
    }else{
      let newGuess =this.state.guesses
      newGuess.push(guess)
      this.setState({ score: this.state.score + 1, guesses: newGuess});
    }
    
    this.shuffle(this.state.imgs);
  }

  render() {
    return (
      <div className="container">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">Memory Game</li>
          <li className="list-group-item">Click an Image</li>
          <li className="list-group-item">Score: {this.state.score} | High Score: {this.state.highScore}</li>
        </ul>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            {this.state.imgs.map(imgs => (
              <ImgThing imgClicked= {this.imgClicked} imgs = {imgs}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
