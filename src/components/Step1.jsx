/* eslint-disable react/prop-types */
const Step1 = ({ error, name, setName }) => {
  return (
    <div>
      <p>Your name:</p>
      <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
      {error && <p>Step 1 error: {error}</p>}
    </div>
  );
};

export default Step1;
