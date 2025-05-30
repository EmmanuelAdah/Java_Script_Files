const prompt = require("prompt-sync")();
let left_operand = Number(prompt("Enter first number: ").trim());
let operator = prompt("Enter arithmetic symbol(*,+,/, or -): ").trim();
let right_operand = Number(prompt("Enter second number: ").trim());
let ans = 0;
 
let addition = (left_operand + right_operand);
let subtraction = (left_operand - right_operand);
let multiplication = (left_operand * right_operand);
let division = (left_operand / right_operand);

if(operator == "+"){
ans = addition;
console.log(ans);
}else if(operator == "-"){
ans = subtraction;
console.log(ans);
}else if(operator == "*"){
ans = multiplication;
console.log(ans);
}else if(operator == "/"){
ans = division;
console.log(ans);
}else{
ans = NaN;
console.log(ans);
};

