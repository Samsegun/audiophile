import styled from "styled-components";

interface WrapperProps {
    flex: boolean;
}

export const ContentWrapper = styled.div<WrapperProps>`
    padding: 2rem 1.5rem;
    display: ${props => (props.flex ? "flex" : "block")};
    justify-content: space-between;
    align-items: center;
`;
