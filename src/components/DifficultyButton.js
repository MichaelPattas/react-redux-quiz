import React from "react";

import { connect } from "react-redux";
import { setDifficultyLevel } from "../actions";

const DifficultyButton = ({ level, name, setDifficultyLevel }) => {
  return (
    <button
      onClick={() => setDifficultyLevel({ level })}
      className="button-difficulty"
    >
      {name}
    </button>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setDifficultyLevel,
})(DifficultyButton);
