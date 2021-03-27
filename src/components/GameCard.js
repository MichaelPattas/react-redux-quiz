import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { shuffleArray, addClassName, removeClassName } from "../utils/utils";
import { setGameStatus, setGameScore } from "../actions/index";
import AnswerButton from "./AnswerButton";
import Question from "./Question";

const GameCard = ({ questionList, setGameStatus, setGameScore, gameScore }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);

  useEffect(() => {
    setAnswersArray(
      shuffleArray([
        ...questionList[questionNumber].incorrect_answers,
        questionList[questionNumber].correct_answer,
      ])
    );
  }, [questionNumber]);

  const refGameCard = useRef(null);
  const answerButtonContainer = useRef(null);

  if (questionNumber === 9) {
    setGameStatus("game-over-page");
  }

  const checkAnswer = (e) => {
    let answerButton = e.currentTarget;
    let answerResult;

    //Check if the answer is correct
    if (answerButton.value === questionList[questionNumber].correct_answer) {
      answerResult = "right-answer";
      setGameScore(gameScore + 1);
    } else {
      answerResult = "wrong-answer";
    }

    let correctAnswer = answerButtonContainer.current.children;
    console.log(correctAnswer);
    addClassName(answerButton, answerResult);
    addClassName(answerButton, answerResult);
    addClassName(refGameCard.current, "disabled");
    setTimeout(() => {
      removeClassName(refGameCard.current, "disabled");
      removeClassName(answerButton, answerResult);
      setQuestionNumber(questionNumber + 1);
    }, 2500);
  };

  const renderAnswers = answersArray.map((answer) => (
    <AnswerButton key={answer} checkAnswer={checkAnswer} answer={answer} />
  ));

  return (
    <div ref={refGameCard} className="container">
      <div className="game-card">
        <Question question={questionList[questionNumber].question} />
        <div ref={answerButtonContainer} className="game-answers">
          {renderAnswers}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setGameStatus,
  setGameScore,
})(GameCard);
