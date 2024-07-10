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
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import RequiresAuth from "./components/RequiresAuth";
function App() {
  return (
    <>
        <MegaMenuWithHover />
      <div className="w-full flex">
        <div className="flex flex-col mx-10 justify-center bg-blue-gray-500 ">
        <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/category/:param" element={<CategoryItems />} />
          <Route path="/cart" element={<RequiresAuth><Cart/></RequiresAuth>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
        <FooterWithSocialLinks />
      {/* <NavBars/> */}
    </>
  );
}

export default App;
