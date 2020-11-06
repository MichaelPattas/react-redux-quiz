import React from "react";
import { connect } from "react-redux";
import { setGameStatus, setLoadingStatus } from "../actions";
import { getQuestionList } from "../actions/getQuestionList";

const StartButton = ({ setGameStatus, getQuestionList, difficulty }) => {
  return (
    <div>
      <button
        onClick={() => {
          setLoadingStatus(true);
          getQuestionList(difficulty || "easy").then(() =>
            setGameStatus("game-page")
          );
        }}
        className="button-difficulty start-button"
      >
        Start Game
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setGameStatus,
  setLoadingStatus,
  getQuestionList,
})(StartButton);
