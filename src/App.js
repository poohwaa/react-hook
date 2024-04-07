import "./App.css";
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

function App() {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>React Hook</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default App;
