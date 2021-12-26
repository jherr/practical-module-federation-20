import React from "react";

import { useCount } from "host/store";

const Header = () => {
  const [count, setCount] = useCount();
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {count}</div>
      <button onClick={() => setCount(0)}>Clear</button>
    </header>
  );
};

export default Header;
