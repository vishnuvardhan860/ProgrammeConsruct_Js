//Read a single digit number and write the number in word

const prompt = require('prompt-sync')();
let number = prompt("Enter a single digit number : ");
let word;

if ((number >= 0) && (number <= 9)) {
    if (number == 0)
        word = "Zero";
    else if (number == 1)
        word = "One";
    else if (number == 2)
        word = "Two";
    else if (number == 3)
        word = "Three";
    else if (number == 4)
        word = "Four";
    else if (number == 5)
        word = "Five";
    else if (number == 6)
        word = "Six";
    else if (number == 7)
        word = "Seven";
    else if (number == 8)
        word = "Eight";
    else if (number == 9)
        word = "Nine";
    console.log(`Number is ${number} and word is ${word}`);
}
else
    console.log("Number Is Invalid!!");