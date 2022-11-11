import styled from "styled-components";

interface Props {
    bgColor?: string;
    color?: string;
    border?: string;
}

export const Button = styled.button<Props>`
    padding: 1rem 2rem;
    font-size: 13px;
    font-weight: 700;
    background: ${props => props.bgColor || "#ffffff"};
    color: ${props => props.color || "#ffffff"};
    text-transform: uppercase;
    outline: none;
    border: ${props => props.border || "none"};
    cursor: pointer;
    letter-spacing: 1px;
`;
