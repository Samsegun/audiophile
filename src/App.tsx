import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStylesAndFonts from "./fonts/fonts";
import Home from "./pages/Home/index";
import Earphones from "./pages/Earphones";
import Product from "./pages/Product";
import MobileNavContextProvider from "./store/mobileNavContext";

function App() {
    return (
        <div className='app'>
            <MobileNavContextProvider>
                <GlobalStylesAndFonts />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path='earphones' element={<Earphones />} />
                            <Route path='product/:id' element={<Product />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </MobileNavContextProvider>
        </div>
    );
}

export default App;
