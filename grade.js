var testScore = 88;

switch (true) {
	case testScore>=90:
		console.log("A");
		break;
	case testScore>=80 && testScore<90:
		console.log("B");
		break;
	case testScore>=70 && testScore<80:
		console.log("C");
		break;
	case testScore>=60 && testScore<70:
		console.log("D");
		break;
	case testScore<60:
		console.log("F");
		break;
	default:
		console.log("Something's wrong");
}