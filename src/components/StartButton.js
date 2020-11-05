import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setGameStatus, setLoadingStatus } from "../actions";

const StartButton = ({ setGameStatus, setLoadingStatus, difficulty }) => {
  const startGame = () => {
    if ((difficulty = !null)) {
      setGameStatus("game-page");
      return setLoadingStatus(true);
    }
  };

  return (
    <div>
      <button onClick={startGame} className="button-difficulty start-button">
        Start Game
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { setGameStatus, setLoadingStatus })(
  StartButton
);
