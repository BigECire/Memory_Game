import React, { Component } from "react";

class Game extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };



  render() {
    return (
      <div class="container">
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">Memory Game</li>
          <li class="list-group-item">Click an Image</li>
          <li class="list-group-item">Score: 0 | High Score: 0</li>
        </ul>
        <div class="row">
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot1" />
          </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot2" />
          </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot3" />
          </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot4" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot5"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot6"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot7"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot8"/>
        </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot9"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot10"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot11"/>
        </div>
          <div class="col-sm">
            <img src="..." alt="..." class="img-thumbnail" id="slot12"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Game;
