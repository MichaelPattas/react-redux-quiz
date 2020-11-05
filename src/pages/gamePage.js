import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getQuestionList } from "../actions/getQuestionList";
import { shuffleArray } from "../utils/utils";

import {
  setGameStatus,
  setLoadingStatus,
  setQuestionNumber,
} from "../actions/index";
import Loading from "../components/Loading";
import DOMPurity from "dompurify";

const GamePage = ({
  getQuestionList,
  difficulty,
  questionList,
  loading,
  setLoadingStatus,
  questionNumber,
  setQuestionNumber,
  setGameStatus,
}) => {
  let answersArray;

  useEffect(() => {
    setLoadingStatus(true);
    getQuestionList(difficulty);
  }, []);

  if (questionList[questionNumber] != undefined) {
    setLoadingStatus(false);
    answersArray = shuffleArray([
      ...questionList[questionNumber].incorrect_answers,
      questionList[questionNumber].correct_answer,
    ]);
  }

  const checkAnswer = (e) => {
    if (questionNumber === 9) {
      return setGameStatus("game-over-page");
    }
    if (e.currentTarget.value == questionList[questionNumber].correct_answer) {
      e.currentTarget.classList.add("right-answer");
      setQuestionNumber(questionNumber);
    } else {
      e.currentTarget.classList.add("wrong-answer");
    }
  };

  if (loading === true) {
    return <Loading />;
  } else {
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
  }
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  getQuestionList,
  setLoadingStatus,
  setQuestionNumber,
  setGameStatus,
})(GamePage);
