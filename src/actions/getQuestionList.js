export const getQuestionList = (difficultyLevel) => {
  return async (dispach) => {
    const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy`;
    const data = await (await fetch(endpoint)).json();

    dispach({ type: "GET_QUESTIONS_LIST", payload: [...data.results] });
  };
};
