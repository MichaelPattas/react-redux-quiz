export const setGameStatus = (status) => {
  return {
    type: "SET_GAME_STATUS",
    payload: status,
  };
};

export const setGameScore = (number) => {
  return {
    type: "SET_GAME_SCORE",
    payload: number + 1,
  };
};
