import { Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Category from "../pages/Category";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import PrivateRoutes from "./privateRoutes";

const AppRoutes: React.FC = () => {
    return (
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/category/:id/:id' element={<Product />} />

            <Route element={<PrivateRoutes />}>
                <Route path='/checkout' element={<Checkout />} />
            </Route>

            <Route path='*' element={<p>There's nothing here: 404!</p>} />
        </Route>
    );
};

export default AppRoutes;
