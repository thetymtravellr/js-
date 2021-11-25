'use strict';


// STRINGS

// <----- STRING METHOD ----->

//length

let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = txt.length;

// extract 

let slice = txt.slice(0,5); // slice(start,end)
let sub = txt.substring(5,10); // substring(start,end)
let substr = txt.substr(10,15); // substr(start,length)

let str = "Apple, Banana, Kiwi";
let part = str.slice(str.length - 4);

// replace

let text = '     Please visit Microsoft and Microsoft      ';
let newText = text.replace("Microsoft", "Apple");
let newTextRegex = text.replace(/MICROSOFT/i,"apple");
let newTextG = text.replace(/Microsoft/g, "Apple");

// upper & lower case

let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();

// concat

let newTxt = text.concat(" ", txt);

// trim

let newTrimText = text.trim();


// padding

let num = '5'

let padtxt = num.padStart(4,'a');
let txtPad = num.padEnd(4,'a')
console.log(padtxt,num,txtPad);

// CONDITIONAL EXECUTION

// let theNumber = Number(prompt("Pick a Number"));

// if(!Number.isNaN(theNumber)) {
//     console.log("Your number is the square root of " + theNumber * theNumber);
// } 

// LOOP

// while loops

let number = 0;

while (number <= 12) {
    // console.log(number);
    number = number + 3;
}

let result = 1;
let counter = 0;

while (counter < 10) {
    result = result * 2;
    counter++;
    // console.log(result,counter);
}

// console.log(result);

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
    // console.log(i);
}

let res = 1;

for (let count = 0; count < 10; count++) {
    res = res * 2;
}

// console.log(res);


// for of loops

const arr = ['robiul', 'hasan', 'me'];

arr.forEach((e) => {
    // console.log(e[0]);
});

const btnCont = document.querySelector('.btn-container');
const btn = document.querySelectorAll('.btn');
const demo = document.getElementById('demo');

// console.log(btn);



const date = new Date;

const GetTime = {
    hr: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),

    format() {
        this.hr = this.hr > 12 ? this.hr - 12 : this.hr;
        this.min = this.min < 10 ? `0${this.min}` : this.min;
        this.sec = this.sec < 10 ? `0${this.sec}` : this.sec;
    },

    time() {
        this.format();
        return (
            `
            ${this.hr}:${this.min}:${this.sec}
            `
        ).trim();
    }
}

btn.forEach((e) => {
    e.addEventListener('click', () => {
        demo.innerHTML = 'hello'
    })
})

for (const e of btn) {
    e.addEventListener('click',() => {
        console.log(demo.innerHTML = 'hi');
    })
}
let count = 0;

for (let i = 1; i <= 10; i++) {
    count = i;
    // console.log(count);
}

// for (let i of count) {
//     i++;
    
// console.log(i);
// }


const displayClock = () => {
    let time = new Date;
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let am = 'AM';

    if (hrs > 12) {
        hrs +- 12;
        am = 'PM';
    }

    if (hrs == 0 ) {
        hrs = 12;
    }
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }

    if (mins < 10) {
        mins = `0${mins}`;
    }
    if (secs < 10) {
        secs = `0${secs}`;
    }

    document.getElementById('clock').innerHTML = `${hrs} : ${mins} : ${secs} ${am}`;
}

setInterval(displayClock, 500);