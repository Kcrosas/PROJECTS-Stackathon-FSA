import React, { Component } from "react";
import anime from "animejs";

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: ".square",
      translateX: 280,
      translateY: 100,
      rotateZ: 360,
      scale: 5,
      duration: 3000,
      loop: true,
    };
  }
  onChange = (ev) => {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState({ ...this.state, ...change });
    console.log(this.state, "current state");
  };
  onClick1 = () => {
    const elements = document.getElementsByClassName("square");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    console.log("you clicked me");
    const currentDiv = document.getElementsByClassName("wrapper1");

    const newDiv = document.createElement("div");
    newDiv.className = "anotherOne";

    const creator = () => {
      const newDiv = document.createElement("div");
      newDiv.className = "anotherOne";
      return newDiv;
    };
    const stager = [
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
      creator(),
    ];
    console.log(stager);
    const parent = document.getElementsByClassName("wrapper1");
    var docFrag = document.createDocumentFragment();
    for (var i = 0; i < stager.length; i++) {
      docFrag.appendChild(stager[i]); // Note that this does NOT go to the DOM
    }
    parent[0].appendChild(docFrag);
    this.setState({ ...this.state });
  };
  onClick = () => {
    // console.log("you clicked me");
    // const newDiv = document.createElement("div");
    // newDiv.className = "anotherOne";
    // const currentDiv = document.getElementById("wrapper");
    // document.body.insertBefore(newDiv, currentDiv);
    const complex = {
      targets: ".square",
      keyframes: [
        { translateX: 500 },
        { translateY: 350 },
        { translateX: 100 },
        { translateY: 100 },
      ],
      duration: 4000,
      loop: true,
    };
    this.setState({ ...complex });
  };
  render() {
    const { translateX, translateY, rotateZ, scale, duration } = this.state;
    console.log(this.state, "current render");
    const { onChange, onClick, onClick1 } = this;

    //  anime({

    //   })

    anime(this.state);
    anime({
      targets: ".nextSquare",
      keyframes: [{ translateX: 500 }, { translateX: 40 }, { translateX: 500 }],
      duration: 6000,
      loop: true,
    });
    anime({
      targets: ".anotherOne",
      translateX: function () {
        return anime.random(50, 500);
      },
      delay: anime.stagger(100, { from: "last" }),
      // translateY: anime.stagger(50),
      translateY: function () {
        return anime.random(0, 200);
      },
      rotateZ: function () {
        return anime.random(180, 720);
      },
      scale: function () {
        return anime.random(3, 10);
      },
      easing: "easeOutInCirc",

      duration: 2000,
      loop: true,
    });
    return (
      <>
        <h1>An Introduction to Anime.js</h1>
        {/* <div className="nextSquare"></div> */}

        <p>
          Thank you for visiting my page. This is a brief introduction to the
          powerful but simple animation engine API known as Anime.js. We will
          explore some of the basic functionalities by directly manipulating the
          blue square you see here
        </p>
        <table>
          <tbody>
            <tr>
              <td>Change horizontal slide (translateX):</td>
              <td>
                <input
                  type="range"
                  value={translateX}
                  name="translateX"
                  min="100"
                  max="500"
                  onChange={onChange}
                />
                <input
                  type="number"
                  value={translateX}
                  name="translateX"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Change vertical slide (translateY):</td>
              <td>
                <input
                  type="range"
                  value={translateY}
                  name="translateY"
                  min="100"
                  max="360"
                  onChange={onChange}
                />
                <input
                  type="number"
                  value={translateY}
                  name="translateY"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Change rotation attribute (rotateZ):</td>
              <td>
                <input
                  type="range"
                  value={rotateZ}
                  name="rotateZ"
                  min="180"
                  max="700"
                  onChange={onChange}
                />
                <input
                  type="number"
                  value={rotateZ}
                  name="rotateZ"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Change scaling (scale):</td>
              <td>
                <input
                  type="range"
                  value={scale}
                  name="scale"
                  min="1"
                  max="30"
                  onChange={onChange}
                />
                <input
                  type="number"
                  value={scale}
                  name="scale"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Change animation duration (duration):</td>
              <td>
                <input
                  type="range"
                  value={duration}
                  name="duration"
                  min="1000"
                  max="8000"
                  onChange={onChange}
                />
                <input
                  type="number"
                  value={duration}
                  name="duration"
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td>Let's try something cool</td>
              <td>
                <button onClick={onClick}>Click Here</button>
                <button onClick={onClick1}>Click For More!</button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default App2;
