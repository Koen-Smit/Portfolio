import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";


import reportWebVitals from "./utils/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();
