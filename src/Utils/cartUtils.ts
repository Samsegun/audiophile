import { CARTASSETS } from "../components/Cart/Cart";

export enum OperationType {
    DECREASE = "decrease",
    INCREASE = "increase",
}

export interface CartContentTypes {
    price: number;
    slug: string;
    name: string;
    qty: number;
    inCart: boolean;
}

export interface CartContextTypes {
    cart: CartContentTypes[];
    cartNotification: boolean;
    closeNotification: () => void;
    addToCart: (price: number, slug: string, name: string, qty: number) => void;
    removeCartItem: (slug: string) => void;
    resetCart: (cart: CartContentTypes[]) => void;
    qtyHandler: (
        operation: string,
        slug: string,
        cart?: CartContentTypes[]
    ) => void;
}

export function updateAndReturnCartItems(
    cart: CartContentTypes[],
    operation: string,
    slug: string
) {
    const products = cart.map(item => {
        if (item.slug === slug) {
            if (operation === OperationType.DECREASE && item.qty > 1) {
                item.qty--;
                return item;
            }

            if (operation === OperationType.INCREASE) {
                item.qty++;
                return item;
            }
        }
        return item;
    });

    return products;
}

export const findCartImgPath = (slug: string) => {
    const path = CARTASSETS.find(asset => asset.name === slug);
    return path?.path;
};

export const getTotalPrice = (cart: CartContentTypes[]) => {
    const cartQtys = cart.map(item => item.price * item.qty);

    const totalPrice = cartQtys.reduce((item1, item2) => item1 + item2);

    return totalPrice;
};

export const cartTotalSummary = (cart: CartContentTypes[]) => {
    const cartTotalPrice = cart.length ? getTotalPrice(cart) : 0;
    const grandTotal = cart.length ? getTotalPrice(cart) + 50 : 0;
    const vat = cart.length ? (20 / 100) * getTotalPrice(cart) : 0;
    const vatInt = parseInt(vat.toFixed()).toLocaleString();

    return {
        cartTotalPrice: cartTotalPrice.toLocaleString(),
        grandTotal: grandTotal.toLocaleString(),
        vatInt,
    };
};
