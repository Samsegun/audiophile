import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "./components/Layout/Layout";
import GlobalStylesAndFonts from "./fonts/fonts";
import Home from "./pages/Home/index";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import PrivateRoutes from "./routes/privateRoutes";
import NotFound from "./pages/Error/error-404";

function App() {
    return (
        <div className='app'>
            <GlobalStylesAndFonts />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/category/:id' element={<Category />} />
                    <Route path='/category/:id/:id' element={<Product />} />

                    <Route element={<PrivateRoutes />}>
                        <Route path='/checkout' element={<Checkout />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
