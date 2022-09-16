import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const navTitle = [
  "СКИДКИ",
  "СМАРТФОНЫ",
  "ТЕЛЕВИЗОРЫ",
  " НОУТБУКИ",
  "СТИРАЛЬНЫЕ МАШИНЫ",
  "ХОЛОДИЛЬНИКИ",
  "ПЫЛЕСОСЫ",
  "МИКРОВОЛНОВКИ",
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App title={navTitle} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
