import React, { useState } from "react";
import {
    CartContentTypes,
    CartContextTypes,
    updateAndReturnCartItems,
} from "../Utils/cartUtils";

export const CartContext = React.createContext<CartContextTypes>({
    cart: [],
    addToCart: () => {},
    resetCart: () => {},
    qtyHandler: () => {},
});

const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cart, setCart] = useState<CartContentTypes[]>([]);

    const addToCart = (
        price: number,
        slug: string,
        name: string,
        qty: number
    ) => {
        // check if product is in cart
        const productToAdd = cart.find(item => item.slug === slug);

        if (productToAdd) return;

        const newCart = [...cart, { price, slug, name, qty, inCart: true }];

        setCart(newCart);
    };

    const resetCart = (newCart: CartContentTypes[]) => {
        setCart([...newCart]);
    };

    const qtyHandler = (operation: string, slug: string, crt = cart) => {
        const updatedProducts = updateAndReturnCartItems(crt, operation, slug);
        setCart(updatedProducts);
    };

    const contextValue = {
        cart,
        addToCart,
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
