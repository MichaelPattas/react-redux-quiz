import { setGameStatus, setGameScore } from "../index";
import { SET_GAME_STATUS, SET_GAME_SCORE, GET_QUESTION_LIST } from "../types";

describe("Action creators", () => {
  describe("setGameStatus", () => {
    it("Returns correct payload", () => {
      const action = setGameStatus();

      expect(action.type).toEqual(SET_GAME_STATUS);
    });

    it("Returns the correct payload", () => {
      const action = setGameStatus("correct payload");

      expect(action.payload).toEqual("correct payload");
    });
  });

  describe("setGameScore", () => {
    it("Returns correct payload", () => {
      const action = setGameScore();

      expect(action.type).toEqual(SET_GAME_SCORE);
    });

    it("Returns the correct payload", () => {
      const action = setGameScore("correct payload");

      expect(action.payload).toEqual("correct payload");
    });
  });
});
