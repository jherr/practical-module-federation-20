import React from "react";
import ReactDOM from "react-dom";
import { useRecoilState, RecoilRoot } from "recoil";

const Header = React.lazy(() => import("my-nav/Header"));

import { cartCount } from "host/atoms";

import "./index.scss";

const App = () => {
  const [itemCount, setItemCount] = useRecoilState(cartCount);
  const onAddToCart = () => {
    setItemCount(itemCount + 1);
  };
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <React.Suspense fallback={<div />}>
        <Header />
      </React.Suspense>
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
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("app")
);
