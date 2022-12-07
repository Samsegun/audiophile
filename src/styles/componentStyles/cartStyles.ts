import styled from "styled-components";

export const CartWrapper = styled.div`
    position: fixed;
    background: #fff;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 327px;
    max-height: 488px;
    border-radius: 8px;
    z-index: 4;

    .inner-wrapper {
        padding: 2rem 1.5rem;

        @media screen and (min-width: 768px) {
            height: auto;
        }
    }

    .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 25px;

        h2 {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
        }

        button {
            font-weight: 500;
            font-size: 15px;
            background: none;
            border: none;
            opacity: 0.5;
            cursor: pointer;
        }

        button:hover {
            /* border-bottom: 1px solid; */
            text-decoration: underline;
        }
    }

    .cart-items-wrapper {
        max-height: 300px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 4px;
            border-radius: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background: #d87d4a;
            border-radius: 8px;
            border: 3px solid #d87d4a;
        }
    }

    @media screen and (min-width: 768px) {
        min-width: 377px;
        left: 65%;
    }

    @media screen and (min-width: 1280px) {
        top: 20%;
    }
`;

export const CartDetails = styled.div`
    margin: 2rem 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .img-name {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        flex-basis: 60%;

        img {
            width: 64px;
            height: 64px;
            border-radius: 8px;
        }

        h3 {
            font-weight: 700;
            font-size: 15px;
            line-height: 25px;
            text-transform: uppercase;

            span {
                font-size: 14px;
                opacity: 0.5;
                display: block;
            }
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 80%;
        }
    }

    .qty {
        background: #f1f1f1;
        flex-basis: 35%;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;

        button {
            border: none;
            background: none;
            font-weight: 700;
            cursor: pointer;
        }

        button:hover {
            color: #d87d4a;
        }

        span {
            font-weight: 700;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 1px;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0 1.5rem;
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
`;

export const Checkout = styled.button`
    background: #d87d4a;
    color: #fff;
    width: 100%;
    padding: 1rem 3rem;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:disabled {
        background: #fbaf85;
        cursor: not-allowed;
        opacity: 0.5;
    }
`;
