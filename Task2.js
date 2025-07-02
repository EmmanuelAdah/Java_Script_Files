const prompt = require("prompt-sync")()

function smallestMultiples(userInput){
    let numbers = userInput
    let digits = ''
    
    for (let number = 0; number < 10; number++){
        for(let count = 0; count < 10; count++){
            let multiples = number * count
            if (multiples == numbers){
                digits = `${count}${number}`
            }
        } 
    };
    return digits
    };

userInput = prompt("Enter integer: ")
console.log(smallestMultiples(userInput))