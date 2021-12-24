import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import Header from "./Header";

import "./index.scss";

const App = () => (
  <RecoilRoot>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">Nav project</div>
    </div>
  </RecoilRoot>
);
ReactDOM.render(<App />, document.getElementById("app"));
