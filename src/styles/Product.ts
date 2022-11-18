import styled from "styled-components";

export const StyledSection = styled.section`
    .back-btn {
        font-weight: 500;
        font-size: 15px;
        background: none;
        border: none;
        line-height: 25px;
        opacity: 0.5;
        cursor: pointer;
    }

    .back-btn:hover {
        transform: scale(1.1);
        font-weight: 700;
    }
`;

export const Heading = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    line-height: 36px;
    letter-spacing: 0.9px;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
        letter-spacing: 1.2px;
    }
`;

export const FeaturesAndContent = styled.div`
    @media screen and (min-width: 1280px) {
        display: flex;
        gap: 7.5rem;
        margin: 10rem 0;
    }
`;

export const Features = styled.article`
    margin: 5.5rem 0;

    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        mix-blend-mode: normal;
        opacity: 0.5;
    }

    @media screen and (min-width: 1280px) {
        margin: 0;
        flex-basis: 90%;
    }
`;

export const BoxContent = styled.div`
    .list {
        width: 100%;
        @media screen and (min-width: 768px) {
            width: auto;
        }
    }

    @media screen and (min-width: 768px) {
        display: flex;

        & > * {
            flex-basis: 50%;
        }
    }

    @media screen and (min-width: 1280px) {
        flex-direction: column;
        flex-basis: 50%;

        & > * {
            flex-basis: auto;
        }
    }
`;

export const ListItem = styled.li`
    list-style-type: none;
    font-size: 15px;
    margin-bottom: 0.5rem;
    line-height: 25px;

    .qty {
        color: #d87d4a;
        font-weight: 700;
        margin-right: 1.5rem;
    }

    .item {
        text-transform: capitalize;
        opacity: 0.5;
    }
`;

export const Gallery = styled.div`
    margin: 5.5rem 0;

    .img-wrapper {
        @media screen and (min-width: 768px) {
            &:nth-child(1) {
                grid-column: 1/2;
            }
            &:nth-child(2) {
                grid-row: 2/3;
                grid-column: 1/2;
            }
            &:nth-child(3) {
                grid-column: 2/3;
                grid-row: 1/3;
            }
        }
    }

    picture {
        display: block;
        margin-bottom: 1.3rem;

        @media screen and (min-width: 768px) {
            margin-bottom: 0;
            height: 100%;
        }
    }

    img {
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
        border-radius: 8px;
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: auto auto;
        grid-column-gap: 18px;
        grid-row-gap: 20px;
        margin: 7.5rem 0;
    }

    @media screen and (min-width: 1280px) {
        grid-column-gap: 30px;
        grid-row-gap: 2rem;
    }
`;

export const OtherProducts = styled.div`
    text-align: center;
    margin-bottom: 7.5rem;

    .product-wrapper {
        @media screen and (min-width: 768px) {
            margin-top: 4rem;
            display: flex;
            gap: 11px;
        }
        @media screen and (min-width: 1280px) {
            gap: 30px;
        }
    }

    .product {
        margin-bottom: 3.5rem;

        h3 {
            margin: 2rem 0;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 33px;
            letter-spacing: 1.7px;
        }
    }

    img {
        width: 100%;
        border-radius: 8px;
    }
`;

// product and cart details styles start here
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .img-wrapper {
        margin: 1.5rem 0 2rem;

        img {
            width: 100%;
            border-radius: 8px;
        }

        @media screen and (min-width: 768px) {
            flex-basis: 55%;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 75%;
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 4rem;
    }

    @media screen and (min-width: 1280px) {
        gap: 8rem;
    }
`;

export const ProductText = styled.div`
    text-align: left;

    .new {
        color: #d87d4a;
        font-size: 0.88rem;
        letter-spacing: 10px;
        line-height: 19px;
        text-transform: uppercase;

        @media screen and (min-width: 768px) {
            flex-basis: 50%;
            font-size: 0.75rem;
            line-height: 16px;
            letter-spacing: 8.5px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 0.88rem;
            line-height: 19px;
            letter-spacing: 10px;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 1.75rem;
        margin: 1.5rem 0;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;

        @media screen and (min-width: 1280px) {
            font-size: 2.5rem;
            line-height: 44px;
            letter-spacing: 1.5px;
        }
    }

    .desc {
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
        line-height: 25px;
        opacity: 0.5;

        @media screen and (min-width: 768px) {
            padding: 0;
        }
    }

    .price {
        font-weight: 700;
        font-size: 1.13rem;
        line-height: 25px;
        letter-spacing: 1.3px;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 50%;
    }
`;

export const CartButtons = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;

    & > * {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: none;
        font-weight: 700;
        font-size: 0.82rem;
        line-height: 18px;
        text-transform: uppercase;
    }

    .qty {
        background: #f1f1f1;
        width: 120px;
        height: 48px;

        button {
            border: none;
        }
    }
    .cart-btn {
        background-color: #d87d4a;
        color: #fff;
        width: 160px;
        height: 48px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 300ms ease;
    }
    .cart-btn:hover {
        background-color: #f09763;
        transform: scale(1.05);
    }
`;
