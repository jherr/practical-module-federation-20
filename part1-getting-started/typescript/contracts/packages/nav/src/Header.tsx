import React from "react";
import { HeaderComponent } from "shared-types";

const Header: HeaderComponent = ({ appName }) => (
  <div>
    <h1>Header for {appName}</h1>
  </div>
);

export default Header;
