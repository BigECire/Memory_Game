import React, { Component } from "react";
import ImgThing from "../components/imgThing";
import BlackPanther from "../assets/images/black_panther.jpg"
import BlackWidow from "../assets/images/black_widow.jpg"
import CaptainAmerica from "../assets/images/captain_america.jpg"
import DrStrange from "../assets/images/dr_strange.jpg"
import Falcon from "../assets/images/falcon.jpg"
import Hawkeye from "../assets/images/hawkeye.jpg"
import Hulk from "../assets/images/hulk.jpg"
import Ironman from "../assets/images/ironman.jpg"
import ScarletWitch from "../assets/images/scarlet_witch.jpg"
import Spiderman from "../assets/images/spiderman.jpg"
import Thor from "../assets/images/thor.jpg"
import Vision from "../assets/images/vision.jpg"

class Game extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    score: 0,
    imgs: [BlackPanther,
      BlackWidow,
      CaptainAmerica,
      DrStrange,
      Falcon,
      Hawkeye,
      Hulk,
      Ironman,
      ScarletWitch,
      Spiderman,
      Thor,
      Vision],
    guesses: [],
    highScore: 0
  };

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  repeatChecker = (arr, guess) => {
    let outcome = false;
    for (let i = 0; i < arr.length; i++) {
      if (guess === arr[i]) {
        outcome = true;
      }
    }
    return outcome
  }

  imgClicked = event => {
    console.log(this.state.guesses)
    let guess = event.target.attributes.getNamedItem("src").value
    if (this.repeatChecker(this.state.guesses, guess)) {
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
      this.setState({ score: 0, guesses: [] });
    } else {
      let newGuess = this.state.guesses
      newGuess.push(guess)
      this.setState({ score: this.state.score + 1, guesses: newGuess });
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
              <ImgThing imgClicked={this.imgClicked} imgs={imgs} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
