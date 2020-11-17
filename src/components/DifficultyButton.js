import React from "react";

import { connect } from "react-redux";
import { setDifficultyLevel, setDifficutyMessage } from "../actions";

const DifficultyButton = ({
  level,
  name,
  setDifficultyLevel,
  setDifficutyMessage,
}) => {
  const chooseDifficulty = () => {
    setDifficultyLevel({ level });
    setDifficutyMessage("");
  };

  return (
    <button onClick={() => chooseDifficulty()} className="button-difficulty">
      {name}
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setDifficultyLevel,
  setDifficutyMessage,
})(DifficultyButton);
