import React from "react";
import { connect } from "react-redux";

import { shuffleArray, addClassName, removeClassName } from "../utils/utils";
import {
  setGameStatus,
  setQuestionNumber,
  setGameScore,
  setLoadingStatus,
} from "../actions/index";
import DOMPurity from "dompurify";

const GameCard = ({
  questionList,
  questionNumber,
  setQuestionNumber,
  setGameStatus,
  setGameScore,
  gameScore,
  setLoadingStatus,
}) => {
  let answersArray = shuffleArray([
    ...questionList[questionNumber].incorrect_answers,
    questionList[questionNumber].correct_answer,
  ]);

  if (questionNumber === 9) {
    setQuestionNumber(0);
    setLoadingStatus(true);

    setGameStatus("game-over-page");
  }

  setTimeout(() => {}, 3000);
  const checkAnswer = (e) => {
    let answerButton = e.currentTarget;
    if (answerButton.value === questionList[questionNumber].correct_answer) {
      addClassName(answerButton, "right-answer");
      setGameScore(gameScore);
      setTimeout(() => {
        removeClassName(answerButton, "right-answer");
        setQuestionNumber(questionNumber);
      }, 2000);
    } else {
      addClassName(answerButton, "wrong-answer");
      setTimeout(() => {
        removeClassName(answerButton, "wrong-answer");
        setQuestionNumber(questionNumber);
      }, 2000);
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
        <div className="game-answers">
          {answersArray.map((answer) => {
            return (
              <button
                key={answer}
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
  setQuestionNumber,
  setGameStatus,
  setGameScore,
  setLoadingStatus,
})(GameCard);
