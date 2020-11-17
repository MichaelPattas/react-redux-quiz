import React from "react";
import { connect } from "react-redux";
import {
  setDifficutyMessage,
  setGameStatus,
  setLoadingStatus,
} from "../actions";
import { getQuestionList } from "../actions/getQuestionList";

const StartButton = ({
  setGameStatus,
  getQuestionList,
  difficulty,
  setDifficutyMessage,
  setLoadingStatus,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          if (difficulty !== null) {
            setLoadingStatus(true);
            getQuestionList(difficulty || "easy").then(() =>
              setGameStatus("game-page")
            );
          } else {
            setDifficutyMessage();
          }
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
