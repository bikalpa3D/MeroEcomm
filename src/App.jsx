import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import NavBars from "./components/NavBars";

function App() {
  return (
    <>
    <NavBars/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
