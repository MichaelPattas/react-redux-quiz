import React from "react";
import { connect } from "react-redux";

import StartButton from "../components/StartButton";
import DifficultyButton from "../components/DifficultyButton";
import { getQuestionList } from "../actions/getQuestionList";
import { difficultyButtonInformation } from "../utils/utils";

const StartPage = ({ difficultyMessage, getQuestionList }) => {
  const renderDifficultyButtons = difficultyButtonInformation.map(
    ({ buttonName, difficultyLevel }) => {
      const onGetAllQuestions = (level) => {
        return getQuestionList(level);
      };

      return (
        <DifficultyButton
          setDifficultyLevel={onGetAllQuestions}
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
      <StartButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { getQuestionList })(StartPage);
