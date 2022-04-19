import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const checkPrime = (num) => {
  const highRange = Math.sqrt(num);
  for (let i = 2; i <= highRange; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const initialData = () => {
  const num = getRandomNumber(1, 100);
  const gameExpression = String(num);
  const rightAnswer = (checkPrime(num)) ? 'yes' : 'no';
  return [rightAnswer, gameExpression];
};

const brainPrime = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameQuestion, initialData);
};

export default brainPrime;
