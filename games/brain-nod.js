import { gameStart, ranNumb } from '../src/index.js';

export const ishDan = () => {
  let num1 = Math.abs(ranNumb(50) + 1);
  let num2 = Math.abs(ranNumb(50) + 1);
  const gameStr = `${num1} ${num2}`;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else num2 -= num1;
  }

  return [num1, gameStr];
};

const brainNod = () => {
  const privet = 'Find the greatest common divisor of given numbers.';
  gameStart(privet, ishDan);
};

export default brainNod;
