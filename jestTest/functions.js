function getEvenNumbers(array){
    let evenNumbers = Array.from(array).filter(number => number % 2 === 0)
    return evenNumbers;
}

function evenNumbers(array){
    return array.filter(number => number % 2 === 0)
}

function oddNumbers(array){
    return array.filter(number => number % 2 !== 0)
}

const createCounter = function(){
    let count = 0
    return {
        getCount: () => {
            return count
        },
        increment:() => {
            count++;
        },
        decrement: () => {
            count--
        },
        reset: () => {
           count = 0
        }
    }
}

module.exports = {
    getEvenNumbers,
    evenNumbers,
    oddNumbers,
    createCounter
}