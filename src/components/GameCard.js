import React from "react";
import { connect } from "react-redux";
import { getQuestionList } from "../actions/getQuestionList";
import { shuffleArray } from "../utils/utils";
import {
  setGameStatus,
  setLoadingStatus,
  setQuestionNumber,
} from "../actions/index";

import DOMPurity from "dompurify";

const GameCard = ({
  questionList,
  loading,
  setLoadingStatus,
  questionNumber,
  setQuestionNumber,
  setGameStatus,
}) => {
  let answersArray = shuffleArray([
    ...questionList[questionNumber].incorrect_answers,
    questionList[questionNumber].correct_answer,
  ]);

  if (questionNumber === 9) {
    return setGameStatus("game-over-page");
  }

  let eventPointerStyle = "none";
  const checkAnswer = (e) => {
    eventPointerStyle = "none";
    if (e.currentTarget.value === questionList[questionNumber].correct_answer) {
      e.currentTarget.classList.add("right-answer");
    } else {
      e.currentTarget.classList.add("wrong-answer");
    }
  };

  return (
    <div className="game-page">
      <div className="game-content">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurity.sanitize(questionList[questionNumber].question),
          }}
          className="game-question"
        ></div>
        <div
          style={{ pointerEvents: eventPointerStyle }}
          className="game-answers"
        >
          {answersArray.map((answer) => {
            return (
              <button
                dangerouslySetInnerHTML={{
                  __html: DOMPurity.sanitize(answer),
                }}
                value={answer}
                onClick={(e) => checkAnswer(e)}
                className="answer-button"
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getQuestionList,
  setLoadingStatus,
  setQuestionNumber,
  setGameStatus,
})(GameCard);
