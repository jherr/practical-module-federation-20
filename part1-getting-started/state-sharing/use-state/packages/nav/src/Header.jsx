import React from "react";

// const Header = ({ count }) => {
//   const onClear = () => {};
//   return (
//     <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
//       <div className="flex-grow">Header - Cart count is {count}</div>
//       <button onClick={onClear}>Clear</button>
//     </header>
//   );
// };

const Header = ({ count, onClear }) => {
  return (
    <header className="text-5xl font-bold p-5 bg-blue-500 text-white flex">
      <div className="flex-grow">Header - Cart count is {count}</div>
      <button onClick={onClear}>Clear</button>
    </header>
  );
};

export default Header;
