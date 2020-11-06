import React, { useEffect } from "react";
import { connect } from "react-redux";
import GameCard from "../components/GameCard";

import {
  setGameStatus,
  setLoadingStatus,
  setQuestionNumber,
} from "../actions/index";
import Loading from "../components/Loading";

const GamePage = ({ loading, setLoadingStatus, setGameStatus }) => {
  return (
    <div className="game-page">
      <GameCard />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  setLoadingStatus,
  setGameStatus,
})(GamePage);
