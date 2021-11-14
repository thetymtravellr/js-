'use strict';

// CONDITIONAL EXECUTION

// let theNumber = Number(prompt("Pick a Number"));

// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } 

// LOOP

// while loops

let number = 0;

while (number <= 12) {
    console.log(number);
    number = number + 3;
}

let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter++;
    // console.log(result,counter);
}

console.log(result);

// do loops 

// let yourName;

// do {
//     // yourName = prompt('Who you are?');
// } while (!yourName);

// console.log(yourName);

/*

This Program will force you to enter a name. It will ask again and again until it gets something that is not an empty string.

*/

// for loops

for (let i = 0; i <= 12; i = i + 2) {
    console.log(i);
}

let res = 1;

for (let count = 0; count < 10; count++) {
    res = res * 2;
}

console.log(res);