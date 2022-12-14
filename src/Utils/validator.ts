interface StateProps {
    name: { value: string; isTouched: boolean };
    email: { value: string; isTouched: boolean };
    phone: { value: string; isTouched: boolean };
    address: { value: string; isTouched: boolean };
    zip: { value: string; isTouched: boolean };
    city: { value: string; isTouched: boolean };
    country: { value: string; isTouched: boolean };
    paymentMethod: { value: string; isTouched: boolean };
    eNumber?: { value: string; isTouched: boolean };
    ePin?: { value: string; isTouched: boolean };
}

const emailTester =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const formErrors = {
    address: { value: "", isTouched: false },
    city: { value: "", isTouched: false },
    country: { value: "", isTouched: false },
    email: { value: "", isTouched: false },
    name: { value: "", isTouched: false },
    zip: { value: "", isTouched: false },
    phone: { value: "", isTouched: false },
    paymentMethod: { value: "", isTouched: false },
};

// for form errors
export const validateFormReducer = (
    state: StateProps,
    action: { type: string; value: string }
) => {
    const { type, value } = action;

    switch (type) {
        case "name":
            if (value.length < 3) {
                return {
                    ...state,
                    name: {
                        value: "name must be at least 3 characters!",
                        isTouched: true,
                    },
                };
            } else {
                return { ...state, name: { value: "", isTouched: true } };
            }
        case "email":
            if (!emailTester.test(value)) {
                return {
                    ...state,
                    email: { value: "wrong format!", isTouched: true },
                };
            } else {
                return { ...state, email: { value: "", isTouched: true } };
            }
        case "phone":
            if (value.length < 1) {
                return {
                    ...state,
                    phone: {
                        value: "field can not be empty!",
                        isTouched: true,
                    },
                };
            } else {
                return { ...state, phone: { value: "", isTouched: true } };
            }
        case "address":
            if (value.length < 1) {
                return {
                    ...state,
                    address: {
                        value: "field can not be empty!",
                        isTouched: true,
                    },
                };
            } else {
                return { ...state, address: { value: "", isTouched: true } };
            }
        case "city":
            if (value.length < 1) {
                return {
                    ...state,
                    city: { value: "field can not be empty!", isTouched: true },
                };
            } else {
                return { ...state, city: { value: "", isTouched: true } };
            }
        case "country":
            if (value.length < 1) {
                return {
                    ...state,
                    country: {
                        value: "field can not be empty!",
                        isTouched: true,
                    },
                };
            } else {
                return { ...state, country: { value: "", isTouched: true } };
            }
        case "zip":
            if (value.length < 1) {
                return {
                    ...state,
                    zip: { value: "field can not be empty!", isTouched: true },
                };
            } else {
                return { ...state, zip: { value: "", isTouched: true } };
            }
        case "paymentMethod":
            if (!value) {
                return {
                    ...state,
                    paymentMethod: {
                        value: "field can not be empty!",
                        isTouched: true,
                    },
                };
            } else {
                return {
                    ...state,
                    paymentMethod: { value: "", isTouched: true },
                };
            }
        default:
            break;
    }

    // if (!paymentMethod) {
    //     state.paymentMethod = "choose payment type!";
    // }
};

export function validateFormInputs(
    formData: any,
    setError: any,
    radioInputState: any
) {
    const formDataKeys = Object.keys(formData);

    let formError = false;

    formDataKeys.forEach(key => {
        switch (key) {
            case "name":
                if (formData[key].length < 3) {
                    setError("name", {
                        type: "custom",
                        message: "name must be at least 3 characters!",
                    });

                    formError = true;
                }
                break;
            case "email":
                if (!emailTester.test(formData[key])) {
                    setError("email", {
                        type: "custom",
                        message: "wrong format!",
                    });
                    formError = true;
                }
                break;
            case "phone":
                if (formData[key].length < 1) {
                    setError("phone", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "address":
                if (formData[key].length < 1) {
                    setError("address", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "city":
                if (formData[key].length < 1) {
                    setError("city", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "country":
                if (formData[key].length < 1) {
                    setError("country", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "zip":
                if (formData[key].length < 1) {
                    setError("zip", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "eNumber":
                if (formData[key].length < 1 && radioInputState === "emoney") {
                    setError("eNumber", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            case "ePin":
                if (formData[key].length < 1 && radioInputState === "emoney") {
                    setError("ePin", {
                        type: "custom",
                        message: "field cannot be empty!",
                    });
                    formError = true;
                }
                break;
            default:
                formError = false;
                break;
        }
    });

    return formError;
}
