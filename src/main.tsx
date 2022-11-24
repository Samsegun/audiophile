import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CartContextProvider from "./store/cartContext";
import MobileNavContextProvider from "./store/mobileNavContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MobileNavContextProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartContextProvider>
        </MobileNavContextProvider>
    </React.StrictMode>
);
