import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getCalculation = (num1, num2, operationType) => {
  let calcResult = num1;
  switch (operationType) {
    case '-':
      calcResult -= num2;
      break;
    case '+':
      calcResult += num2;
      break;
    case '*':
      calcResult *= num2;
      break;
    default:
      break;
  }
  return calcResult;
};

const initialData = () => {
  const operations = ['-', '+', '*'];
  const num1 = getRandomNumber(0, 50);
  const num2 = getRandomNumber(0, 50);
  const operationIndex = getRandomNumber(0, 3);
  const operationType = operations[operationIndex];
  const gameExpression = (`${num1} ${operationType} ${num2}`);
  const rightAnswer = String(getCalculation(num1, num2, operationType));
  return [rightAnswer, gameExpression];
};

const brainCalc = () => {
  const gameQuestion = 'What is the result of the expression?';
  startGame(gameQuestion, initialData);
};

export default brainCalc;
