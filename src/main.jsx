import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import App from "./App.jsx";
import BootstrapPlugin from "@/Plugins/BootstrapPlugin";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/assets/scss/style.scss";
import "@/assets/css/rtl.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <BootstrapPlugin />
    </ThemeProvider>
  </React.StrictMode>
);
