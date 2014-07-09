// Sort by "cab distance" to currentLocation

var currentLocation = {lat: 37.770282, long: -122.503};
var sortedResults = [];

var myResults = [   {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}}, 
                {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
                {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
                {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
                {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
                {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

for (var i=0; i<myResults.length; i++) {
	sortedResults.push([(Math.abs(myResults[i].location.lat - currentLocation.lat) + 
		Math.abs(myResults[i].location.long - currentLocation.long)), myResults[i]]);	
} 

sortedResults = sortedResults.sort(function(a,b) {
	if (a[0]<b[0])
		return -1;
	if (a[0]>b[0])
		return 1;
	return 0;
});

for (var i=0; i<sortedResults.length; i++) {
	console.log(i, sortedResults[i][1]);
}

