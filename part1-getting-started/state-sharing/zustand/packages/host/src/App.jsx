import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("my-nav/Header"));

import { useCount } from "host/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useCount();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={increment}
      >
        Buy me!
      </button>
      <div>Cart count is {count}</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
