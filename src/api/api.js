import { shuffleArray } from "../utils/utils";

export const fetchData = async (difficultyLevel) => {
  const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=${difficultyLevel}`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
