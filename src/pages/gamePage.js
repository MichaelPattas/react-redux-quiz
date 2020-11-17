import React from "react";
import GameCard from "../components/GameCard";
import { setLoadingStatus } from "../actions";
import { connect } from "react-redux";
import Loading from "../components/Loading";

const GamePage = ({ loading, setLoadingStatus }) => {
  setTimeout(() => {
    setLoadingStatus(null);
  }, 2000);

  if (loading === true) {
    return <Loading />;
  } else {
    return (
      <div className="game-page">
        <GameCard />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { setLoadingStatus })(GamePage);
