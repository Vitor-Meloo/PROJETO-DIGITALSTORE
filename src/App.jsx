import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import {Home} from "./pages/Home"
import 'primeicons/primeicons.css';
import NotFound from "./pages/NotFound"

export const App = () => {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>  
            <Route path="*" element={<NotFound/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
   );
}

