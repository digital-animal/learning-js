// node is a runtine environment for js (alike jre for java)

console.log("Hello World");

const myname = "Alex Lee";
const profession = "Programmer";
const PI = 3.141592653589793;
const isPrime = false;

console.log(myname);
console.log(profession);
console.log(PI);
console.log(isPrime);

let output;
console.log(output);

let res = undefined;
console.log(res);

let empty = null;
console.log(empty);

const person = {
    "firstName": "Alex",
    "lastName": "Lee",
    "age": 24
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

console.log(null == undefined);
console.log(0 == 0.0);

let x = 4;
let y = 9;

console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} - ${y} = ${x - y}`);
console.log(`${x} x ${y} = ${x * y}`);
console.log(`${x} / ${y} = ${x / y}`);
console.log(`${x} % ${y} = ${x % y}`);
console.log(`${x} == ${y} = ${x == y}`);
console.log(`${x} != ${y} = ${x != y}`);
console.log(`${x} > ${y} = ${x > y}`);
console.log(`${x} < ${y} = ${x < y}`);
console.log("\n");

let fname = "Bruce";
let lname = "Wayne";
let fullName = fname + " "+ lname;
console.log(fullName);

let a = 4, b = 9, c = 2;
let largest = (a > b && a > c?  a : (b > c? b: c));
console.log(largest);
let isEven = (a % 2 == 0? true : false);
console.log(isEven);
console.log();

// implicit type conversion, type coercion
// explicit type conversion, type casting
console.log(Number('492'));
console.log(Number('492') + Number('357'));
console.log(Number(true) + Number(false));
console.log(parseInt('500'));
console.log(parseFloat('3.14'));
console.log(String(100));
console.log((200).toString());
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log();

const var1 = 10;
const var2 = '10';
console.log(var1 == var2);
console.log(var1 === var2);
console.log();
// conditional statements

number = 10;
// number = -10;

if (number % 2 == 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
} 

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negtaive`);
} else if (number == 0) {
    console.log(`${number} is zero`);
} else {
    console.log(`${number} not a number`);
}

// var color = 'red'
var color = 'orange'

switch (color) {
    case 'red':
        console.log("color is red");
        break;
    case 'green':
        console.log("color is green");
        break;
    case 'blue':
        console.log("color is blue");
        break;
    default:
        console.log("unknown color");
        break;
}

// iterating over a list in javascript
let numbers = [4,9,2,3,4,5,7,8,1,6,0];

// for loop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("\n");

// for in loop
for(let index in numbers) {
    console.log(numbers[index]);
}
console.log("\n");

// for of loop
for (const num of numbers) {
    console.log(num);
}
console.log("\n");

const names = ["Zahid", "Jewel", "Alex"];

// for in loop
for(const index in names) {
    console.log(names[index]);
}
console.log("\n");

// for of loop
const languages = ["C", "C++", "Java", "Python", "JS"];
for (const lang of languages) {
    console.log(lang);
}
console.log("\n");

// while loop, merge
let evens = [2,4,6,8];
let odds = [1,3,5,7];

let i = 0;
let j = 0;
let k = 0;
let result = []

while (i < evens.length && j < odds.length) {

    if (evens[i] < odds[j]) {
        result[k++] = evens[i++];
    }
    else if (odds[i] < evens[j]) {
        result[k++] = odds[j++];
    }
}

while(i < evens.length) {
    result[k++] = evens[i++];
}

while(j < odds.length) {
    result[k++] = odds[j++];
}

for (const num of evens) {
    console.log(num);
}
console.log();

for (const num of odds) {
    console.log(num);
}
console.log();

for (const num of result) {
    console.log(num);
}
console.log();

// functions
function add(x, y, z) {
    return x + y + z;
}

console.log(add(4,9,2));
console.log(add(3,5,7));
console.log(add(8,1,6));

const arrowSum = (x,y,z) => {
    return x + y + z;
};
console.log(arrowSum(4,9,2));

const arrowEven = (num) => (num % 2 == 0);
console.log(arrowEven(4));

// scopes in js
// block scope
// function scope
// global scope
