import ReactDOM from "react-dom/client";
import Layout from "./layout/Layout";
import "./styles/index.css";
import "./styles/LightDarkModeStyle.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
