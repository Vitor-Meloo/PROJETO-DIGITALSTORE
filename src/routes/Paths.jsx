import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import {Home} from "../pages/Home"
import 'primeicons/primeicons.css';
import NotFound from "../pages/NotFound"
import Products from "../pages/Products";
import MyProducts from "../pages/MyProducts";
import Categories from "../pages/Categories";
import Purchase from "../pages/Purchase";
import Confirm from "../pages/Confirm";
import Sucess from "../pages/Sucess"

export const Paths = () => {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/purchase/:name/:price/:image" element={<Purchase/>}/>
            <Route path="/products/purchase/confirm/:name/:price/:image" element={<Confirm/>}/>
            <Route path="/products/purchase/confirm/sucess" element={<Sucess/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/my-products" element={<MyProducts/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
   );
}