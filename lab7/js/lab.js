// lab 7 - functions
// Author: syd young
// Date: may 2, 2024
let userName = window.prompt()

function wordyTime() {
    return userName.split("").sort().join("");
}

document.writeln(wordyTime())


function anagramyTime() {
    return userName.split("").sort().join("");
}

document.writeln(wordyTime()) 