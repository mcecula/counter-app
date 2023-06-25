import { useState } from 'react';
import ButtonsPanel from "./components/ButtonsPanel";
import Clock from "./components/Clock";
import Display from "./components/Display";
import Step from './components/Step';
import './Counter.css'

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [showClock, setShowClock] = useState(true);
    const [step, setStep] = useState(1);

    const updateCounter = (action) => {
        if (action === "add") {
            setCounter(counter + step);
        } else if (action === "reset") {
            setCounter(props.counterInitValue);
        } else {
            setCounter(0);
        }
    }
        const updateStep = (event) => {
            setStep(+event);
    };

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter={updateCounter} step={step} />
            <Step updateStep={updateStep} />
            {showClock ? (
                <Clock setShowClock={setShowClock} />
            ) : (
                <p className="clockControl" onClick={() => setShowClock(true)}>
                    pokaż zegar
                </p>
            )}
        </div>


    );
};

export default Counter;