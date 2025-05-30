public class AtmCardNumber {

	public static String cardNumberIn (int[] array){

	String cardDigits = "";
	boolean valid = false;
	String issuer = "";

	for (int index = 0; index < array.length; index++){
		cardDigits += array[index];
	}
	if (cardDigits.charAt(0) == '4' && array.length + 1 == 16){
		issuer = "Visa";  valid = true;
	}
	else if (cardDigits.charAt(0) == '5' && array.length + 1 == 16){
		issuer = "Mastercard";  valid = true;
	}
	else if (cardDigits.charAt(0) == '6' && array.length + 1 == 16){
		issuer = "Discover";  valid = true;
	}
	else if (cardDigits.charAt(0) == '3' && array.length + 1 == 15){
		issuer = "American Express";  valid = true;
	}
	else {
		valid = false; issuer = "Invalid length";
	}
	System.out.print(issuer);
	return issuer;
	}

}