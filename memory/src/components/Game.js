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
    highScore: 0
  };

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  imgClicked = event => {
    console.log(this.shuffle(this.state.imgs))
    this.setState({ score: this.state.score + 1 });
  //  this.setState({ imgs: this.shuffle(this.state.imgs) });
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
