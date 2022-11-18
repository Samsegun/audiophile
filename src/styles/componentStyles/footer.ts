import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: #101010;
    color: #fff;
    padding: 3rem 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 4rem 2.5rem;
    }

    .content-wrapper {
        max-width: 1280px;
        margin: auto;
    }

    .head-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;

        @media screen and (min-width: 768px) {
            align-items: start;
        }

        @media screen and (min-width: 1280px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .img-wrapper {
            margin-top: 1.5rem;
        }

        ul {
            list-style-type: none;
            font-weight: 700;
            font-size: 0.8rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 2px;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            a {
                display: block;
                color: inherit;
                text-decoration: none;
            }
            a:hover {
                transform: scale(1.05);
            }

            @media screen and (min-width: 768px) {
                flex-direction: row;
                gap: 2.1rem;
            }
        }
    }

    .info {
        margin-top: 3rem;
        font-size: 0.94rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        text-align: center;

        .info-text {
            font-size: 0.94rem;
            font-weight: 500;
            line-height: 25px;
            opacity: 0.5;

            @media screen and (min-width: 768px) {
                text-align: justify;
            }

            @media screen and (min-width: 1280px) {
                width: 50%;
            }
        }

        .copyright-wrapper {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            @media screen and (min-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
            }
        }

        .info-copyright {
            font-weight: 700;
            opacity: 0.5;
        }
        .info-socials {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            opacity: 1;
        }
    }
`;
