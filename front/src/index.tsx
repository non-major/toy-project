import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/Globalstyles";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
