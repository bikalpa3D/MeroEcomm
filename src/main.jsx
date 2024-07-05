import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ProductContextProvider } from "./context/ProductContext.jsx";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
        <ThemeProvider>
      <Router>
          <App />
      </Router>
        </ThemeProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
