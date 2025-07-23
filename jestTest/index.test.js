const {getEvenNumbers,
    evenNumbers,
    oddNumbers,
    createCounter
} = require ("./functions")

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1,2,3,4,5,6,7,8,9] ;//Arrange
    const result = getEvenNumbers(arrayOfNumbers);  //Act
    expect(result).toEqual([2,4,6,8]);  //Assert
})

test("that the function returns even numbers", () => {
    const numbers = [5,6,7,3,3,2,1];
    const outcome = evenNumbers(numbers);
    expect(outcome).toEqual([6,2])
})

test("that the function returns odd numbers", () => {
    const numbers = [5,6,7,3,2,1];
    const result = oddNumbers(numbers);
    expect(result).toEqual([5,7,3,1]) // toEqual for Objects
})

describe("createCounter", () => {
    test("that the initial count is 0", () => {
        const counter = createCounter();
        expect(counter.getCount()).toBe(0) //toBe for primitive types
    })
    test("that count increases by 1", () => {
        const counter = createCounter()
        counter.increment()
        expect(counter.getCount()).toBe(1)
    })
})