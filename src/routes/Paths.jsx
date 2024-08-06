import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import {Home} from "../pages/Home"
import 'primeicons/primeicons.css';
import NotFound from "../pages/NotFound"
import Products from "../pages/Products";
import MyProducts from "../pages/MyProducts";
import Categories from "../pages/Categories";

export const Paths = () => {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/my-products" element={<MyProducts/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
   );
}