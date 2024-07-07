import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import NavBars from "./components/NavBars";
import { MegaMenuWithHover } from "./components/NewNav";
import CategoryItems from "./pages/CategoryItems";
import Sidebar from "./components/Sidebar";
import { FooterWithSocialLinks } from "./components/FooterWithSocialLinks";
function App() {
  return (
    <>
        <MegaMenuWithHover />
      <div className="w-[20%] flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/category/:param" element={<CategoryItems />} />
        </Routes>
      </div>
        <FooterWithSocialLinks />
      {/* <NavBars/> */}
    </>
  );
}

export default App;
