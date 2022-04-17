import startGame from '../index.js';
import { getRandomNumber, highestDivider } from '../utils.js';

const initialData = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const gameExpression = `${num1} ${num2}`;
  const rightAnswer = String(highestDivider(num1, num2));
  return [rightAnswer, gameExpression];
};

const brainHighestDivider = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  startGame(gameQuestion, initialData);
};

export default brainHighestDivider;
