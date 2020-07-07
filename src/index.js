import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./assets/font-awesome/css/font-awesome.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
