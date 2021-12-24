import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";

const Header = React.lazy(() => import("my-nav/Header"));

import { store, increment } from "host/store";

import "./index.scss";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={() => dispatch(increment())}
      >
        Buy me!
      </button>
      <div>Cart count is {count}</div>
    </div>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
