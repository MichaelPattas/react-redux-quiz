import React from "react";

const StartButton = ({ startGame }) => {
  return (
    <div>
      <button
        onClick={() => startGame()}
        className="button-difficulty start-button"
      >
        Start Game
      </button>
    </div>
  );
};

export default StartButton;
