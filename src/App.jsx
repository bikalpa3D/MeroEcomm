
import { Route, Routes,NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'


function App() {
  return (
    <>
    {/* <Navbars/> */}
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/product'>Products</NavLink>

    </nav>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:productId' element={<ProductDetails />}/>
    </Routes>
    </>
  )
}

export default App
