// index.js - Lab 6: Arrays and Objects
// Author: syd young + noah dane
// Date: 26 april

//Define variables
myTransport = ["Honda Element", " bike", " walking", " bus", " zipcar"];


//create an object for my main ride
myMainRide = {
  make : "Honda",
  model : "Element",
  year : 2008,
  color : "light blue",

age : function() {
  return 2024 - this.year;
}
}


//Output
document.writeln("kinds of transportation I use: " + myTransport + "</br>");
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
