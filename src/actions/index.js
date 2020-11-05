export const setDifficultyLevel = (difficulty) => {
  return {
    type: "DIFFICULTY_LEVEL",
    payload: difficulty,
  };
};

export const setGameStatus = (status) => {
  return {
    type: "SET_GAME_STATUS",
    payload: status,
  };
};

export const setLoadingStatus = (status) => {
  return {
    type: "SET_LOADING_STATUS",
    payload: status,
  };
};

export const setGameoverStatus = (status) => {
  return {
    type: "SET_GAMEOVER_STATUS",
    payload: status,
  };
};
export const setFinalScore = (score) => {
  return {
    type: "SET_FINAL_SCORE",
    payload: score,
  };
};
export const setQuestionNumber = (number) => {
  return {
    type: "SET_QUESTION_NUMBER",
    payload: number + 1,
  };
};
