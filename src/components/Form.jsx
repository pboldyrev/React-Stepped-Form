import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const FIRST_STEP = 1;

const Form = () => {
  const [step, setStep] = useState(FIRST_STEP);
  const [name, setName] = useState("");
  const [favFood, setFavFood] = useState("");
  const [error, setError] = useState("");

  const nextStep = () => {
    const isIncompleteField = (step === 1 && !name) || (step === 2 && !favFood);
    if (isIncompleteField) {
      setError("Complete this field!");
      return;
    }
    setError("");
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prevStep) => prevStep - 1);
  };

  const startOver = () => {
    setError("");
    setStep(FIRST_STEP);
    setName("");
    setFavFood("");
  };

  const formSteps = () => {
    if (step === 1) {
      return (
        <>
          <Step1 error={error} name={name} setName={setName}></Step1>
          <button onClick={() => nextStep()}>Next step</button>
        </>
      );
    }
    if (step === 2) {
      return (
        <>
          <Step2
            error={error}
            favFood={favFood}
            setFavFood={setFavFood}
          ></Step2>
          <button onClick={() => prevStep()}>Previous step</button>
          <button onClick={() => nextStep()}>Submit</button>
        </>
      );
    }
  };

  return (
    <div>
      {step === 3 ? (
        <>
          <p>
            {name}
            {"'"}s favorite food is {favFood}!
          </p>
          <button onClick={() => startOver()}>Start over</button>
        </>
      ) : (
        formSteps()
      )}
    </div>
  );
};

export default Form;
