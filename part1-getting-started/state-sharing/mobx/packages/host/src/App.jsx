import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

import store from "host/store";

const Header = React.lazy(() => import("my-nav/Header"));

import "./index.scss";

const App = observer(() => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={() => (store.count += 1)}
      >
        Buy me!
      </button>
      <div>Cart count is {store.count}</div>
    </div>
  );
});

ReactDOM.render(<App />, document.getElementById("app"));
