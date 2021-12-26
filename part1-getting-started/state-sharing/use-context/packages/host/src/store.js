import React, { createContext, useContext, useState } from "react";

const CountContext = createContext(0);

export const CountProvider = ({ children }) => (
  <CountContext.Provider value={useState(0)}>{children}</CountContext.Provider>
);

export const useCount = () => useContext(CountContext);
