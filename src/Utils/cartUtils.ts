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
    addToCart: (price: number, slug: string, name: string, qty: number) => void;
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
