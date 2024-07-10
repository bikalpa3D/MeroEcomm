import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { ProductContextProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <ProductContextProvider>
      <FilterContextProvider>
        <ThemeProvider>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </FilterContextProvider>
    </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
