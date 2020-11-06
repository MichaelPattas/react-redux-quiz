import React, { useEffect } from "react";
import DifficultyButton from "../components/DifficultyButton";
import StartButton from "../components/StartButton";

const StartPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="page">
      <div className="difficulty-title">Difficulty</div>
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

export default StartPage;
