import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const highestDivider = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else number2 -= number1;
  }
  return number1;
};

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
