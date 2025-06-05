const prompt = require("prompt-sync")();

/* function validateInput(userInput){
	if (userInput > 0 && userInput <= 10){
		let randomNumber = Math.floor(Math.random() * 10)
		console.log(question[randomNumber].key(question))
		}
}

function 
*/
let question = {1: "What is the full meaning of OOP?",
2: "What is the capital of Nigeria?", 
3:"Array is a programming language?", 
4:"School educates people.",
5:"Where is Semicolon located?",
6:"What is 3 * 3", 
7:"When is christmas?",
8:"English is a language",
9:"9 * 3 = 21",
10:"Car is a machine"
};

let answers = [{a:"Open Opposite Pathway", b:"Opposite Pathway", c:"Object Oriented Programming", d:"None of the above"},
{a:"Lagos", b: "Abuja", c:"Ogun", d:"Makurdi"},
{a:"True", b:"False"},
{a:"False", b:"True"},
{ a:"Abuja", b:"Lagos", c:"Osun", d:"None of the above"},
{a:"6", b:"12", c:"9",d:"3"},
{a:"25 Dec", b:"25 Jan", c:"1 jan", d:"13 Apr"},
{a:"False", b:"True"},
{a:"True", b:"False"},
{a:"True", b:"False"}
];
console.log("Welcome to Semicolon Assessment.")

console.log(Object.keys(question[1]));
let userInput = prompt("Enter question number: ")
if (userInput > 0 && userInput <= 10){
		let randomNumber = Math.floor(Math.random() * 10);
		switch (usersChoice){
			case 1: {				
				let firstQues = true;	
				while (firstQues = true){
				let count = 0;
				console.log("What is the full meaning of OOP?%n (a) Open Opposite Pathway %n(b) Opposite Pathway%n(c) Object Oriented Programming%n(d) None of the above%n", question1);
				console.log("Enter selection: ");
				let selection = input.next();
				if (selection == "c"){
					System.out.print("Correct");
					array[0] = 0;
					firstQues = false;
					}
					else if (selection != "c" && count != 2){
					count += 1;
					firstQues = true;
				}
			}
		}
	}
}