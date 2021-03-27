import React from "react";
import { connect } from "react-redux";
import { setGameStatus } from "../actions";

const Navbar = ({ gameStatus, setGameStatus }) => {
  const restartGame = () => setGameStatus("start-page");

  const renderIcon = () => {
    const icon = (
      <i
        onClick={restartGame}
        className="fas fa-arrow-left fa-3x navbar-button"
      ></i>
    );
    return gameStatus == "game-page" ? icon : null;
  };

  return (
    <div className="navbar">
      <div className="navbar-icon">{renderIcon()}</div>
      <h1 className="logo">Quiz-Game</h1>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { setGameStatus })(Navbar);
