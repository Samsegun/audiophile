import { useContext } from "react";
import styled from "styled-components";
import { CartDetails, Checkout } from "../../styles/componentStyles/cartStyles";
import { CartContext } from "../../store/cartContext";
import { CARTASSETS } from "../../components/Cart/Cart";
import { getProductNameOnly } from "../../Utils/dataUtils";
import { getTotalPrice } from "../../Utils/cartUtils";

const Wrapper = styled.section`
    margin: 2rem 0;
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

const ItemQty = styled.div`
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

const Summary = () => {
    const { cart } = useContext(CartContext);

    const findCartImgPath = (slug: string) => {
        const path = CARTASSETS.find(asset => asset.name === slug);
        return path?.path;
    };

    const cartTotalPrice = cart.length ? getTotalPrice(cart) : 0;
    const grandTotal = cart.length ? getTotalPrice(cart) + 50 : 0;
    const vat = cart.length ? (20 / 100) * getTotalPrice(cart) : 0;
    const vatInt = parseInt(vat.toFixed()).toLocaleString();

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
                    <span>$ {cartTotalPrice.toLocaleString()}</span>
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
                    <span>$ {grandTotal.toLocaleString()}</span>
                </ItemDetails>
            </div>

            <Checkout>continue &amp; pay</Checkout>
        </Wrapper>
    );
};

export default Summary;
