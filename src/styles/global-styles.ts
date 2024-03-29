import styled from "styled-components";

interface WrapperProps {
    flex: boolean;
}

export const ContentWrapper = styled.div<WrapperProps>`
    padding: 2rem 1.5rem;
    display: ${props => (props.flex ? "flex" : "block")};
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: auto;
    position: relative;

    @media screen and (min-width: 768px) {
        padding: 2rem 2.5rem;
        width: 90%;
    }

    @media screen and (min-width: 1280px) {
        width: 80%;
    }
`;
