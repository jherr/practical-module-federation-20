import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clear } from "host/store";

const Header = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {count}</div>
      <button onClick={() => dispatch(clear())}>Clear</button>
    </header>
  );
};

export default Header;
