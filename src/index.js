import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <div className="pageWrapper">
      <Router>
        <App />
      </Router>
    </div>
  </ThemeProvider>
);
