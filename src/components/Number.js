import React, { useState } from 'react'


const Number = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    const zero = () => {
        setCount(0);
        setStep(1);
    };
    const stepChange = (steps) => {
        const value = parseInt(steps.target.value);
        console.log(value)

        const setStep = 0 ;
        setStep(isNaN(value) ? 1 : value);
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increment} type="button" class="m-2 btn btn-warning">increment</button>

            <button onClick={decrement} type="button" class="m-2 btn btn-warning">Decrement</button>

            <button onClick={zero} type="button" class="m-2 btn btn-warning">Reset</button>

            <div class="step">
                <label for="step">Step:</label>
                <input type="number" id="step" value={step}
                    onChange={stepChange} />
            </div>
        </>
    )
}

export default Number