import { gameScore, gameStatusReducer, questionListReducer } from "../reducers";

import {
  SET_GAME_STATUS,
  SET_GAME_SCORE,
  GET_QUESTION_LIST,
} from "../../actions/types";

describe("Test reducers", () => {
  it("gameScore", () => {
    const action = {
      type: SET_GAME_SCORE,
      payload: 1,
    };

    const newState = gameScore(0, action);
    expect(newState).toEqual(1);
  });

  it("gameStatusReducer", () => {
    const action = {
      type: SET_GAME_STATUS,
      payload: "game-page",
    };

    const newState = gameStatusReducer("", action);
    expect(newState).toEqual("game-page");
  });

  it("questionListReducer", () => {
    const action = {
      type: GET_QUESTION_LIST,
      payload: [{ name: "nick" }, { name: "mike" }],
    };

    const newState = questionListReducer([], action);
    expect(newState).toEqual([{ name: "nick" }, { name: "mike" }]);
  });
});
