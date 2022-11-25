import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checked from "../../assets/checked.png";
import { ItemQty } from "../../pages/Checkout/Summary";
import { CartContext } from "../../store/cartContext";
import { CartDetails, Checkout } from "../../styles/componentStyles/cartStyles";
import { OrderWrapper } from "../../styles/componentStyles/confirmationStyles";
import { cartTotalSummary, findCartImgPath } from "../../Utils/cartUtils";
import { getProductNameOnly } from "../../Utils/dataUtils";

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
