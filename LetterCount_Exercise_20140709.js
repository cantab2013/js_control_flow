/*

Given a string, write a function that finds out how many times a character occurs. For example, the string "apple" would print the following:

a - 1
p - 2
l - 1
e - 1

BONUS: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

*/

var letterCount = function (string) {
	
	var myArray = [];
	var myOutput = [
			["a", 0],
			["b", 0],
			["c", 0],
			["d", 0],
			["e", 0],
			["f", 0],
			["g", 0],
			["h", 0],
			["i", 0],
			["j", 0],
			["k", 0],
			["l", 0],
			["m", 0],
			["n", 0],
			["o", 0],
			["p", 0],
			["q", 0],
			["r", 0],
			["s", 0],
			["t", 0],
			["u", 0],
			["v", 0],
			["w", 0],
			["x", 0],
			["y", 0],
			["z", 0]
		];
	
	//converts to array from string
	for (i=0;i<string.length;i++) {
		myArray.push(string[i].toLowerCase());
	}

	// console.log(myArray);

	//counts characters and updates Output log
	for (i=0;i<myArray.length;i++) {
		for (j=0;j<myOutput.length;j++) {
			if (myOutput[j][0]===myArray[i]) {

				myOutput[j][1]++;
			}
		}
	}

//	console.log(myOutput);
	
	//Outputs
	for (i=0;i<myOutput.length;i++) {
			if (myOutput[i][1] !== 0) {
				console.log(myOutput[i][0], "-", myOutput[i][1]);
			}
		}
	
}

letterCount("Apple");
