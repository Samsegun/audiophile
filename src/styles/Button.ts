import styled from "styled-components";

interface Props {
    default: boolean;
}

export const Button = styled.button<Props>`
    padding: 1rem 2rem;
    font-size: 13px;
    font-weight: 700;
    background: ${props => (props.default ? "#D87D4A" : "#ffffff")};
    color: ${props => (props.default ? "#ffffff" : "#101010")};
    text-transform: uppercase;
    outline: none;
    border: none;
    letter-spacing: 1px;
`;
