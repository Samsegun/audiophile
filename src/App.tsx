import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import GlobalStylesAndFonts from "./fonts/fonts";
import Home from "./pages/Home/index";
import Earphones from "./pages/Earphones";

function App() {
    return (
        <div className='app'>
            <GlobalStylesAndFonts />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='earphones' element={<Earphones />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
