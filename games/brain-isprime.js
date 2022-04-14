import { gameStart, ranNumb } from '../src/index.js';

const isPrime = (numPr) => {
  for (let i = 2; i < Math.sqrt(numPr); i += 1) {
    if (numPr % i === 0) {
      return false;
    }
  }
  return numPr > 1;
};

export const ishDan = () => {
  const num = Math.abs(ranNumb(100) + 1);
  const gameStr = num;
  const rightAnsw = (isPrime(num)) ? 'yes' : 'no';
  return [rightAnsw, gameStr];
};

const brPrime = () => {
  const privet = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameStart(privet, ishDan);
};

export default brPrime;
