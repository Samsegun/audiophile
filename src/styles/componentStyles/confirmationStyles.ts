import styled from "styled-components";

export const OrderWrapper = styled.section`
    position: fixed;
    top: 15%;
    left: 50%;
    background: #fff;
    transform: translateX(-50%);
    z-index: 4;
    width: 90%;
    max-width: 540px;
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

        @media screen and (min-width: 768px) {
            display: flex;
            margin: 1.5rem 0;

            & > * {
                flex-grow: 1;
            }
        }

        @media screen and (min-width: 1280px) {
            max-height: 270px;
        }
    }

    .cart-items {
        background: #f1f1f1;
        padding: 0.5rem 1.5rem;
        max-height: 150px;
        overflow-y: scroll;

        @media screen and (min-width: 1280px) {
            max-height: inherit;
        }
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

        @media screen and (min-width: 768px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 0px 8px 8px 0px;
        }

        @media screen and (min-width: 1280px) {
            justify-content: end;
        }
    }

    @media screen and (min-width: 768px) {
        top: 20%;
        padding-bottom: 1rem;
    }
`;
