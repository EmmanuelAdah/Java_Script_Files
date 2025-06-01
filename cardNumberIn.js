function cardNumberIn(array){

	let valid = "";
	let issuer = "";

	if (array[0] == 4 && array.length == 16){
		issuer = "Visa";  valid = true;
	} else if (array[0] == 5 && array.length == 16){
		issuer = "Mastercard";  valid = true;
	} else if (array[0] == 6 && array.length == 16){
		issuer = "Discover";  valid = true;
	} else if (array[0] == 3 && array.length == 15){
		issuer = "American Express";  valid = true;
	} else{
		valid = false; issuer = "Invalid card number";
	};
	return issuer;
};


let array = [3,9,8,4,5,6,8,4,7,9,5,4,3,7,6];
console.log(cardNumberIn(array))

module.exports = {cardNumberIn};

