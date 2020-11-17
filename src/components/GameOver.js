import React from "react";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { succesRate } from "../utils/utils";
import {
  setGameStatus,
  setQuestionNumber,
  setDifficultyLevel,
  setGameScore,
} from "../actions";
const GameOver = ({
  setGameStatus,
  setDifficultyLevel,
  gameScore,
  setGameScore,
  loading,
}) => {
  const restartGame = () => {
    setGameScore(0);
    setDifficultyLevel(null);
    setGameStatus("start-page");
  };

  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="game-page">
      <div className="game-over-page">
        <div className="game-over-title">
          <h1>Game over</h1>
        </div>
        <div className="succes-rate">
          {<h3>Succes Rate: {succesRate(gameScore, 10)} %</h3>}
        </div>

        <div>
          <button
            onClick={() => restartGame()}
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

export default connect(mapStateToProps, {
  setGameStatus,
  setQuestionNumber,
  setDifficultyLevel,
  setGameScore,
})(GameOver);
