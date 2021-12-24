import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";

import Header from "./Header";

import "./index.scss";

const store = observable({
  count: 0,
});

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header store={store} />
    <div className="mt-10">Nav project</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
