import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/product/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route,BrowserRouter } from 'react-router-dom';

const App = () => {
  return (  
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/productlist" element={<ProductList/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;