import { useState } from "react";

function useInput(validatorFn) {
    const [value, setValue] = useState("");
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validatorFn(value);
    const valueHasError = valueIsTouched && !valueIsValid;

    function valueChangeHandler(event) {
        setValue(event.target.value);
    }

    function inputBlurHandler() {
        setValueIsTouched(true);
    }

    function reset() {
        setValue("");
        setValueIsTouched(false);
    }

    return {
        value,
        valueIsValid,
        valueHasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
};

export default useInput;