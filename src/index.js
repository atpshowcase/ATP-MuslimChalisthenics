import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ================================
// Render React App
// ================================
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ================================
// HARD ANTI DEVTOOLS (PRODUCTION)
// ================================
if (process.env.NODE_ENV === "production") {
  const THRESHOLD = 160;

  const killPage = () => {
    // Hancurkan DOM
    document.documentElement.innerHTML = "";

    // Redirect (biar kelihatan "close")
    window.location.replace("about:blank");

    // Freeze CPU (opsional, tapi efektif)
    while (true) {}
  };

  // 1️⃣ Detect resize DevTools
  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > THRESHOLD || heightDiff > THRESHOLD) {
      killPage();
    }
  }, 300);

  // 2️⃣ Detect debugger open
  setInterval(() => {
    const start = performance.now();
    debugger;
    if (performance.now() - start > 100) {
      killPage();
    }
  }, 1000);

  // 3️⃣ Block common shortcuts
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      killPage();
    }
  });

  // 4️⃣ Disable right click
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    killPage();
  });
}
