export const shuffleArray = (array) =>
  [...array].sort(() => Math.random() - 0.5);

export const succesRate = (correct, number) => {
  return (correct / number) * 100;
};

// Return  payload of actions you dont want to modify
export const returnActionPayload = (type) => (state = null, action) => {
  return action.type === type ? action.payload : state;
};
