export const shuffleArray = (array) => array.sort(() => Math.random() - 0.3);

export const succesRate = (correct, number) => {
  return (correct / number) * 100;
};

export const addClassName = (element, name) => {
  return element.classList.add(name);
};

export const removeClassName = (element, name) => {
  return element.classList.remove(name);
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
