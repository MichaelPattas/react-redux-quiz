import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

import { connect } from "react-redux";
import Loading from "../components/Loading";

const GamePage = ({ questionList }) => {
  const [loading, setLoading] = useState(true);

  if (questionList[0]) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  if (loading) return <Loading />;
  return (
    <div className="game-page">
      <GameCard />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(GamePage);
