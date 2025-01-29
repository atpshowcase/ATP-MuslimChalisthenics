import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Use the root to render the app
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
