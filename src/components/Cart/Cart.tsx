import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import {
    CartWrapper,
    CartDetails,
    Total,
    Checkout,
} from "../../styles/componentStyles/cartStyles";

const CARTASSETS = [
    {
        name: "yx1-earphones",
        path: "/assets/cart/image-yx1-earphones.jpg",
    },
    {
        name: "xx59-headphones",
        path: "/assets/cart/image-xx59-headphones.jpg",
    },
    {
        name: "xx99-mark-one-headphones",
        path: "/assets/cart/image-xx99-mark-one-headphones.jpg",
    },
    {
        name: "xx99-mark-two-headphones",
        path: "/assets/cart/image-xx99-mark-two-headphones.jpg",
    },
    {
        name: "zx7-speaker",
        path: "/assets/cart/image-zx7-speaker.jpg",
    },
    {
        name: "zx9-speaker",
        path: "/assets/cart/image-zx9-speaker.jpg",
    },
];

const Cart = () => {
    const { cart, qtyHandler } = useContext(CartContext);

    const findCartImgPath = (slug: string) => {
        const path = CARTASSETS.find(asset => asset.name === slug);

        return path?.path;
    };

    return (
        <CartWrapper>
            <div className='inner-wrapper'>
                <div className='heading'>
                    <h2>cart ({cart.length})</h2>

                    <button>Remove all</button>
                </div>

                <div className='cart-items-wrapper'>
                    {cart.map((item, id) => {
                        return (
                            <CartDetails key={id}>
                                <div className='img-name'>
                                    <img
                                        src={findCartImgPath(item.slug)}
                                        alt=''
                                    />

                                    <h3>
                                        {item.name}
                                        <span>$ {item.price}</span>
                                    </h3>
                                </div>

                                <div className='qty'>
                                    <button
                                        onClick={() =>
                                            qtyHandler("decrease", item.slug)
                                        }>
                                        -
                                    </button>
                                    <span>{item.qty}</span>
                                    <button
                                        onClick={() =>
                                            qtyHandler("increase", item.slug)
                                        }>
                                        +
                                    </button>
                                </div>
                            </CartDetails>
                        );
                    })}
                </div>

                <Total>
                    <span>TOTAL</span>
                    <span>$ 5,333</span>
                </Total>

                <Checkout>checkout</Checkout>
            </div>
        </CartWrapper>
    );
};

export default Cart;
