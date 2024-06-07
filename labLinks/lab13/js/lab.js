//syd young
//wes modes: art 101 - coding for artists
//may 26 2024

let myButthehe = document.getElementById("button");
myButthehe.addEventListener("click", function () {
    for (i = 1; i <= 200; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
            $("#outputNumbas").append("<p>" + "FizzBuzz" + "</p>");
        } else if (i % 21 == 0) {
            console.log("FizzBoom")
            $("#outputNumbas").append("<p>" + "FizzBoom" + "</p>");
        } else if (i % 35 == 0) {
            console.log("BuzzBoom")
            $("#outputNumbas").append("<p>" + "FizzBuzz" + "</p>");
        } else if (i % 105 == 0) {
            console.log("FizzBuzzBOOM")
            $("#outputNumbas").append("<p>" + "FizzBuzzBOOM" + "</p>");
        } else if (i % 3 == 0) {
            console.log("Fizz");
            $("#outputNumbas").append("<p>" + "Fizz" + "</p>");
        } else if (i % 5 == 0) {
            console.log("Buzz");
            $("#outputNumbas").append("<p>" + "Buzz" + "</p>");
        } else if (i % 7 == 0) {
            console.log("Boom");
            $("#outputNumbas").append("<p>" + "Boom" + "</p>");
        } else {
            console.log(i);
            $("#outputNumbas").append("<p>" + i + "</p>");
        }
   }

})

