import React from "react";

const DifficultyButton = ({ level, name, getDifficultyLevel }) => {
  return (
    <button
      onClick={() => getDifficultyLevel(level)}
      className="button-difficulty"
    >
      {name}
    </button>
  );
};

export default DifficultyButton;
