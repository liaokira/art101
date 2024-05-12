// lab 7 - functions
// Author: syd young and Noah Dane!
// Date: may 7, 2024

//Requirements: jQuery must be loaded for this script to work.

// add button to challenge section
$("#challenge").append("<button id='stupid'>evil clown button</button>");

// add button to problems
$("#problems").append("<button id='dumb'>evil clown button</button>");

//add button to reflection
$("#reflection").append("<button id='evil'>evil clown button</button>");


// add a click listener to the challenge button
$("#stupid").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
    console.log("class changed")
});

$("#dumb").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
    console.log("class changed")
});

$("#evil").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
    console.log("class changed")
});