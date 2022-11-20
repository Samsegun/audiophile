import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const Content = styled.div`
    background: #fff;
    margin: 1.5rem 0 2rem;
    padding: 1.5rem;

    .heading {
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 1rem;
        line-height: 38px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

const FormWrapper = styled.div`
    margin: 1rem 0;
`;

const FormSection = styled.div`
    margin-top: 2rem;
`;

const FormTitle = styled.div`
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 1rem;
    color: #d87d4a;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const FormInput = styled.div`
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

const RadioWrapper = styled.div`
    label {
        padding-bottom: 0;
        font-size: 14px;
        margin-left: 1rem;
    }

    input {
        width: auto;
    }

    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 1.125rem 1rem;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
`;

const Checkout = () => {
    const navigate = useNavigate();

    const formHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        // event.preventDefault();

        console.log(event);
    };

    return (
        <PageWrapper>
            <BackBtn onClick={() => navigate(-1)}>Go Back</BackBtn>

            <Content>
                <h1 className='heading'>checkout</h1>

                <FormWrapper>
                    <form onChange={formHandler}>
                        {/* billing */}
                        <FormSection>
                            <FormTitle>billing details</FormTitle>
                            <FormInput>
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Sam Segun'
                                />
                            </FormInput>

                            <FormInput>
                                <label htmlFor='email'>Email Address</label>
                                <input
                                    type='text'
                                    id='email'
                                    placeholder='Samsegun@email.com'
                                />
                            </FormInput>

                            <FormInput>
                                <label htmlFor='phone'>Phone Number</label>
                                <input
                                    type={"tel"}
                                    id='phone'
                                    placeholder='+1 202-555-0136'
                                />
                            </FormInput>
                        </FormSection>

                        {/* shipping */}
                        <FormSection>
                            <FormTitle>shipping info</FormTitle>
                            <FormInput>
                                <label htmlFor='address'>Your Address</label>
                                <input
                                    type='text'
                                    id='address'
                                    placeholder='1137 Williams Avenue'
                                />
                            </FormInput>

                            <FormInput>
                                <label htmlFor='zip'>ZIP Code</label>
                                <input
                                    type='number'
                                    id='zip'
                                    placeholder='10001'
                                />
                            </FormInput>

                            <FormInput>
                                <label htmlFor='city'>City</label>
                                <input
                                    type='text'
                                    id='city'
                                    placeholder='Lagos'
                                />
                            </FormInput>

                            <FormInput>
                                <label htmlFor='country'>Country</label>
                                <input
                                    type='text'
                                    id='country'
                                    placeholder='Nigeria'
                                />
                            </FormInput>
                        </FormSection>

                        {/* payment */}
                        <FormSection>
                            <FormTitle>payment details</FormTitle>

                            <FormInput>
                                <span>Payment Method</span>

                                <div className='radios'>
                                    <RadioWrapper>
                                        <input
                                            type='radio'
                                            id='emoney'
                                            name='payment_method'
                                            value='emoney'
                                        />
                                        <label htmlFor='emoney'>e-Money</label>
                                    </RadioWrapper>

                                    <RadioWrapper>
                                        <input
                                            type='radio'
                                            id='cash'
                                            name='payment_method'
                                            value='cash'
                                        />
                                        <label htmlFor='cash'>
                                            Cash on Delivery
                                        </label>
                                    </RadioWrapper>
                                </div>
                            </FormInput>
                        </FormSection>
                    </form>
                </FormWrapper>
            </Content>
        </PageWrapper>
    );
};

export default Checkout;
