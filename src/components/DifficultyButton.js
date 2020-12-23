import React from "react";

const DifficultyButton = ({ level, name, setDifficultyLevel }) => {
  return (
    <button
      onClick={() => setDifficultyLevel(level)}
      className="button-difficulty"
    >
      {name}
    </button>
  );
};

export default DifficultyButton;
