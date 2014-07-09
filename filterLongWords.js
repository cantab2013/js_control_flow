
var myArray = ["apple", "orange", "pear", "strawberry", "banana"];
var myArrayFiltered = [];
var maxLength = 5;

for(var i=0; i<myArray.length; i++) {
	if (myArray[i].length <= maxLength) {
		myArrayFiltered.push(myArray[i]);
	}
	else {}
}

console.log(myArrayFiltered);
