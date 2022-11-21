import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Form from "./Form";
import Summary from "./Summary";

const PageWrapper = styled.div`
    padding: 1rem 1.5rem 1rem;
    background: #f2f2f2;
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
    background: #fff;
    margin: 1.5rem 0 2rem;
    padding: 1.5rem;
    border-radius: 8px;

    .heading {
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 1rem;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

const Checkout = () => {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <BackBtn onClick={() => navigate(-1)}>Go Back</BackBtn>

            <FormContent>
                <h1 className='heading'>checkout</h1>

                <Form />
            </FormContent>

            <Summary />
        </PageWrapper>
    );
};

export default Checkout;
