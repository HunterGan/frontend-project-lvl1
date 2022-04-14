import { gameStart, ranNumb } from '../src/index.js';

export const ishDan = () => {
  const amProgr = Math.abs(ranNumb(5) + 1);
  let gameStr = '';
  let num = Math.abs(ranNumb(50) + 1);
  let propNum;
  const strDlina = Math.abs(ranNumb(5) + 6);
  const indMissed = Math.abs(ranNumb(strDlina));
  for (let i = 0; i < strDlina; i += 1) {
    if (i === indMissed) {
      gameStr += ' ..';
      propNum = num;
    } else {
      gameStr += (` ${num}`);
    }
    num += amProgr;
  }

  return [propNum, gameStr];
};

const brProg = () => {
  const privet = 'What number is missing in the progression?';
  gameStart(privet, ishDan);
};

export default brProg;
