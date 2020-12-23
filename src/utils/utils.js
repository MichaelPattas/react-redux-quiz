export const shuffleArray = (array) => array.sort(() => Math.random() - 0.3);

export const succesRate = (correct, number) => {
  return (correct / number) * 100;
};

// Return  payload of actions you dont want to modify
export const returnActionPayload = (type) => (state = null, action) => {
  return action.type === type ? action.payload : state;
};

//Add Class
export const addClassName = (element, name) => {
  element.classList.add(name);
  element.parentNode.parentNode.classList.add("disabled");
};
//Remove Class
export const removeClassName = (element, name) => {
  element.classList.remove(name);
  element.parentNode.parentNode.classList.remove("disabled");
};

export const difficultyButtonInformation = [
  {
    buttonName: "Easy",
    difficultyLevel: "easy",
  },
  {
    buttonName: "Normal",
    difficultyLevel: "medium",
  },
  {
    buttonName: "Hard",
    difficultyLevel: "hard",
  },
];

export const difficultyLevelMessage = "Please Choose  Difficulty Level";
