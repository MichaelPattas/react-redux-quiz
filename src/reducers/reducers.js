import {
  SET_GAME_STATUS,
  SET_GAME_SCORE,
  GET_QUESTION_LIST,
} from "../actions/types";

export const questionListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTION_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export const gameStatusReducer = (state = "start-page", action) => {
  switch (action.type) {
    case SET_GAME_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const gameScore = (state = 0, action) => {
  switch (action.type) {
    case SET_GAME_SCORE:
      return action.payload;
    default:
      return state;
  }
};
