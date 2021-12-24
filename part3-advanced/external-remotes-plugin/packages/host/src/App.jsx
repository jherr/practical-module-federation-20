import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Widget from "mfe/Widget";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Host app</div>
    <Widget />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
