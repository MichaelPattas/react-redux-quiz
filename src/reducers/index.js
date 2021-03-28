import { combineReducers } from "redux";
import { questionListReducer, gameStatusReducer, gameScore } from "./reducers";

export default combineReducers({
  gameStatus: gameStatusReducer,
  questionList: questionListReducer,
  gameScore: gameScore,
});
