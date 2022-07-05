import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

import "./index.css";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ResultContextProvider>
);
