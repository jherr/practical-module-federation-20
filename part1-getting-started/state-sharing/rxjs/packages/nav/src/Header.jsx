import React from "react";

import { useCount } from "host/store";

const Header = () => {
  const [count, { clear }] = useCount();
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {count}</div>
      <button onClick={clear}>Clear</button>
    </header>
  );
};

export default Header;
