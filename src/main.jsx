import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Self-hosted fonts (no external requests)
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
