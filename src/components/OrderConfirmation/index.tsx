import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checked from "../../assets/checked.png";
import { CartContext } from "../../store/cartContext";
import { Checkout } from "../../styles/componentStyles/cartStyles";
import {
    ItemsTotal,
    OrderWrapper,
} from "../../styles/componentStyles/confirmationStyles";
import { cartTotalSummary } from "../../Utils/cartUtils";
import CartItemsBody from "./OrderItems";

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

            <ItemsTotal>
                <div className='cart-items'>
                    <CartItemsBody />
                </div>

                <div className='total'>
                    <h2>grand total</h2>
                    <span>$ {cartTotalPrice}</span>
                </div>
            </ItemsTotal>

            <Checkout onClick={() => navigate("/")}>Back to home</Checkout>
        </OrderWrapper>
    );
};

export default OrderConfirmation;
