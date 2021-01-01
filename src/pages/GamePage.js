import React, { useState } from "react";

import { connect } from "react-redux";

import GameCard from "../components/GameCard";
import Loading from "../components/Loading";

const GamePage = ({ questionList }) => {
  const [loading, setLoading] = useState(true);

  if (questionList[0]) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  if (loading) return <Loading />;
  return (
    <div>
      <GameCard />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(GamePage);
