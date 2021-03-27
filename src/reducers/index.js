import { combineReducers } from "redux";
import {
  SET_GAME_STATUS,
  SET_GAME_SCORE,
  GET_QUESTION_LIST,
} from "../actions/types";

const questionListReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QUESTION_LIST:
      return [...action.payload];
    default:
      return state;
  }
};
const gameStatusReducer = (state = "start-page", action) => {
  switch (action.type) {
    case SET_GAME_STATUS:
      return action.payload;
    default:
      return state;
  }
};

const gameScore = (state = 0, action) => {
  switch (action.type) {
    case SET_GAME_SCORE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  gameStatus: gameStatusReducer,
  questionList: questionListReducer,
  gameScore: gameScore,
});
