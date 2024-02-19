/* eslint-disable react/prop-types */
const Step2 = ({ error, favFood, setFavFood }) => {
  return (
    <div>
      <p>Favorite food:</p>
      <input defaultValue={favFood} onChange={(e) => setFavFood(e.target.value)} />
      {error && <p>Step 2 error: {error}</p>}
    </div>
  );
};

export default Step2;
