import React from "react";
import { observer } from "mobx-react";

import store from "host/store";

const Header = () => {
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {store.count}</div>
      <button onClick={() => (store.count = 0)}>Clear</button>
    </header>
  );
};

export default observer(Header);
