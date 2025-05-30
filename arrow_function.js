/*
----------------
Function expression
----------------

const signUp = () =>{
  console.log("Registration is successful")
}

signUp()
*/

//Array in a function
let arrayOfNnumbers = [2,4,5,6,7,8];

const print = (array) =>{
  for (let number of array){
    console.log(number);
  };
};

print(arrayOfNnumbers);


//Array in a function
let arrayOfNnumber = [2,4,5,6,7,8];

const printNumbers = function (array){
  for (let number of array){
    console.log(number);
  };
};

printNumbers(arrayOfNnumber);