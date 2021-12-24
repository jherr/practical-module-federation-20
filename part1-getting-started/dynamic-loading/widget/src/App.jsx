import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Widget from "./Widget";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>
      Widget: <Widget />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
