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
                break;
        }
    });

    return formError;
}
