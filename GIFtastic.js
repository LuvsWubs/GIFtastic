$(document).ready(function() {
alert("Embrace the random");

var authkey = "dc6zaTOxFJmzC"; 
var searchTerm = "";
var resultNum = 0;
var url = "";

var getGIFvalue = $("#userSearchTerm").val(""); //.val vs .attr??
var defaultButtons = ["ned flanders squid", "popcorn junkie", "best dunks", "lord"];
console.log(defaultButtons);

//iterate through defaultButtons using JQuery
//nb: forEach method needs to utilize the es5-shim library for IE 8 & earlier versions
$.each(defaultButtons, function(index , value) {
	//create a variable for the new button div in the DOM  
	var button = $("<button>");
	//add a class identifier
	button.addClass("buttonClass");
	//grab the text of each defaultButtons index 
	button.html(defaultButtons[index]); 
	//prepend the new button div to #defaultButtons
	$("#defaultButtons").prepend(button);
	console.log(index, value);
});

//new function for the api call
function apiCall() {
	//redefine url variable to include the getGIFvalue & api key
	url = ("http://api.giphy.com/v1/gifs/search?q=" + getGIFvalue + "&api_key=" + authkey);
	console.log(url);
	//use JSON to get getGIFvalue from the api & run json function..
	$.getJSON(url, function(json) {
		console.log(json);
		//iterate through the retreived data and run function over index & its value
		$.each(json.data, function(index, value) {
			//retrieved [iterated] data images become a variable 
			var tempGif = json.data[index].images
			console.log(tempGif);
			console.log(tempGif.original.url);
			//redefine desired resultNum to 10
			var resultNum = 10;
			//use text from getGIFvalue to request 10 GIFs from url API
			for (var i = 0; i < resultNum; i++) {
			//prepend the still image to the new-GIFs div
			$("#new-GIFs").prepend(tempGif.original_still.url);
			};
		});
	});	
	//return the apiCall function to be reused when the #add-GIF is clicked
	return apiCall();
};

//when the add-GIF button is clicked..
$("#add-GIF").click(function() {
	//if text is entered into userSearchTerm, 
	while (getGIFvalue === true) {
		//run the apiCall function
		apiCall();
		//create a variable for the new DOM div
		var newButtons = ("<div>");
		//display images on page
		newButtons.html(getGIFvalue[index]);
		//clear the #userSearchTerm text (.empty?)
		$("#userSearchTerm").remove("");
	};
});

//create an object that includes defaultButtons & newGIFs (value=??)
var allButtons = {
	defaultButtons: true,
	newGIFs: true,
};

//when allButtons are clicked run a function..
$.each(allButtons, function() {
	//that will toggle the image from original_still to original when clicked
	$("#new-GIFs").toggleClass(); 
});
});
