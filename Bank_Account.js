function set_name(name){
  new_name = name;
};

function account_name(new_name){
  accountName = new_name;
  return accountName;
};

function set_account_number(accountNumber){
  accountLength = accountNumber.length;
  if (accountLength == 10){
    new_account_number = accountNumber;
    
  }else if(accountLength < 10){
    response = console.log("Number is less than 10")
  return response;
  }else if(accountLength > 10){
    response_for_greater = console.log("Number is more than 10")
  return response_for_greater;
  };
};

function account_balance(balance){
  this.balance = balance;
  return balance;
};

function deposit(deposit_amount){
  if(deposit_amount <= 0){
   console.log("Number is less minimum");
  }else{
   balance += deposit_amount;
   return balance;
  };
};


let name = 'Emma Adah';
let accountNumber = 8160502460;
let balance = 10000;
let deposit_amount = 590;

//Console for printing outcome.
console.log(account_name(name));
console.log(set_account_number(accountNumber));
console.log(account_balance(balance));
console.log('Your balance after deposit of',deposit_amount,'is',deposit(deposit_amount));






