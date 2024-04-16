import { useState } from "react";

const useInput = (initVal, validator) => {
    const [value, setValue] = useState(initVal);
    const onChange = (event) => {
        // console.log(event.target);
        const {
            target: { value },
        } = event;

        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

export default useInput