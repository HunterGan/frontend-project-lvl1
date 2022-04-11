import readlineSync from 'readline-sync';

const ranNumb = (velicina) => Math.floor(Math.random() * velicina);

const gameStart = (gameKind) => {
  console.log('Welcome to the Brain Games!');
  const nam = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nam}!`);
  let firstLoop = true;
  let itog = true;
  for (let i = 0; i < 3; i += 1) {
    let gameStr = '';
    let rightAnsw;
    switch (gameKind) {
      case 'calc': {
        if (firstLoop === true) {
          console.log('What is the result of the expression?');
        }
        const znak = ['-', '+', '*'];
        const num1 = ranNumb(50);
        const num2 = ranNumb(50);
        const operInd = Math.floor(Math.random() * 3);
        const oper = znak[operInd];
        gameStr = num1 + oper + num2;
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
        break;
      }
      case 'even': {
        if (firstLoop === true) {
          console.log('Answer "yes" if the number is even, otherwise answer "no".');
        }
        const num = ranNumb(50) + 1;
        rightAnsw = (num % 2 === 1) ? 'no' : 'yes';
        gameStr = num;
        break;
      }
      default:
        break;
    }
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
    firstLoop = false;
  }
  if (itog === true) {
    console.log(`Congratulations, ${nam}!`);
  }
};

export default gameStart;
