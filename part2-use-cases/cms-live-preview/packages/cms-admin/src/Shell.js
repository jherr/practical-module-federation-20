import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import "./index.scss";

const client = new QueryClient();

const Shell = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);

export default Shell;
