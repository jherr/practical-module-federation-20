import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Carousel = React.lazy(() => import("widget/Carousel"));

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <React.Suspense fallback={<div>Loading</div>}>
      <Carousel />
    </React.Suspense>
    <div>Consumer App</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
