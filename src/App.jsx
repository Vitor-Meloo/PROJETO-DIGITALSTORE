import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./layout/main";
import {Home} from "./pages/Home"
import 'primeicons/primeicons.css';
export const App = () => {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="/" element={<Home/>}/>  
          </Route>
        </Routes>
      </BrowserRouter>
   );
}

