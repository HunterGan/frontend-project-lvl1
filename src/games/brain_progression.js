import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const createProgression = (lengthProgression, hiddenNumberIndex, num) => {
  let gameExpression = '';
  let hiddenNumber;
  const stepProgression = getRandomNumber(1, 10);
  let nextNum = num;
  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === hiddenNumberIndex) {
      gameExpression += '.. ';
      hiddenNumber = String(nextNum);
    } else {
      gameExpression += (`${nextNum} `);
    }
    nextNum += stepProgression;
  }
  return [hiddenNumber, gameExpression];
};

const initialData = () => {
  const progAmount = getRandomNumber(5, 11);
  const hiddenNumIndex = getRandomNumber(0, progAmount);
  const firstNum = getRandomNumber(0, 100);
  const [rightAnswer, gameExpression] = createProgression(progAmount, hiddenNumIndex, firstNum);
  return [rightAnswer, gameExpression];
};

const brainProgression = () => {
  const gameQuestion = 'What number is missing in the progression?';
  startGame(gameQuestion, initialData);
};

export default brainProgression;
