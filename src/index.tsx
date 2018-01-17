import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app";
import "./styles/style.scss";

const ROOT = document.getElementById("app");

ReactDOM.render(<App name="Sarasa" />, ROOT);
