import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const isNumberEven = (num) => (num % 2 === 0);

const initialData = () => {
  const num = getRandomNumber(1, 100);
  const rightAnswer = (isNumberEven(num)) ? 'yes' : 'no';
  const gameExpression = String(num);
  return [rightAnswer, gameExpression];
};

const brainEven = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameQuestion, initialData);
};

export default brainEven;
