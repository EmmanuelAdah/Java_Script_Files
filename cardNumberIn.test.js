const {cardNumberIn} = require('./cardNumberIn');

test('to validate card number and the issuer', () => {
	let array = [4,5,6,7,4,4,4,4,3,5,3,3,7,9,5,3];
	expect(
	cardNumberIn(array)
	).toBe("Visa")
});