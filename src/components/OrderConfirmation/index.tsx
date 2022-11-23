import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Checked from "../../assets/checked.png";
import { ItemQty } from "../../pages/Checkout/Summary";
import { CartContext } from "../../store/cartContext";
import { CartDetails, Checkout } from "../../styles/componentStyles/cartStyles";
import { cartTotalSummary, findCartImgPath } from "../../Utils/cartUtils";
import { getProductNameOnly } from "../../Utils/dataUtils";
import { CARTASSETS } from "../Cart/Cart";

const OrderWrapper = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    z-index: 4;
    width: 90%;
    margin: auto;
    padding: 2rem;
    border-radius: 8px;

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        margin: 1.5rem 0 1rem;
        line-height: 28px;
        letter-spacing: 0.9px;
        text-transform: uppercase;
    }

    .order-text {
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 0.5rem;
        opacity: 0.7;
    }

    .items-total {
        margin-bottom: 1.5rem;
    }

    .cart-items {
        background: #f1f1f1;
        padding: 0.5rem 1.5rem;
        max-height: 150px;
        overflow-y: scroll;
    }

    .total {
        background: #000;
        color: #fff;
        padding: 1rem 1.5rem;
        font-weight: 500;
        line-height: 25px;
        text-transform: uppercase;
        border-radius: 0px 0px 8px 8px;

        h2 {
            font-weight: 500;
            font-size: 15px;
            margin-bottom: 0.5rem;
            opacity: 0.7;
        }

        span {
            font-weight: 700;
            font-size: 18px;
        }
    }
`;

const OrderConfirmation = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const { cartTotalPrice } = cartTotalSummary(cart);

    return (
        <OrderWrapper>
            <div>
                <img src={Checked} alt='' />
            </div>

            <h1>
                thank you <br /> for your order
            </h1>

            <p className='order-text'>
                You will receive an email confirmation shortly.
            </p>

            <div className='items-total'>
                <div className='cart-items'>
                    {cart.map((item, idx) => {
                        return (
                            <CartDetails key={idx}>
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

                                <ItemQty>
                                    <span>x{item.qty}</span>
                                </ItemQty>
                            </CartDetails>
                        );
                    })}
                </div>

                <div className='total'>
                    <h2>grand total</h2>
                    <span>$ {cartTotalPrice}</span>
                </div>
            </div>

            <Checkout onClick={() => navigate("/")}>Back to home</Checkout>
        </OrderWrapper>
    );
};

export default OrderConfirmation;
