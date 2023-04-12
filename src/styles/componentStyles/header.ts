import styled from "styled-components";

export const StyledHeader = styled.header`
    background: #000;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .new-div {
        position: relative;
    }

    .logo-menu {
        flex-basis: 65%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            @media screen and (min-width: 1280px) {
                display: none;
            }
        }

        @media screen and (min-width: 768px) {
            flex-basis: 40%;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: auto;
        }
    }

    .nav-bar {
        display: none;

        ul {
            list-style: none;
            display: flex;
            gap: 2.13rem;
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: uppercase;

            a {
                display: block;
                color: inherit;
                text-decoration: none;
            }
            a:hover {
                color: #d87d4a;
                transform: scale(1.05);
            }
        }

        @media screen and (min-width: 1280px) {
            display: block;
        }
    }

    .cart-icon {
        position: relative;
        transition: all 300ms ease;

        span {
            position: absolute;
            top: -10px;
            left: 25px;
            color: #d87d4a;
        }
    }
    .cart-icon:hover {
        transform: scale(1.1);
    }
`;
