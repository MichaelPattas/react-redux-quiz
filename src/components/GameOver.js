import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setGameStatus, setQuestionNumber } from "../actions";
const GameOver = ({ setGameStatus, setQuestionNumber }) => {
  useEffect(() => {
    setQuestionNumber(0 - 1);
  }, []);
  return (
    <div className="game-page">
      <div className="game-over-page">
        <div className="game-over-title">
          <h1>Game over</h1>
        </div>
        <div className="succes-rate">
          {/* <h1>{succesRate(correct, 10)}%</h1> */}
        </div>

        <div>
          <button
            onClick={() => setGameStatus("start-page")}
            className="button-difficulty start-button"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setGameStatus, setQuestionNumber })(
  GameOver
);
