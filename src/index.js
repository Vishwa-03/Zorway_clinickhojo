import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Toaster containerStyle={{
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  }}
  />
  </React.StrictMode>
);
