const prompt = require('prompt-sync')();
let correctAnswers = 0
let attempt = 0
let counter = 0

while (counter != 10){
	let firstNumber = Math.floor(Math.random() * 20);
	let secondNumber = Math.floor(Math.random() * 20);
	console.log("What is ",firstNumber," - ",secondNumber);

	for (let count = 0; count <= 2; count++){
		if (firstNumber > secondNumber && count != 2){
			let answer = prompt("Enter answer: ")
			if (answer == (firstNumber - secondNumber)){
				correctAnswers += 1;
				counter += 1;
				attempt += 1;
				break;
				}
			else{
				attempt += 1;
				break;
				}
			}
		}
	};
	console.log("The number of correct answers is ",correctAnswers ," and the number of attempts is ",attempt);
	console.log("Score = ",correctAnswers, " / ", attempt)
