import { GET_QUESTION_LIST } from "./types";

export const getQuestionList = (difficultyLevel) => {
  return async (dispach) => {
    const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficultyLevel}`;
    const data = await (await fetch(endpoint)).json();

    dispach({ type: GET_QUESTION_LIST, payload: [...data.results] });
  };
};
