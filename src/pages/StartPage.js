import React from "react";
import DifficultyButton from "../components/DifficultyButton";
import StartButton from "../components/StartButton";
import { connect } from "react-redux";
const StartPage = ({ difficultyMessage }) => {
  return (
    <div className="page">
      <div className="difficulty-title">{difficultyMessage}</div>
      <div className="pick-difficulty">
        <p className="difficulty"></p>
        <DifficultyButton level={"easy"} name={"Easy"} />
        <DifficultyButton level={"medium"} name={"Normal"} />
        <DifficultyButton level={"hard"} name={"Hard"} />
      </div>
      <StartButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(StartPage);
