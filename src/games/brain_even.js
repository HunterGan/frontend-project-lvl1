import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const isNumberEven = (num) => (num % 2 === 1);

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
