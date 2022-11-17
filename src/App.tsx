import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStylesAndFonts from "./fonts/fonts";
import Home from "./pages/Home/index";
import MobileNavContextProvider from "./store/mobileNavContext";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CartContextProvider from "./store/cartContext";

function App() {
    return (
        <div className='app'>
            <MobileNavContextProvider>
                <CartContextProvider>
                    <GlobalStylesAndFonts />
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route
                                    path='/category/:id'
                                    element={<Category />}
                                />
                                <Route
                                    path='/category/:id/:id'
                                    element={<Product />}
                                />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
            </MobileNavContextProvider>
        </div>
    );
}

export default App;
