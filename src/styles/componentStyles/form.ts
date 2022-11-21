import styled from "styled-components";

export const FormWrapper = styled.section`
    margin: 1rem 0 2rem;
`;

export const FormSection = styled.div`
    margin-top: 2rem;
`;

export const FormTitle = styled.div`
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 1rem;
    color: #d87d4a;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const FormInput = styled.div`
    margin-bottom: 1.5rem;
    font-weight: 700;

    label,
    input {
        display: block;
    }

    label {
        font-size: 12px;
        padding-bottom: 0.5rem;
        line-height: 16px;
        letter-spacing: -0.25px;
    }

    input {
        width: 100%;
        font-size: 14px;
        letter-spacing: -0.25px;
        line-height: 19px;
        padding: 1.125rem 1.5rem;
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        opacity: 0.7;
        outline: none;
    }

    span {
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.214286px;
    }
`;

export const RadioWrapper = styled.div<{ active: boolean }>`
    label {
        padding-bottom: 0;
        font-size: 14px;
        margin-left: 1rem;
        width: 100%;
        cursor: pointer;
    }

    input {
        width: auto;
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 1.125rem 1rem;
    border: 1px solid ${props => (props.active ? "#d87d4a" : "#cfcfcf")};
    border-radius: 8px;
`;

export const Cash = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        opacity: 0.7;
    }
`;
