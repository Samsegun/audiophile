import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MobileNavContext } from "../../store/mobileNavContext";
import { ContentWrapper } from "../../styles/global-styles";
import Form from "./Form";

const PageWrapper = styled.div`
    background: #f2f2f2;
    min-height: 100vh;

    .notice {
        font-style: italic;
        color: #cd2c2c;
        margin: 1rem 0;
        font-size: 1.2rem;
    }
`;

const BackBtn = styled.button`
    font-weight: 500;
    font-size: 15px;
    background: none;
    border: none;
    line-height: 25px;
    opacity: 0.5;
    cursor: pointer;
`;

const FormContent = styled.div`
    margin: 1.5rem 0;

    .heading {
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 1rem;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;

        @media screen and (min-width: 768px) {
            font-size: 32px;
            line-height: 36px;
        }
    }
`;

const Checkout = () => {
    const navigate = useNavigate();
    const { handleModal } = useContext(MobileNavContext);

    useEffect(() => {
        handleModal("backdrop");
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <PageWrapper>
            <ContentWrapper flex={false}>
                <BackBtn onClick={() => navigate(-1)}>Go Back</BackBtn>

                <p className='notice'>*Please fill all input fields!</p>

                <FormContent>
                    <Form />
                </FormContent>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Checkout;
