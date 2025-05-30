let score = 56;
let division = Math.floor(score/10);

switch(division){
	case 0:
	case 1:
	case 2:
	case 3: console.log("F");
		break;
	case 4: console.log("P");
		break;
	case 5: console.log("C");
		break;
	case 6: console.log("B");
		break;
	case 7: console.log("A");
		break;
	case 8: console.log("A");
		break;
	case 9: console.log("A");
		break;
	case 10: console.log("A");
		break;

}

(score < 50)? console.log("Fail"): console.log("Pass")