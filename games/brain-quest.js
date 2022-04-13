import { gameStart, ranNumb } from '../src/index.js';

export const ishDan = () => {
  const num = ranNumb(50) + 1;
  const rightAnsw = (num % 2 === 1) ? 'no' : 'yes';
  const gameStr = num;
  return [rightAnsw, gameStr];
};

const brainQuest = () => {
  const privet = 'What is the result of the expression?';
  gameStart(privet, ishDan);
};

export default brainQuest;
