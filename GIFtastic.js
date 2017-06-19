$(document).ready(function() {
alert("Embrace the random");

var authkey = "dc6zaTOxFJmzC"; 
var searchTerm = "";
var resultNum = 0;
var url = "";

var defaultButtons = ["ned flanders squid", "popcorn junkie", "best dunks", "lord"];
console.log(defaultButtons);

//callback so fade in happens after all new GIFs populate
// $(newButtons).click(function(){
//     	$().fadeIn(800);
//     	//GIFs append from the bottom up until full height is reached

//     	//GIFs animate when clicked, stop when clicked again
//     	//$(selector).animate({params},speed,callback);
//     	$("<div>").animate({
//     		height: 'toggle'
//     	})
// 	});

//iterate through defaultButtons using JQuery
//nb: forEach method needs to utilize the es5-shim library for IE 8 & earlier versions
$.each(defaultButtons, function(index , value) {
	//create a variable for the new button div in the DOM  
	var button = $("<button>");
	//grab the text of each defaultButtons index 
	button.html(defaultButtons[index]);
	//prepend the new button div to #defaultButtons
	$("#defaultButtons").prepend(button);
	console.log(index, value);
});

//new function for the api call
function apiCall() {
	url =  "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + authkey;
	//use JSON to get info from the api & run json function..
	$.getJSON(url, function(json) {
		console.log(json);
		//iterate through the retreived data and run function over index & its value
		$.each(json.data, function(index, value) {
			//retrieved [iterated] data images become a variable 
			var tempGif = json.data[index].images
			console.log(tempGif);
			console.log(tempGif.original.url);
			//prepend the still image to the new-GIFs div
			$("#new-GIFs").prepend(tempGif.original_still.url);
		});
	});	
}

//when the add-GIF button is clicked, 
$("#add-GIF").click(function() {
	apiCall();
	//loop through the defaultButtons, display on page
	var newButtons = ("<div>");
	
});

//create newGIFs function.. 
function newGIFs() {
	//prepend a new button from userSearchTerm text to html new-buttons div 
	$("#new-buttons").prepend(button);
	//userSearchTerm in html becomes a JQuery variable
	var getGIFvalue = $("#userSearchTerm").text();
	console.log(getGIFvalue);
	//if text entered into userSearchTerm, 
	while (getGIFvalue === true) {
		//use text from userSearchTerm to request 10 GIFs from url API

	}



//create a new div in html for every newGIFs logged through userSearchTerm 
//request userSearchTerm from url API

//prepend DOM w/ userSearchTerm as GIF in #add-GIF
	
	console.log(newGIFs);
};

//create an object that includes defaultButtons & newGIFs (value=??)
var allButtons = {
	defaultButtons: true,
	newGIFs: true,
};
//when allButtons are clicked run a function..
$.each(allButtons, function() {
//animate GIF of clicked item

//toggle to animate/stop with repetitive clicks

});
});
