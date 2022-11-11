import styled from "styled-components";

export const ShowcaseWrapper = styled.section`
    margin: 7.5rem 0;
    font-weight: 700;

    /* zx9 speaker starts here */
    .zx9 {
        background: #d87d4a;
        color: #fff;
        text-align: center;
        padding: 3.7rem 0;
        border-radius: 8px;

        .img-wrapper {
            margin: auto;
            max-width: 178px;

            @media screen and (min-width: 768px) {
                max-width: 198px;
            }

            @media screen and (min-width: 1280px) {
                /* position: absolute; */
                max-width: fit-content;
                width: 410px;
            }

            img {
                width: 100%;
            }
        }

        .info {
            margin-top: 2rem;

            @media screen and (min-width: 768px) {
                margin: 4rem auto;
                max-width: 350px;
            }

            @media screen and (min-width: 1280px) {
                text-align: left;
            }

            h2 {
                font-size: 2.25rem;
                text-transform: uppercase;
                letter-spacing: 1.29px;

                @media screen and (min-width: 768px) {
                    font-size: 3.5rem;
                    letter-spacing: 2px;
                }
            }

            p {
                margin: 1.5rem;
                font-size: 15px;
                font-weight: 500;
                opacity: 0.75;
                line-height: 25px;

                @media screen and (min-width: 768px) {
                    margin: 1.5rem 0 2.5rem;
                }
            }
        }

        @media screen and (min-width: 1280px) {
            /* position: relative; */
            display: flex;
            padding-bottom: 0;
        }
    }
    /* zx9 speaker ends here */

    /* zx7 speaker starts here */
    .zx7 {
        position: relative;
        margin: 1.5rem 0;

        .img-wrapper {
            img {
                border-radius: 8px;
                width: 100%;
            }
        }

        .info {
            position: absolute;
            top: 50%;
            left: 8%;
            transform: translateY(-50%);
            text-transform: uppercase;

            h2 {
                font-size: 1.75rem;
                margin-bottom: 1.5rem;
                letter-spacing: 2px;
            }
        }
    }

    /* yx1 speaker starts here */
    .yx1 {
        @media screen and (min-width: 768px) {
            display: flex;
            align-items: center;
            gap: 12px;

            & > * {
                flex-basis: 50%;
            }
        }

        @media screen and (min-width: 1280px) {
            gap: 30px;
        }

        .img-wrapper {
            width: 100%;

            img {
                width: 100%;
                border-radius: 8px;
            }
        }

        .info {
            background: #f1f1f1;

            margin-top: 1.5rem;
            padding: 2.5rem 1.5rem;
            border-radius: 8px;
            text-transform: uppercase;

            @media screen and (min-width: 768px) {
                margin-top: 0;
                align-self: stretch;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            h2 {
                font-size: 1.75rem;
                margin-bottom: 1.5rem;
                letter-spacing: 2px;
            }
        }
    }
`;
