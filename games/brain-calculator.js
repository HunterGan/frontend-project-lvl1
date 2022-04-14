import { gameStart, ranNumb } from '../src/index.js';

export const ishDan = () => {
  const znak = ['-', '+', '*'];
  const num1 = ranNumb(50);
  const num2 = ranNumb(50);
  const operInd = Math.abs(ranNumb(3));
  const oper = znak[operInd];
  const gameStr = (`${num1} ${oper} ${num2}`);
  let rightAnsw;
  switch (operInd) {
    case 0:
      rightAnsw = num1 - num2;
      break;
    case 1:
      rightAnsw = num1 + num2;
      break;
    default:
      rightAnsw = num1 * num2;
      break;
  }
  return [rightAnsw, gameStr];
};

const brCalc = () => {
  const privet = 'What is the result of the expression?';
  gameStart(privet, ishDan);
};

export default brCalc;
