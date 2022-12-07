import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../store/cartContext";
import {
    CartWrapper,
    CartDetails,
    Total,
    Checkout,
} from "../../styles/componentStyles/cartStyles";
import { findCartImgPath, getTotalPrice } from "../../Utils/cartUtils";
import { getProductNameOnly } from "../../Utils/dataUtils";

export const CARTASSETS = [
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
    const [checkoutBtn, setCheckOutBtn] = useState(true);
    const { cart, qtyHandler, resetCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        cart.length < 1 ? setCheckOutBtn(true) : setCheckOutBtn(false);
    }, [cart.length]);

    const cartTotalPrice = cart.length ? getTotalPrice(cart) : 0;

    return (
        <CartWrapper>
            <div className='inner-wrapper'>
                <div className='heading'>
                    <h2>cart ({cart.length})</h2>

                    <button onClick={resetCart.bind(null, [])}>
                        Remove all
                    </button>
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
                                        {getProductNameOnly(item.name)}
                                        <span>
                                            $ {item.price.toLocaleString()}
                                        </span>
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
                    <span>$ {cartTotalPrice.toLocaleString()}</span>
                </Total>

                <Checkout
                    disabled={checkoutBtn}
                    onClick={() => navigate("/checkout")}>
                    checkout
                </Checkout>
            </div>
        </CartWrapper>
    );
};

export default Cart;
