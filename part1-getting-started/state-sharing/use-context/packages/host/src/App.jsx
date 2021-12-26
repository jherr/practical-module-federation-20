import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "my-nav/Header";
import { CountProvider, useCount } from "host/store";

import "./index.scss";

const App = () => {
  const [itemCount, setItemCount] = useCount();
  const onAddToCart = () => {
    setItemCount(itemCount + 1);
  };
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="mt-10">Hi there, I'm some cool product.</div>
      <button
        className="px-5 py-2 bg-green-500 text-white rounded-xl"
        onClick={onAddToCart}
      >
        Buy me!
      </button>
      <div>Cart count is {itemCount}</div>
    </div>
  );
};
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
