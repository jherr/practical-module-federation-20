import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("my-nav/Header"));

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <React.Suspense fallback={<div />}>
      <Header />
    </React.Suspense>
    <div className="mt-10">Home page</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
