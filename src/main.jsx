import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Get the root element from HTML
const rootElement = document.getElementById("root");

// Create a React root and render the app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
