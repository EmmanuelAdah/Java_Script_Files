function cardNumberIn(array){

	let counter = 1;
	let cardDigits = "";
	let valid = "";
	let issuer = "";

	for (item in array){
		cardDigits += item;
	}
	if (cardDigits.charAt(0) == '4' && array.length + 1 == 16){
		issuer = "Visa";  valid = true;
	} else if (cardDigits.charAt(0) == '5' && array.length + 1 == 16){
		issuer = "Mastercard";  valid = true;
	} else if (cardDigits.charAt(0) == '6' && array.length + 1 == 16){
		issuer = "Discover";  valid = true;
	} else if (cardDigits.charAt(0) == '3' && array.length + 1 == 15){
		issuer = "American Express";  valid = true;
	} else if(array.length + 1 < 15 || array.length + 1 > 16){
		valid = false; issuer = "Invalid length";
	}
	return issuer;
};


let array = [3,9,8,4,5,6,8,4,7,9,5,4,3,7,6,5];
console.log(cardNumberIn(array))