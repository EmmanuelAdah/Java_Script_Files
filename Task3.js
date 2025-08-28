function armstrongNumber(userInput){
    let numbers = userInput
    let numberLength = numbers.toString().length
    let total = 0

    for (let number = 0; number < numberLength; number++){
        let digit = numbers % 10
        numbers = Math.floor(numbers / 10)
        let cube = Math.pow(digit, numberLength)
        total += cube
    }
    let isArmstrong = (userInput === total)
    return isArmstrong
};

console.log(armstrongNumber(9474))