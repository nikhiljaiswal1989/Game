export const getCardObjectArray = () => {
  let cardObjectArray = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = parseInt(Math.random() * 100, 10);
    cardObjectArray.push(cardObject(false, randomNumber));
    cardObjectArray.push(cardObject(false, randomNumber));
  }
  return shuffle(cardObjectArray);
};

export const cardObject = (isOpen, text, isMatchFound = false) => {
  return {
    isOpen,
    text,
    isMatchFound,
  };
};

const shuffle = (cardObjectArray) => {
  for (let i = cardObjectArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cardObjectArray[i];
    cardObjectArray[i] = cardObjectArray[j];
    cardObjectArray[j] = temp;
  }
  return cardObjectArray;
};

export const getNewCardObjectArray = (cardObjectArray, clickedIndexArray) => {
  for (let i = 0; i < cardObjectArray.length; i++) {
    cardObjectArray[i] = cardObject(
      false,
      cardObjectArray[i].text,
      cardObjectArray[i].isMatchFound,
    );
  }
  for (let i = 0; i < clickedIndexArray.length; i++) {
    for (let j = i + 1; j < clickedIndexArray.length; j++) {
      if (
        cardObjectArray[clickedIndexArray[i]].text ===
        cardObjectArray[clickedIndexArray[j]].text
      ) {
        cardObjectArray[clickedIndexArray[i]] = cardObject(
          true,
          cardObjectArray[clickedIndexArray[i]].text,
          true,
        );
        cardObjectArray[clickedIndexArray[j]] = cardObject(
          true,
          cardObjectArray[clickedIndexArray[j]].text,
          true,
        );
      }
    }
  }
  return cardObjectArray;
};
