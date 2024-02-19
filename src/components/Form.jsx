import { useState } from "react";
import Step from "./Step";

const FIRST_STEP = 1;

const Form = () => {
  const [step, setStep] = useState(FIRST_STEP);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});

  const updateFromInput = (name, value) => {
    const newData = { [name]: value };

    setFormData((oldData) => {
      const updatedData = { ...oldData, ...newData };
      return updatedData;
    });
  };

  const nextStep = () => {
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
    setFormData({});
  };

  const formSteps = () => {
    return (
      <>
        <Step
          stepNum={step}
          formData={formData}
          updateInput={updateFromInput}
        ></Step>
        {step > 1 && <button onClick={() => prevStep()}>Previous step</button>}
        <button onClick={() => nextStep()}>
          {step < 3 ? "Next step" : "Submit"}
        </button>
      </>
    );
  };

  return (
    <div>
      {step === 3 ? (
        <>
          <p>
            {formData.name}
            {"'"}s favorite food is {formData.food}!
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
