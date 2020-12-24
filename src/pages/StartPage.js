import React, { useState } from "react";
import { connect } from "react-redux";

import StartButton from "../components/StartButton";
import DifficultyButton from "../components/DifficultyButton";
import Loading from "../components/Loading";
import { getQuestionList } from "../actions/getQuestionList";
import { setGameStatus } from "../actions";
import { difficultyButtonInformation } from "../utils/utils";

const StartPage = ({ setGameStatus, getQuestionList }) => {
  const [difficulty, setDifficulty] = useState(null);
  const [difficultyMessage, setDifficultyMessage] = useState("");

  const getDifficultyLevel = (level) => {
    return setDifficulty(level);
  };

  const startGame = () => {
    if (!difficulty) {
      setDifficultyMessage("Please choose difficulty");
      setTimeout(() => {
        setDifficultyMessage("");
      }, 2000);
    } else {
      getQuestionList(difficulty);
      setTimeout(() => {
        setGameStatus("game-page");
      }, 1000);
    }
  };

  const renderDifficultyButtons = difficultyButtonInformation.map(
    ({ buttonName, difficultyLevel }) => {
      return (
        <DifficultyButton
          getDifficultyLevel={getDifficultyLevel}
          name={buttonName}
          level={difficultyLevel}
        />
      );
    }
  );

  return (
    <div className="page">
      <div className="difficulty-title">{difficultyMessage}</div>
      <div className="pick-difficulty">{renderDifficultyButtons}</div>
      <StartButton startGame={startGame} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getQuestionList,
  setGameStatus,
})(StartPage);
