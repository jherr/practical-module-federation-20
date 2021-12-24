import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

const Header = React.lazy(() => import("my-nav/Header"));

import "./index.scss";

const store = observable({
  count: 0,
});

const App = observer(({ store }) => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <React.Suspense fallback={<div />}>
        <Header store={store} />
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

ReactDOM.render(<App store={store} />, document.getElementById("app"));
