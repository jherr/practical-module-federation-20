import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "host/store";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <Provider store={store}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">Nav project</div>
    </div>
  </Provider>
);
ReactDOM.render(<App />, document.getElementById("app"));
