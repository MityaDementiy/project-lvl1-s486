import readlineSync from 'readline-sync';

const sayHi = () => {
	console.log('Welcome to the Brain Games!');
	const getName = readlineSync.question('May I have your name?');
	console.log(`Hello, ${getName}!`);
};
export default sayHi;




