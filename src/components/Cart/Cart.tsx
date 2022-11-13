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
        path: "/assets/cart/image-xx99mark-one-headphones.jpg",
    },
    {
        name: "xx99-mark-two-headphones",
        path: "/assets/cart/image-xx99mark-two-headphones.jpg",
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
    return (
        <CartWrapper>
            <div className='inner-wrapper'>
                <div className='heading'>
                    <h2>cart (3)</h2>

                    <button>Remove all</button>
                </div>

                <CartDetails>
                    <div className='img-name'>
                        <img src={CARTASSETS[0].path} alt='' />

                        <h3>
                            xx99 mk ii
                            <span>$ 2,999</span>
                        </h3>
                    </div>

                    <div className='qty'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </CartDetails>

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
