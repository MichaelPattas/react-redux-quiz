import React from "react";
import { connect } from "react-redux";

import {
  setDifficutyMessage,
  setGameStatus,
  setLoadingStatus,
} from "../actions";

import { getQuestionList } from "../actions/getQuestionList";

const StartButton = ({ questionList, setGameStatus, setLoadingStatus }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(questionList);
          setLoadingStatus(true);
          setGameStatus("game-page");
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
  setDifficutyMessage,
})(StartButton);
