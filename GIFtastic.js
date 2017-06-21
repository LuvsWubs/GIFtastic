$(document).ready(function() {
	alert("Embrace the random");

	var authkey = "dc6zaTOxFJmzC"; 
	var searchTerm = "";
	var resultNum = 0;
	 
	var defaultButtons = ["flanders squid", "popcorn junkie", "best dunks", "overlord"];
	console.log(defaultButtons);

	//iterate through defaultButtons using JQuery
	//nb: forEach method needs to utilize the es5-shim library for IE 8 & earlier versions
	$.each(defaultButtons, function(index , value) {
		//create a variable for the new buttons in the DOM  
		var getGIFbuttons = $("<button>");
		//add a class identifier
		getGIFbuttons.addClass("buttonClass");
		//add data attribute named getGIF-[defaultButtons]
		getGIFbuttons.attr("id", "data-getGIF" + defaultButtons[index]);
		//grab the text of each defaultButtons index 
		getGIFbuttons.html(defaultButtons[index]); 
		//prepend the new button div to #defaultButtons
		$("#defaultButtons").prepend(getGIFbuttons);
		console.log(index, value);
	});

	//new function for the api call
	function apiCall() {
		
	};

	//when the add-GIF button is clicked..
	$("#add-GIF").click(function(event) {
		//prevent page from reload during api call
		event.preventDefault();
		//get the value input of the #userSearchTerm
		var getGIFvalue = $("#userSearchTerm").val();
		//redefine url variable to include the getGIFvalue & api key
		var url = ("http://api.giphy.com/v1/gifs/search?q=" + getGIFvalue + "&api_key=" + authkey);
		console.log(url);
		//assign the GIF buttons data- name as a search term
		var currentButton = $(event.currentTarget).data("name");
		//use JSON to get getGIFvalue from the api & run json function..
		$.getJSON(url, function(json) {
			console.log(json);
			//iterate through the retreived data and run function over index & its value
			$.each(json.data, function(index, value) {
				//retrieved [iterated] data images become a variable 
				var tempGif = json.data[index].images
				console.log(tempGif);
				console.log(tempGif.original.url);
			if (getGIFvalue !== " ") {
				//create a variable for a new DOM div to hold the new GIF search buttons
				var newButtons = ("<div>");
				//.empty the div holding the newButtons
				$(newButtons).empty();
				//.push the new GIFs onto the defaultButtons array
				$(newButtons).push(getGIFvalue);
				//redefine desired resultNum to 10
				var resultNum = 10;
				//use text from getGIFvalue to request 10 GIFs from url API
				for (var i = 0; i < resultNum; i++) {
					//prepend the still image to the new-GIFs div
					$("#new-GIFs").prepend(tempGif.original_still.url);
				};
				//display images on page
				$(newButtons).html(getGIFvalue[index]);
				//clear the #userSearchTerm text (could use .empty()? or .val("")?)
				$("#userSearchTerm").remove("");
				};
			});
		});	
	});

	//create an object that includes defaultButtons & newGIFs (value=true??)
	var allButtons = {
		defaultButtons: true,
		newGIFs: true,
	};

	//when allButtons are clicked run a function..
	$(document.body).on("click", allButtons, function() {
		//get the data attribute of the selected GIF
		var clickedGIF = $(this).attr("data-getGIF");
		//that will toggle the image from original_still to original when clicked
		$("#new-GIFs" + clickedGIF).toggleClass(); 
	});
});
