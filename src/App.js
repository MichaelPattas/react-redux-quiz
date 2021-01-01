import React from "react";

//Pages
import StartPage from "./pages/StartPage";
//Components
import Navbar from "./components/Navbar";
import GamePage from "./pages/GamePage";
import Footer from "./components/Footer";
import GameOver from "./components/GameOver";
import { connect } from "react-redux";

const App = ({ gameStatus }) => {
  const selectPage = () => {
    switch (gameStatus) {
      case "start-page":
        return <StartPage />;
      case "game-page":
        return <GamePage />;
      case "game-over-page":
        return <GameOver />;
      default:
        return <StartPage />;
    }
  };

  return (
    <div className="layout container">
      <Navbar />
      {selectPage()}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {})(App);
