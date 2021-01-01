import React, { useState } from "react";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { succesRate } from "../utils/utils";
import { setGameStatus } from "../actions";

const GameOver = ({ setGameStatus, gameScore }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const restartGame = () => {
    setGameStatus("start-page");
  };

  if (loading === true) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="game-over-title">
        <h1>Game over</h1>
      </div>
      <div className="bottom-line"></div>
      <div className="succes-rate">
        {<h3>Succes Rate: {`${succesRate(gameScore, 10)}`} %</h3>}
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
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setGameStatus,
})(GameOver);
