import React, { useEffect, useState } from "react";
import {
    CartContentTypes,
    CartContextTypes,
    updateAndReturnCartItems,
} from "../Utils/cartUtils";

export const CartContext = React.createContext<CartContextTypes>({
    cart: [],
    cartNotification: false,
    closeNotification: () => {},
    addToCart: () => {},
    removeCartItem: () => {},
    resetCart: () => {},
    qtyHandler: () => {},
});

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cart, setCart] = useState<CartContentTypes[]>([]);
    const [cartNotification, setCartNotificaion] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")!));
        }
    }, []);

    const addToCart = (
        price: number,
        slug: string,
        name: string,
        qty: number
    ) => {
        // check if product exist in cart
        const productToAdd = cart.find(item => item.slug === slug);
        if (productToAdd) return;

        const newCart = [...cart, { price, slug, name, qty, inCart: true }];

        localStorage.setItem("cart", JSON.stringify(newCart));

        setCart(newCart);

        setCartNotificaion(true);
    };

    const removeCartItem = (slug: string) => {
        const productToRemove = cart.find(item => item.slug === slug);

        productToRemove!.inCart = false;

        const newCart = cart.filter(item => item.slug !== slug);

        // if cart is empty, close notification
        if (!newCart.length) setCartNotificaion(false);

        localStorage.setItem("cart", JSON.stringify(newCart));

        setCart(newCart);
    };

    const resetCart = (newCart: CartContentTypes[]) => {
        localStorage.setItem("cart", JSON.stringify(newCart));

        setCart([...newCart]);
        setCartNotificaion(false);
    };

    const qtyHandler = (operation: string, slug: string, crt = cart) => {
        const updatedProducts = updateAndReturnCartItems(crt, operation, slug);
        localStorage.setItem("cart", JSON.stringify(updatedProducts));

        setCart(updatedProducts);
    };

    const closeNotification = () => {
        setCartNotificaion(false);
    };

    const contextValue = {
        cart,
        cartNotification,
        closeNotification,
        addToCart,
        removeCartItem,
        resetCart,
        qtyHandler,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
