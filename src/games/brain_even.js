import startGame from '../index.js';
import { getRandomNumber, isNumberEven } from '../utils.js';

const initialData = () => {
  const num = getRandomNumber(1, 100);
  const rightAnswer = (isNumberEven(num)) ? 'no' : 'yes';
  const gameExpression = String(num);
  return [rightAnswer, gameExpression];
};

const brainEven = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameQuestion, initialData);
};

export default brainEven;
