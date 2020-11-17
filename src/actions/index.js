import { difficultyLevelMessage } from "../utils/utils";

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

export const setQuestionNumber = (number) => {
  return {
    type: "SET_QUESTION_NUMBER",
    payload: number + 1,
  };
};

export const setDifficutyMessage = (message = difficultyLevelMessage) => {
  return {
    type: "SET_DIFFICULTY_MESSAGE",
    payload: message,
  };
};

export const setGameScore = (number) => {
  return {
    type: "SET_GAME_SCORE",
    payload: number + 1,
  };
};
