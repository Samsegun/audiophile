import React, { useContext, useReducer, useState } from "react";
import { MobileNavContext } from "../../store/mobileNavContext";
import {
    FormWrapper,
    FormSection,
    FormTitle,
    FormInput,
    Cash,
    RadioWrapper,
    InputWrapper,
    Emoney,
    CheckOutForm,
} from "../../styles/componentStyles/form";
import {
    formErrors,
    validateFormInputs,
    validateFormReducer,
} from "../../Utils/validator";
import Summary from "./Summary";

interface StateProps {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    paymentMethod: string;
    eNumber?: string;
    ePin?: string;
}

const formState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
};

const formReducer = (
    state: StateProps,
    action: { type: string; value: string }
) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.value };
        case "email":
            return { ...state, email: action.value };
        case "phone":
            return { ...state, phone: action.value };
        case "address":
            return { ...state, address: action.value };
        case "zip":
            return { ...state, zip: action.value };
        case "city":
            return { ...state, city: action.value };
        case "country":
            return { ...state, country: action.value };
        case "paymentMethod":
            return { ...state, paymentMethod: action.value };
        case "eNumber":
            return { ...state, eNumber: action.value };
        case "ePin":
            return { ...state, ePin: action.value };
        default:
            return;
    }
};

const Form = () => {
    const [formStates, dispatchFormFn] = useReducer<React.Reducer<any, any>>(
        formReducer,
        formState
    );

    const [formErrorStates, dispatchFormError] = useReducer<
        React.Reducer<any, any>
    >(validateFormReducer, formErrors);
    const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
    const { handleModal } = useContext(MobileNavContext);

    const onChangeHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        dispatchFormFn({
            type: event.target.name,
            value: event.target.value,
        });

        // setDisableSubmitBtn(validateFormInputs(formErrorStates));
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formStates.paymentMethod === "cash") {
            delete formStates["eNumber"];
            delete formStates["ePin"];
        }

        if (
            validateFormInputs(formErrorStates, dispatchFormError, formStates)
        ) {
            return;
        } else {
            console.log(formStates);
        }

        // setError(validateFormInputs(formErrorStates));

        // handleModal("confirmation");
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        dispatchFormError({
            type: e.target.name,
            value: e.target.value,
        });
    };

    return (
        <FormWrapper>
            <CheckOutForm onChange={onChangeHandler} onSubmit={submitHandler}>
                <div className='form-inputs'>
                    <h1 className='heading'>checkout </h1>
                    {/* billing */}
                    <FormSection>
                        <FormTitle>billing details</FormTitle>

                        <InputWrapper auto={true}>
                            <FormInput error={formErrorStates.name.value}>
                                <div className='label-group'>
                                    <label htmlFor='name'>Name</label>
                                    <span>{formErrorStates.name.value}</span>
                                </div>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Samuel'
                                    onBlur={blurHandler}
                                />
                            </FormInput>

                            <FormInput error={formErrorStates.email.value}>
                                <div className='label-group'>
                                    <label htmlFor='email'>Email Address</label>
                                    <span>{formErrorStates.email.value}</span>
                                </div>
                                <input
                                    type='text'
                                    id='email'
                                    name='email'
                                    placeholder='Samsegun@email.com'
                                    onBlur={blurHandler}
                                />
                            </FormInput>

                            <FormInput error={formErrorStates.phone.value}>
                                <div className='label-group'>
                                    <label htmlFor='phone'>Phone Number</label>
                                    <span>{formErrorStates.phone.value}</span>
                                </div>
                                <input
                                    type={"tel"}
                                    id='phone'
                                    name='phone'
                                    placeholder='+1 202-555-0136'
                                    onBlur={blurHandler}
                                />
                            </FormInput>
                        </InputWrapper>
                    </FormSection>

                    {/* shipping */}
                    <FormSection>
                        <FormTitle>shipping info</FormTitle>

                        <InputWrapper auto={false}>
                            <FormInput error={formErrorStates.address.value}>
                                <div className='label-group'>
                                    <label htmlFor='address'>
                                        Your Address
                                    </label>
                                    <span>{formErrorStates.address.value}</span>
                                </div>
                                <input
                                    type='text'
                                    id='address'
                                    name='address'
                                    placeholder='1137 Williams Avenue'
                                    onBlur={blurHandler}
                                />
                            </FormInput>

                            <FormInput error={formErrorStates.zip.value}>
                                <div className='label-group'>
                                    <label htmlFor='zip'>ZIP Code</label>
                                    <span>{formErrorStates.zip.value}</span>
                                </div>
                                <input
                                    type='number'
                                    id='zip'
                                    name='zip'
                                    placeholder='10001'
                                    onBlur={blurHandler}
                                />
                            </FormInput>

                            <FormInput error={formErrorStates.city.value}>
                                <div className='label-group'>
                                    <label htmlFor='city'>City</label>
                                    <span>{formErrorStates.city.value}</span>
                                </div>
                                <input
                                    type='text'
                                    id='city'
                                    name='city'
                                    placeholder='Lagos'
                                    onBlur={blurHandler}
                                />
                            </FormInput>

                            <FormInput error={formErrorStates.country.value}>
                                <div className='label-group'>
                                    <label htmlFor='country'>Country</label>
                                    <span>{formErrorStates.country.value}</span>
                                </div>
                                <input
                                    type='text'
                                    id='country'
                                    name='country'
                                    placeholder='Nigeria'
                                    onBlur={blurHandler}
                                />
                            </FormInput>
                        </InputWrapper>
                    </FormSection>

                    {/* payment type*/}
                    <FormSection>
                        <FormTitle>payment details</FormTitle>

                        <FormInput error={formErrorStates.paymentMethod.value}>
                            <InputWrapper auto={true}>
                                <span>Payment Method</span>

                                <div className='radios'>
                                    <RadioWrapper
                                        active={
                                            formStates.paymentMethod ===
                                            "emoney"
                                        }>
                                        <input
                                            type='radio'
                                            id='emoney'
                                            name='paymentMethod'
                                            value='emoney'
                                        />
                                        <label htmlFor='emoney'>e-Money</label>
                                    </RadioWrapper>

                                    <RadioWrapper
                                        active={
                                            formStates.paymentMethod === "cash"
                                        }>
                                        <input
                                            type='radio'
                                            id='cash'
                                            name='paymentMethod'
                                            value='cash'
                                        />
                                        <label htmlFor='cash'>
                                            Cash on Delivery
                                        </label>
                                    </RadioWrapper>
                                </div>
                            </InputWrapper>
                        </FormInput>

                        {/* {formStates.paymentMethod === "emoney" && (
                            <Emoney>
                        
                                <FormInput>
                                    <label htmlFor='e-number'>
                                        e-Money Number
                                    </label>
                                    <input
                                        type='number'
                                        id='e-number'
                                        name='eNumber'
                                        placeholder='238521993'
                                    />
                                </FormInput>

                            
                                <FormInput>
                                    <label htmlFor='e-pin'>e-Money PIN</label>
                                    <input
                                        type='number'
                                        id='e-pin'
                                        name='ePin'
                                        placeholder='6891'
                                    />
                                </FormInput>
                            </Emoney>
                         )} */}

                        {/* {formStates.paymentMethod === "cash" && (
                            <Cash>
                                <div>
                                    <svg
                                        width='48'
                                        height='48'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z'
                                            fill='#D87D4A'
                                        />
                                    </svg>
                                </div>
                                <p>
                                    The ‘Cash on Delivery’ option enables you to
                                    pay in cash when our delivery courier
                                    arrives at your residence. Just make sure
                                    your address is correct so that your order
                                    will not be cancelled.
                                </p>
                            </Cash>
                        )} */}
                    </FormSection>
                </div>

                <Summary />
            </CheckOutForm>
        </FormWrapper>
    );
};

export default Form;
