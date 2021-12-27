import React from "react";

export type HeaderProps = {
  appName: string;
  version: number;
};

export type HeaderComponent = React.FunctionComponent<HeaderProps>;
