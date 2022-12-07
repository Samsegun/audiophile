import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cartContext";
import { Wrapper, ProductText, CartButtons } from "../../styles/Product";
import { updateAndReturnCartItems } from "../../Utils/cartUtils";
import { splitName } from "../../Utils/dataUtils";

enum OperationType {
    DECREASE = "decrease",
    INCREASE = "increase",
}

interface ProductProps {
    id: number;
    slug: string;
    new: boolean;
    price: number;
    name: string;
    description: string;
    category: string;
    categoryImage: {};
    image: { mobile: string; tablet: string; desktop: string };
    features: string;
    gallery: {};
    includes: {}[];
    others: {}[];
}

interface Props {
    item: ProductProps[];
    id: string | undefined;
}

const ProductAndCartDetails: React.FC<Props> = ({ item }) => {
    const [qty, setQty] = useState<number>(1);

    // this useEffect ensures qty starts from
    // one when this component recieves a new item
    useEffect(() => {
        setQty(1);
    }, [item[0].slug]);

    const { addToCart, removeCartItem, cart, resetCart } =
        useContext(CartContext);

    const productDetails = () => {
        const queriedItem = cart.find(
            cartItem => cartItem.slug === item[0].slug
        );

        const { description, new: productIsNew, image } = item[0];

        if (queriedItem) {
            const product = {
                ...queriedItem,
                description,
                productIsNew,
                image,
            };
            return product;
        } else {
            const product = { ...item[0], qty, productIsNew: item[0].new };
            return product;
        }
    };

    const product = productDetails();

    const { firstLine, secondLine } = splitName(product.name);

    const routeQtyHandler = (operation: string, slug: string) => {
        // check if item is in cart
        const queriedItem = cart.find(cartItem => cartItem.slug === slug);

        // if item is in cart, *if* conditional block runs else
        // *else* conditional block runs
        if (queriedItem) {
            const updatedCart = updateAndReturnCartItems(cart, operation, slug);
            resetCart(updatedCart);
            return;
        } else {
            if (operation === OperationType.DECREASE && qty > 1) {
                setQty(qty - 1);
            }

            if (operation === OperationType.INCREASE) {
                setQty(qty + 1);
            }
        }
    };

    const AddOrRemoveItem: React.JSXElementConstructor<{
        price: number;
        slug: string;
        name: string;
        qty: number;
    }> = ({ price, slug, name, qty }) => {
        if (cart.find(item => item.slug === slug)) {
            return (
                <button
                    className='cart-btn'
                    onClick={removeCartItem.bind(null, slug)}>
                    remove from cart
                </button>
            );
        }

        return (
            <button
                className='cart-btn'
                onClick={addToCart.bind(null, price, slug, name, qty)}>
                add to cart
            </button>
        );
    };

    return (
        <Wrapper>
            <div className='img-wrapper'>
                <picture>
                    <source
                        srcSet={product.image.desktop}
                        media='(min-width: 1280px)'
                    />
                    <source
                        srcSet={product.image.tablet}
                        media='(min-width: 768px)'
                    />
                    <source srcSet={product.image.mobile} />
                    <img src={product.image.mobile} alt={product.name} />
                </picture>
            </div>

            <ProductText>
                {product.productIsNew && (
                    <span className='new'>new product</span>
                )}

                <h1>
                    {firstLine}
                    <br />
                    {secondLine}
                </h1>

                <p className='desc'>{product.description}</p>

                <span className='price'>
                    $ {product.price.toLocaleString()}
                </span>

                <CartButtons>
                    <div className='qty'>
                        <button
                            onClick={routeQtyHandler.bind(
                                null,
                                OperationType.DECREASE,
                                product.slug
                            )}>
                            -
                        </button>
                        <span>{product.qty}</span>
                        <button
                            onClick={routeQtyHandler.bind(
                                null,
                                OperationType.INCREASE,
                                product.slug
                            )}>
                            +
                        </button>
                    </div>

                    <AddOrRemoveItem
                        price={product.price}
                        slug={product.slug}
                        name={product.name}
                        qty={product.qty}
                    />
                </CartButtons>
            </ProductText>
        </Wrapper>
    );
};

export default ProductAndCartDetails;
