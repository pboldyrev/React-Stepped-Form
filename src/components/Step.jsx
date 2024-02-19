/* eslint-disable react/prop-types */
const Step = ({ stepNum, formData, updateInput }) => {
  const nameInput = () => {
    return (
      <div>
        <p>Your name:</p>
        <input
          name="name"
          defaultValue={formData.name ?? ""}
          onChange={(e) => updateInput("name", e.target.value)}
        />
      </div>
    );
  };

  const foodInput = () => {
    return (
      <div>
        <p>Your favorite food:</p>
        <input
          name="food"
          defaultValue={formData.food ?? ""}
          onChange={(e) => updateInput("food", e.target.value)}
        />
      </div>
    );
  };

  switch (stepNum) {
    case 1:
      return nameInput();

    case 2:
      return foodInput();

    default:
      return <></>;
  }
};

export default Step;
