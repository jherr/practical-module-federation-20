import React from "react";
import { useRecoilState } from "recoil";

import { cartCount } from "host/atoms";

const Header = () => {
  const [itemCount, setItemCount] = useRecoilState(cartCount);
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {itemCount}</div>
      <button onClick={() => setItemCount(0)}>Clear</button>
    </header>
  );
};

export default Header;
