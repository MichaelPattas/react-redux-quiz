import React, { useState } from "react";

import { connect } from "react-redux";
import { getQuestionList } from "../actions/getQuestionList";
import { setGameStatus, setGameScore } from "../actions";

import DifficultyButton from "../components/DifficultyButton";
import { difficultyButtonInformation } from "../utils/utils";

import Loading from "../components/Loading";

const StartPage = ({ setGameStatus, getQuestionList, setGameScore }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDifficultyLevel = (level) => {
    return setDifficulty(level);
  };

  if (difficulty) {
    getQuestionList(difficulty);
    setTimeout(() => {
      setGameStatus("game-page");
    }, 1000);
  }

  setTimeout(() => {
    setLoading(false);
    setGameScore(0);
  }, 1000);

  const renderDifficultyButtons = difficultyButtonInformation.map((button) => {
    return (
      <DifficultyButton
        key={button.buttonName}
        getDifficultyLevel={getDifficultyLevel}
        name={button.buttonName}
        level={button.difficultyLevel}
      />
    );
  });

  if (loading) return <Loading />;
  return (
    <div className="page">
      <h2>Please Choose Difficulty!!</h2>
      <div className="pick-difficulty">{renderDifficultyButtons}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getQuestionList,
  setGameStatus,
  setGameScore,
})(StartPage);
