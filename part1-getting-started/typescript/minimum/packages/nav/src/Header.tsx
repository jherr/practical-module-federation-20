import React from "react";

const Header: React.FunctionComponent<{
  appName: string;
}> = ({ appName }) => (
  <div>
    <h1>Header for {appName}</h1>
  </div>
);

export default Header;
