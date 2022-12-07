import { useContext } from "react";
import styled from "styled-components";
import { CartDetails, Checkout } from "../../styles/componentStyles/cartStyles";
import { CartContext } from "../../store/cartContext";
import { getProductNameOnly } from "../../Utils/dataUtils";
import { cartTotalSummary, findCartImgPath } from "../../Utils/cartUtils";

const Wrapper = styled.section`
    /* margin: 2rem 0; */
    padding: 2rem 1.5rem;
    background: #fff;
    border-radius: 8px;

    & .img-name {
        flex-basis: auto;
    }

    .heading {
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1.28571px;
        text-transform: uppercase;
    }

    .details {
        margin: 0.5rem 0 2rem;
    }
`;

export const ItemQty = styled.div`
    align-self: flex-start;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.7;
`;

const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    line-height: 25px;

    & span:first-of-type {
        font-weight: 500;
        font-size: 15px;
        opacity: 0.5;
    }

    & span:last-of-type {
        font-weight: 700;
        font-size: 18px;
    }

    &:last-of-type {
        margin-top: 1.5rem;

        span:last-of-type {
            color: #d87d4a;
        }
    }
`;

const Summary: React.FC<{ checkOut: () => void }> = ({ checkOut }) => {
    const { cart } = useContext(CartContext);
    const { cartTotalPrice, grandTotal, vatInt } = cartTotalSummary(cart);

    return (
        <Wrapper>
            <h2 className='heading'>summary</h2>

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

            <div className='details'>
                <ItemDetails>
                    <span>TOTAL</span>
                    <span>$ {cartTotalPrice}</span>
                </ItemDetails>

                <ItemDetails>
                    <span>SHIPPING</span>
                    <span>$ {cart.length ? 50 : 0}</span>
                </ItemDetails>

                <ItemDetails>
                    <span>VAT (INCLUDED)</span>
                    <span>$ {vatInt}</span>
                </ItemDetails>

                <ItemDetails>
                    <span>GRAND TOTAL</span>
                    <span>$ {grandTotal}</span>
                </ItemDetails>
            </div>

            <Checkout onClick={checkOut}>continue &amp; pay</Checkout>
        </Wrapper>
    );
};

export default Summary;
