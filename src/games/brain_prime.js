import startGame from '../index.js';
import { checkPrime, getRandomNumber } from '../utils.js';

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
