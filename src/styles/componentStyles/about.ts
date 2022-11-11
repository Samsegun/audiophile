import styled from "styled-components";

export const AboutWrapper = styled.section<{ marginTop?: string }>`
    margin-top: ${props => (props.marginTop ? props.marginTop : null)};
    margin-bottom: 7.5rem;

    .img-wrapper {
        /* width: 100%; */
        img {
            width: 100%;
            border-radius: 8px;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 50%;
            order: 1;
        }
    }

    .info {
        margin-top: 2.5rem;
        text-align: center;

        @media screen and (min-width: 768px) {
            width: 80%;
            margin: 3rem auto;
            line-height: 44px;
        }

        @media screen and (min-width: 1280px) {
            flex-basis: 50%;
            text-align: left;
            padding-right: 6rem;
        }

        h2 {
            font-weight: 700;
            font-size: 1.75rem;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 38px;

            @media screen and (min-width: 768px) {
                font-size: 2.5rem;
            }

            @media screen and (min-width: 1280px) {
                letter-spacing: 1.5px;
                line-height: 44px;
            }

            span {
                color: #d87d4a;
            }
        }

        p {
            font-size: 0.94rem;
            font-weight: 500;
            line-height: 25px;
            opacity: 0.5;
        }
    }

    @media screen and (min-width: 1280px) {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
`;
