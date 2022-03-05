import React, { Component } from "react";
import anime from "animejs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      round: 0,
      done: false,
    };
  }
  onChange = (ev) => {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState({ ...this.state, ...change });
    console.log(this.state, "current state");
  };

  onClick = async (string, value) => {
    console.log(value, "string");
    await anime({
      targets: string,
      keyframes: [
        { translateX: 280, translateY: 100 },
        { translateX: 800 },
        { translateY: 300 },
        { translateX: 300 },
        { rotateZ: 360, duration: 3000 },
      ],
      rotateZ: 360,
      scale: 5,

      duration: 3000,
      loop: false,
    });

    const newTotal = this.state.total + value;
    const nextRound = this.state.round++;
    const state = this.state;
    setTimeout(() => {
      this.setState({ total: newTotal });
    }, 2000);
  };

  onClick1 = () => {
    const finished = { done: true };
    this.setState({ ...this.state, ...finished });
  };

  onClick2 = () => {
    console.log("im working");
    const finished = { done: false };
    this.setState({ ...this.state, ...finished });
  };
  render() {
    const { round, done } = this.state;
    console.log(done, "current round");
    const { onChange, onClick, onClick1, onClick2 } = this;

    const random = () => Math.floor(Math.random() * (100 - 1) + 1);
    const one = random();
    const two = random();
    const three = random();
    const four = random();
    const five = random();
    const dealer = random();
    anime({
      targets: "wrapper3",
      translateX: 400,
      duration: 3000,
      loop: true,
    });
    return (
      <>
        <div className="wrapper3">
          <h1>
            Take as much or as little. Be fifty points or less away from the
            dealer and win!
          </h1>
          <div>
            <h2>Total: {this.state.total} </h2> <br />
            {done === true ? (
              <button onClick={onClick2}>
                Dealer's Total: {dealer}, play again?
              </button>
            ) : (
              <button onClick={onClick1}>I'm done</button>
            )}
          </div>
          <br />
          <div id="red" onClick={() => onClick("#red", one)}>
            {one}
          </div>
          <div id="blue" onClick={() => onClick("#blue", two)}>
            {two}
          </div>
          <div id="orange" onClick={() => onClick("#orange", three)}>
            {three}
          </div>
          <div id="green" onClick={() => onClick("#green", four)}>
            {four}
          </div>
          <div id="purple" onClick={() => onClick("#purple", five)}>
            {five}
          </div>
        </div>
      </>
    );
  }
}

export default App;
