import readlineSync from 'readline-sync';

export const ranNumb = (velicina) => Math.floor(Math.random() * velicina);

export const gameStart = (privet, ishDan) => {
  console.log('Welcome to the Brain Games!');
  const nam = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nam}!`);
  console.log(privet);
  let itog = true;
  for (let i = 0; i < 3; i += 1) {
    const [rightAnsw, gameStr] = ishDan();
    console.log('Question: ', gameStr);
    const answr = readlineSync.question('Your answer: ');
    if (answr === String(rightAnsw)) {
      console.log('Correct!');
    } else {
      itog = false;
      console.log(`'${answr}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
      console.log(`Let's try again, ${nam}!`);
      break;
    }
  }
  if (itog === true) {
    console.log(`Congratulations, ${nam}!`);
  }
};
