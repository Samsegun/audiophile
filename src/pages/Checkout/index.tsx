import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MobileNavContext } from "../../store/mobileNavContext";
import { ContentWrapper } from "../../styles/global-styles";
import Form from "./Form";
import Summary from "./Summary";

const PageWrapper = styled.div`
    background: #f2f2f2;
    min-height: 100vh;

    /* .forms {
        @media screen and (min-width: 1280px) {
            display: flex;
            justify-content: space-between;
            gap: 1.9rem;

            & > *:first-child {
                flex-basis: 70%;
            }

            & > *:last-child {
                flex-basis: 30%;
                height: fit-content;
            }
        }
    } */
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

                <FormContent>
                    <Form />
                </FormContent>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default Checkout;
