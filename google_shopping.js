var data = require("./products.json")

// 1.) How many are there? Where else is this count information stored in the search results?

console.log("Current # of items in data: ", data.currentItemCount);

// 2.) Find all items with a backorder availability in inventories.
var countAvail = 0;

for (var i=0; i<data.items.length; i++) {
	if (data.items[i].product.inventories[0].availability === "backorder") countAvail++;
}

console.log("# of items with backorder availability: ", countAvail);

// 3.) Find all items with more than one image link.
var countImages = 0;

for (var i=0; i<data.items.length; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i]);
		countImages++;
	}
}

console.log("# of items with 2+ images: ", countImages);

// 4.) Find all canon products in the items (careful with case sensitivity).

var countCanon = 0;

for (var i=0; i<data.items.length; i++) {
	if (data.items[i].product.brand === "Canon") {
		console.log(data.items[i]);
		countCanon++;
	}
}

console.log("# of items with Canon brand: ", countCanon);


// 5.) Find all items that have product author name of "eBay" and are brand "Canon".

var countEbay = 0;

for (var i=0; i<data.items.length; i++) {
	if (data.items[i].product.brand === "Canon" && data.items[i].product.author.name === "eBay") {
		console.log(data.items[i]);
		countEbay++;
	}
}

console.log("# of items with Canon brand AND is by eBay: ", countEbay);

// 6.) Print all the products with their brand, price, and a image link

for (var i=0; i<data.items.length; i++) {
	console.log("#"+i, data.items[i].product.brand+",", data.items[i].product.inventories[0].currency+data.items[i].product.inventories[0].price+",\n", data.items[i].product.images[0].link, "\n\n");
}

//console.log(data["items"]);