import { useContext, useState } from "react";
import styled from "styled-components";
import { ItemQty } from "../../pages/Checkout/Summary";
import { CartContext } from "../../store/cartContext";
import { CartDetails } from "../../styles/componentStyles/cartStyles";
import { findCartImgPath } from "../../Utils/cartUtils";
import { getProductNameOnly } from "../../Utils/dataUtils";

const CartItemsBox = styled.div`
    button {
        display: block;
        margin: 12px auto 25px;
        font-weight: 700;
        font-size: 12px;
        text-align: center;
        border: none;
        opacity: 0.5;
        cursor: pointer;
    }

    hr {
        opacity: 0.5;
    }
`;

const CartItemsBody = () => {
    const [showMore, setShowMore] = useState(false);
    const { cart } = useContext(CartContext);

    const cartLength = cart.length ? cart.length - 1 : 0;

    const OrderItems = () => {
        if (!showMore && cart.length) {
            return (
                <CartDetails>
                    <div className='img-name'>
                        <img src={findCartImgPath(cart[0].slug)} alt='' />

                        <h3>
                            {getProductNameOnly(cart[0].name)}
                            <span>$ {cart[0].price.toLocaleString()}</span>
                        </h3>
                    </div>

                    <ItemQty>
                        <span>x{cart[0].qty}</span>
                    </ItemQty>
                </CartDetails>
            );
        }

        return (
            <>
                {cart.map((item, idx) => {
                    return (
                        <CartDetails key={idx}>
                            <div className='img-name'>
                                <img src={findCartImgPath(item.slug)} alt='' />

                                <h3>
                                    {getProductNameOnly(item.name)}
                                    <span>$ {item.price.toLocaleString()}</span>
                                </h3>
                            </div>

                            <ItemQty>
                                <span>x{item.qty}</span>
                            </ItemQty>
                        </CartDetails>
                    );
                })}
            </>
        );
    };

    return (
        <CartItemsBox>
            <OrderItems />

            <hr />

            <button onClick={() => setShowMore(prev => !prev)}>
                {showMore ? "View less" : `and ${cartLength} other item(s)`}
            </button>
        </CartItemsBox>
    );
};

export default CartItemsBody;
