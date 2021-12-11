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

let text = 'Please visit Microsoft and Microsoft      ';
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

// char at 

let char = text.charAt(5);

// convert string to array



// console.log(text.split(' '));


// <----- STRING SEARCH ----->

// indexof

let testData = text.indexOf('i');
testData = text.lastIndexOf("Microsoft")



// NUMBER

// <----- NUMBER METHOD ----->

let x = 100;
let y = 9.656;

// console.log(x.toString(), x);
// console.log(x.toExponential());
// console.log(y.toFixed(1));
// console.log(y.toPrecision(5));
// console.log(x.valueOf());

// convert var to num

// console.log(Number(true));
// console.log(Number(new Date));
// console.log(parseInt(.5));
// console.log(parseFloat(5.5));


// ARRAYS

const friends = ['Robiul','Hasan','Nahid'];

friends[2] = 'Opu';




// console.log(friends.sort());
// console.log(friends.length);

//looping array element 

for (let i = 0; i < friends.length; i++) {
    // console.log(friends[i]);
}

// array method

// adding & remove array element

friends.push('abdullah'); // add new ele to the end 
friends.unshift('hridoy'); // add new ele to the start

friends.pop(); // remove last ele from the array
friends.shift(); // remove first ele from the array


console.log(Array.isArray(friends), friends instanceof Array);

// converting array to strings

console.log(friends.toString(), friends);
console.log(friends.join(' - '));

// splice

friends.splice(2,0, 'rabbi','jahid');
friends.splice(3,1);

// concat arrays

let myFirstName = ['robiul'];
let myLastName = ['hasan'];
let fullName = myFirstName.concat(myLastName);

console.log(friends.slice(1,3),friends);
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


function calcAge(birthYear) {
    return 2021 - birthYear;
}

const calcAge1 = function (birthYear) {
    return 2041 - birthYear;
}

const calcAge2 = birthYear => 2061 - birthYear;
/*
console.log(`<----- Type Of Function ----->

Function Declaration --> ${calcAge(1998)}
Function Expression  --> ${calcAge1(1998)}
Arrow Function       --> ${calcAge2(1998)}`);

*/
// <----- ARRAY ----->

const list = ['Tomato','Potato','Carrot','Banana','Apple'];

// <----- DESTRUCTING AN ARRAY ----->

const fruits = list; 

// console.log(fruits);
// <----- OBJECT ----->

const Person = {
    firstName: 'Robiul',
    lastName: 'Hasan',
    birthYear: 1998,
    relStatus: 'Single',
    // this is an obj inside obj
    friends: {
        one: 'Abu Bakr',
        two: 'Abdus Salam',
        three: 'Abdur Rob'
    },
    // this is an obj method
    age: function() {
        return 2021 - this.birthYear;
    }
}

// console.log(`My Name Is ${Person.firstName} ${Person.lastName} & I'm ${2021 - Person.birthYear} Years Old. I'm ${Person.relStatus}`);

// <----- DESTRUCTING AN OBJECT ----->

// this will asign the obj property to a new variable with the same name.
const { firstName, lastName } = Person;

// this will asign the obj property to a new variable named myName.
const { firstName:myName1, lastName:myName2 } = Person; 

// console.log(Person.friends.one,Person.age());



//LEARN WITH SUMIT

let a = "5";
// let b = '4';

let g = 2;
let h = 4;

// g += h; // g = g + h
// g -= h; // g = g - h
// g *= h; // g = g * h
// g /= h; // g = g / h
// g %= h; //g = g % h
g <<= h; // g = g << y


const myObj = {
    x: 5,
    y: 6,
    z: 7
}

function sleep(names, time) {
    console.log(names + " Is Sleeping From " + time);
}

function myFunc() {
    let carName = "Volvo";
    console.log(carName);
}

// myFunc();

// console.log(carName);


const car = {
    name: "BMW",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function(){
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    },
}

// console.log(car.weight);
// console.log(car["weight"]);
// car.start();
// car["start"]();

let f = "Abdur Rahim";
let d = new String("Abdur Rahim");
// console.log(typeof d);


// JS Strings

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let vik = 'We are the so-called \'Viking\' from the north.';

const tut = 'Robiul Hasan';

const country = {
    name: "Bangladesh",
    districts: 64,
};

//length

console.log(tut.length);

//slice 

console.log(country.name.slice(0,4));


// template literals

// let n = `It's My Life.
// hello`;

// console.log(n);

// JS numbers

let int = 9999999999999999;
let int2 = 99999999999999999;

let n = 10;
let m = 20.656;
let b = 'Hello ' + n + m;

let l = n.toString();
let o = m.toExponential(4);
let k = m.toFixed(1);

console.log(k);

