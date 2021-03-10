import React from "react";

const DifficultyButton = ({ level, name, getDifficultyLevel }) => {
  
  const onDifficultyButtonClick = () => {
    return getDifficultyLevel(level);
  };

  return (
    <button
      onClick={() => onDifficultyButtonClick()}
      className="button-difficulty"
    >
      {name}
    </button>
  );
};

export default DifficultyButton;
