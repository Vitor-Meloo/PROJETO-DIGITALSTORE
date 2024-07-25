import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>        
);
}
 