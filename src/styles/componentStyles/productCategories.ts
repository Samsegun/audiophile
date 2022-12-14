import styled from "styled-components";

export const CategorySection = styled.section`
    position: relative;
    min-height: 13.6rem;
    display: flex;
    align-items: end;
    margin-bottom: 1rem;

    .imgContainer {
        position: absolute;
        top: 0;
        filter: drop-shadow(0px 35px 15px #aaaaaa);
    }
`;

export const CategoryWrapper = styled.div`
    background: #f1f1f1;
    width: 100%;
    margin-top: 1rem;
    min-height: 10.3rem;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 8px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.1px;

    .info {
        margin-bottom: 1.4rem;

        & p {
            font-size: 0.9rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        & button {
            font-size: 0.8rem;
            font-weight: 700;
            opacity: 0.5;
            border: none;
            letter-spacing: 1px;
            & img {
                padding-left: 0.7rem;
            }
        }
    }

    &:hover {
        cursor: pointer;
    }
    &:hover button {
        color: #d87d4a;
        cursor: pointer;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        margin-top: 64px;

        & > * {
            flex-basis: 33.33%;
            margin-right: 10px;
        }

        & > *:last-child {
            margin-right: 0;
        }
    }

    @media screen and (min-width: 1280px) {
        & > * {
            margin-right: 30px;
        }

        & > *:last-child {
            margin-right: 0;
        }
    }
`;
