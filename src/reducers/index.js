import { combineReducers } from "redux";
import { returnActionPayload } from "../utils/utils";

const gameoverReducer = returnActionPayload("SET_GAMEOVER_STATUS");
const difficultyReducer = returnActionPayload("DIFFICULTY_LEVEL");
const loadingReducer = returnActionPayload("SET_LOADING_STATUS");

const questionListReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_QUESTIONS_LIST":
      return [...action.payload];
    default:
      return state;
  }
};
const gameStatusReducer = (state = "start-page", action) => {
  switch (action.type) {
    case "SET_GAME_STATUS":
      return action.payload;
    default:
      return state;
  }
};

const questionNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_QUESTION_NUMBER":
      return action.payload;
    default:
      return state;
  }
};

const difficultyMessage = (state = "", action) => {
  switch (action.type) {
    case "SET_DIFFICULTY_MESSAGE":
      return action.payload;
    default:
      return state;
  }
};
const gameScore = (state = 0, action) => {
  switch (action.type) {
    case "SET_GAME_SCORE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  difficulty: difficultyReducer,
  gameStatus: gameStatusReducer,
  loading: loadingReducer,
  questionList: questionListReducer,
  gameover: gameoverReducer,
  questionNumber: questionNumberReducer,
  difficultyMessage: difficultyMessage,
  gameScore: gameScore,
});
