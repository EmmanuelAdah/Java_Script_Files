//1. Function declaration  = can be called anywhere.
//2. Function expression = must exist before being called

/*
--------------
function declaration
---------------
function greet(){
  let reply = "Hello";
  return reply
};

console.log(greet());

---------
function expression
--------
const greet = function(){
   let reply = "Hello";
   return reply
};

console.log(greet());

let name = "Emma"
let age = 20

const greet = function(name, age){
   let concat = name + "  " + age;
   return concat;
};

console.log(greet(name, age));

let numberOne = 3;

function getProduct(number){
  let numberTwo = 2;

  function multiply(value){
    let product = value * number;
    return product;
  }
  return multiply(numberTwo);
}

console.log(getProduct(numberOne));

*/
let numberOne = 3;
let numberTwo = 2;

function getAnswer(number, secondNumber){
  let numberThree = 4;

  function multiply(){
    let result = number * secondNumber * numberThree;
    return result;
  }
  return multiply();
}

console.log(getAnswer(numberOne, numberTwo));



 