import React from "react";
import DOMPurity from "dompurify";
const Question = ({ question }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurity.sanitize(question),
      }}
      className="game-question"
    ></div>
  );
};

export default Question;
