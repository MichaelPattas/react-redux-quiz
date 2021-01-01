import React from "react";
import DOMPurity from "dompurify";

const AnswerButton = ({ answer, checkAnswer }) => {
  return (
    <>
      <button
        onClick={(e) => checkAnswer(e)}
        key={answer}
        dangerouslySetInnerHTML={{
          __html: DOMPurity.sanitize(answer),
        }}
        value={answer}
        className="answer-button"
      ></button>
    </>
  );
};

export default AnswerButton;
