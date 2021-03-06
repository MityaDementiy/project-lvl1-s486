import playRound from '..';
import getRandom from '../utils';

const instruction = 'What is the result of the expression?';

const playCalc = () => {
  const firstRandomNum = getRandom(100, 1);
  const secondRandomNum = getRandom(100, 1);
  const numOfMathAction = getRandom(3, 1);

  let mathSymbol;
  let correctAnswer;
  switch (numOfMathAction) {
    case 1:
      mathSymbol = '+';
      correctAnswer = firstRandomNum + secondRandomNum;
      break;
    case 2:
      mathSymbol = '-';
      correctAnswer = firstRandomNum - secondRandomNum;
      break;
    default:
      mathSymbol = '*';
      correctAnswer = firstRandomNum * secondRandomNum;
  }
  const question = `${firstRandomNum} ${mathSymbol} ${secondRandomNum}`;
  const gameData = [question, correctAnswer.toString()];
  return gameData;
};
export default () => playRound(playCalc, instruction);
