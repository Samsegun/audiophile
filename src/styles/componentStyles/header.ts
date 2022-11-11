import styled from "styled-components";

export const StyledHeader = styled.header`
    background: black;
    color: #fff;

    button {
        background: none;
        border: none;
    }

    .logo-menu {
        flex-basis: 65%;
        display: flex;
        justify-content: space-between;

        button {
            @media screen and (min-width: 1280px) {
                display: none;
            }
        }

        @media screen and (min-width: 768px) {
            flex-basis: 30%;
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
        }

        @media screen and (min-width: 1280px) {
            display: block;
        }
    }
`;
