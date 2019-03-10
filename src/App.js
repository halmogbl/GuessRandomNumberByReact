import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    number: 0,
    correctNumber: null
  };

  /*
I will call this function in the input as onChange={this.userInput}
"target" goes to the innput and "value" take its value
*/
  userInput = user => {
    this.setState({ number: +user.target.value });
  };

  createRandomNumber = () => {
    this.setState({ correctNumber: Math.floor(Math.random() * 101) });
  };

  restartTheGame = () => {
    this.setState({ correctNumber: null });
  };

  stoppedTyping = () => {
    if (this.state.number === this.state.correctNumber) {
      document.getElementById("myInput").disabled = true;
    } else {
      document.getElementById("myInput").disabled = false;
    }
  };

  render() {
    // message have all the if statement
    // i will call message in the return

    let message;
    if (this.state.number === this.state.correctNumber) {
      message = <div className="  text-success display-1">You Won</div>;
    } else if (this.state.number === 0) {
      message = <div className=" text-primary display-4"> JUST DO IT </div>;
    } else if (this.state.number === this.state.correctNumber + 10) {
      message = (
        <div className="text-warning">you are close try lower number</div>
      );
    } else if (this.state.number === this.state.correctNumber + 9) {
      message = (
        <div className="text-warning">you are close try lower number </div>
      );
    } else if (this.state.number === this.state.correctNumber + 8) {
      message = (
        <div className="text-warning">you are close try lower number</div>
      );
    } else if (this.state.number === this.state.correctNumber + 7) {
      message = (
        <div className="text-warning">you are close try lower number</div>
      );
    } else if (this.state.number === this.state.correctNumber + 6) {
      message = (
        <div className="text-warning">you are close try lower number </div>
      );
    } else if (this.state.number === this.state.correctNumber + 5) {
      message = (
        <div className="text-warning">you are close try lower number </div>
      );
    } else if (this.state.number === this.state.correctNumber + 4) {
      message = (
        <div className="text-warning">you are close try lower number </div>
      );
    } else if (this.state.number === this.state.correctNumber + 3) {
      message = (
        <div className="text-warning">You Almost there dont give up</div>
      );
    } else if (this.state.number === this.state.correctNumber + 2) {
      message = (
        <div className="text-warning">Next guess is your last Chance </div>
      );
    } else if (this.state.number === this.state.correctNumber + 1) {
      message = <div className="text-warning">One last Chance </div>;
    } else if (this.state.number === this.state.correctNumber - 10) {
      message = (
        <div className="text-warning">you are close try higher number</div>
      );
    } else if (this.state.number === this.state.correctNumber - 9) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 8) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 7) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 6) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 5) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 4) {
      message = (
        <div className="text-warning">you are close try higher number </div>
      );
    } else if (this.state.number === this.state.correctNumber - 3) {
      message = (
        <div className="text-warning">You Almost there dont give up </div>
      );
    } else if (this.state.number === this.state.correctNumber - 2) {
      message = <div className="text-warning">You Almost there</div>;
    } else if (this.state.number === this.state.correctNumber - 1) {
      message = (
        <div className="text-warning ">Next guess is your last Chance </div>
      );
    } else {
      message = <div className="text-danger">Try again that's not close</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://pngimage.net/wp-content/uploads/2018/06/random-numbers-png-6.png"
            className="App-logo "
            alt="logo"
          />
          {!this.state.correctNumber ? (
            <button
              onClick={this.createRandomNumber}
              type="button"
              className=" btn btn-outline-primary btn btn-dark   btn-lg btn-block  align-top text-center Bold text"
            >
              Start the Game
            </button>
          ) : (
            <div>
              <br />
              <h1 className="display-5">Ready To Play </h1>

              <div>
                <br />
                <div className="content guess-controls row ">
                  <div className="input-group  ">
                    <input
                      onKeyUp={this.stoppedTyping}
                      id="myInput"
                      min="0"
                      max="99"
                      type="text"
                      onChange={this.userInput}
                      className="form-control  text-center "
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-lg"
                      placeholder="Guess from 1 - 100   "
                    />
                  </div>
                </div>
                <div>{message}</div>
                <br />
                <button
                  onClick={this.restartTheGame}
                  type="button"
                  className="btn btn-outline-danger btn btn-warrning   btn-lg btn-block  align-top text-center Bold text"
                >
                  Restart !!!
                </button>
              </div>
            </div>
          )}{" "}
          <br />
          <br />
          <div> githup halmogbl </div>
          <div>fork it (download it) and play it </div>
          <div> All rights are reserverd to Hamad Almogbl </div>
        </header>
      </div>
    );
  }
}

export default App;
