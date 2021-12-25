import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "nav/Header";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
