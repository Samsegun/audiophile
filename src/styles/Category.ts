import styled from "styled-components";

export const ProductSection = styled.section`
    .title-wrapper {
        background: #000;
        color: #fff;
        font-size: 1.2rem;
        padding: 2rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 38px;

        @media screen and (min-width: 768px) {
            font-size: 2rem;
            padding: 4rem;
        }
        @media screen and (min-width: 1280px) {
            padding: 4rem 6rem;
        }
    }
`;

export const ProductWrapper = styled.div`
    margin: 4rem 0 7.5rem;
    text-align: center;

    @media screen and (min-width: 768px) {
        margin-top: 7.5rem;
    }

    @media screen and (min-width: 1280px) {
        margin: 10rem 0;
    }
`;

export const ProductText = styled.article<{ switchOrder: boolean }>`
    .img-wrapper {
        margin-bottom: 2rem;
        flex-basis: 50%;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    .text-wrapper {
        flex-basis: 40%;
        order: ${props => (props.switchOrder ? 1 : -1)};
    }

    span {
        color: #d87d4a;
        font-size: 0.88rem;
        letter-spacing: 10px;
        line-height: 19px;
        text-transform: uppercase;
    }

    h1 {
        font-weight: 700;
        font-size: 1.75rem;
        margin: 1.5rem 0;
        line-height: 38px;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        @media screen and (min-width: 768px) {
            font-size: 2.5rem;
            margin: 1rem 0 2rem;
            letter-spacing: 1.5px;
            line-height: 44px;
        }
        @media screen and (min-width: 1280px) {
            text-align: left;
        }
    }

    p {
        font-weight: 500;
        font-size: 0.94rem;
        margin-bottom: 1.5rem;
        padding: 0 0.5rem;
        line-height: 25px;
        opacity: 0.5;

        @media screen and (min-width: 768px) {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }
        @media screen and (min-width: 1280px) {
            width: 100%;
            text-align: left;
        }
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
`;
