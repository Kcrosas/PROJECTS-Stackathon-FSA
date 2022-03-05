import React from "react";
import { render } from "react-dom";
import App from "../components/app.js";
import App2 from "../components/app2.js";

render(<App />, document.querySelector("#root"));
render(<App2 />, document.querySelector("#root2"));
