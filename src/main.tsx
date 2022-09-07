import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import viteLogo from "./assets/vite.svg";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const favElement: HTMLLinkElement = document.getElementById(
  "fav-icon"
) as HTMLLinkElement;
favElement.href = viteLogo;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/sfd-site">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
