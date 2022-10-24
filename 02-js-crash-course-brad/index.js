// // ================== mdn web docs ==============
// alert("Hello there");
// console.log("Hello World");
// console.clear();
// console.error("This is an error");
// console.warn("warning!");

// // ================== variables==================
//// var, let, const

// let age=30;
// console.log(age);
// age=32;
// console.log(age);
// const year=2019;
// console.log(year);
// year=2020;
// console.log(year);

// // ================== data types=================
//// String, Numbers, Boolean, null, undefined

// const name="Zahidul Islam Jewel";
// console.log(name);
// console.log(typeof name);

// const age=30;
// console.log(age);
// console.log(typeof age);

// const isGood = true;
// console.log(isGood);
// console.log(typeof isGood);

// const rating = 4.5;
// console.log(rating);
// console.log(typeof rating);

// const x=null;
// console.log(x);
// console.log(typeof x);

// const y=undefined;
// console.log(y);
// console.log(typeof y);

// let z;
// console.log(z);

//// strings.concatenation
// let firstName = "Zahid";
// let lastName = "Jewel";
// let age = 30;
// let fullName = firstName + " " + lastName;
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// using template string
// let completeName = `${firstName} ${lastName}`;
// let intro = `${firstName} ${lastName} is ${age} years old`;
// console.log(completeName);
// console.log(intro)

// let name = "Tonmoy";
// let age = 30;
// console.log(`my name is ${name} and I am ${age} years old`);

//// string properties and methods
// const s="Hello world";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(','));
// console.log(s.split(''));
// console.log(s.split(' '));

// const s = "technology, computers, it, code";
// console.log(s.split(','));
// console.log(s.split(', '));

// //// arrays
// const numbers = new Array(4,9,2,3,5); // array constructor
// console.log(numbers);

// const list = [4,9,2,3,5,7,8,1,6,0];
// console.log(list);

// const fruits = ["apples", "oranges", "mangoes"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[3] = "grapes";
// console.log(fruits);
// fruits.push("bananas");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("strawberries");
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("mangoes"));

//// object literals
//// key value pairs
// const person = {
//     firstName: "John",
//     lastName: 'Doe',
//     age: 30,
//     skill: ["C", "CPP", "Java", "Python", "HTML", "CSS", "JS"],
//     address: {
//         street: "Ma-40 Merul",
//         city: "Dhaka",
//         division: "Dhaka",
//         country: "Bangladesh"
//     }
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person["age"]);
// console.log(person.skill);
// console.log(person.skill[0]);
// console.log(person.skill[1]);
// console.log(person.skill[2]);
// console.log(person.skill[3]);
// console.log(person.skill[4]);
// console.log(person.skill[5]);
// console.log(person.skill[6]);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.division);
// console.log(person.address.country);

// const {firstName, lastName} = person; // destructuring
// console.log(firstName, lastName);
// person.email = "john.doe@email.com";
// console.log(person);
// console.log(person.email);
// console.log(person["email"]);

// const personJSON = JSON.stringify(person);
// console.log(personJSON);

//// array of object literals
// const todo = [
//     {
//         id: 1,
//         text: 'cleaning',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'doctor',
//         isCompleted: false
//     }
// ];

// console.log(todo);
// console.log("\n");

// console.log(todo[0]);
// console.log(todo[0].id);
// console.log(todo[0].text);
// console.log(todo[0].isCompleted);
// console.log("\n");

// console.log(todo[1]);
// console.log(todo[1].id);
// console.log(todo[1].text);
// console.log(todo[1].isCompleted);
// console.log("\n");

// console.log(todo[2]);
// console.log(todo[2].id);
// console.log(todo[2].text);
// console.log(todo[2].isCompleted);

// const todoJSON = JSON.stringify(todo);
// console.log(todo);
// console.log(todoJSON);

//// loops in javascript
// // for loop
// for(let i=0;i<10;i++) {
//     console.log(i);
// }
// console.log("\n\n");

// // while loop
// let i=0;
// while (i < 20) {
//     console.log(i);
//     i+=2;
// }

// // do..while loop
// console.log("\n\n");
// let k=1;
// do {
//     console.log(k);
//     k+=3;
// } while (k < 30);


//// printing array of object literals using loops
const todo = [
    {
        id: 1,
        text: 'cleaning',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'doctor',
        isCompleted: false
    }
]

// // using for loop
// for(let i=0;i<todo.length;i++) {
//     // console.log(todo[i]);
//     // console.log(todo[i].id);
//     // console.log(todo[i].text);
//     console.log(todo[i].isCompleted);
// }

//// using for..of loop
// for(let task of todo) {
//     // console.log(task);
//     // console.log(task.id, task.text, task.isCompleted);
//     console.log(`${task.id} ${task.text} ${task.isCompleted}`);
// }

// //// using forEach loop and callback function
// todo.forEach(function(task) {
//     // console.log(task.id);
//     // console.log(task.text);
//     // console.log(task.isCompleted);
//     console.log(task.id, task.text, task.isCompleted);
// });

// //// using arrow(=>) function and forEach loop
// todo.forEach( task => {
//     // console.log(task.id);
//     // console.log(task.text);
//     // console.log(task.isCompleted);
//     console.log(task.id, task.text, task.isCompleted);
// });

//// forEach short version
// todo.forEach( task => console.log(task));
// todo.forEach( task => console.log(task.id));
// todo.forEach( task => console.log(task.text));
// todo.forEach( task => console.log(task.isCompleted));
// todo.forEach( task => console.log(task.id, task.text, task.isCompleted));

// //// using map 
// const todoID = todo.map(function(task) {
//     return task.id;
// });
// console.log(todoID);

// const todoID = todo.map( task => task.id );
// console.log(todoID);

// const todoText = todo.map(function(task) {
//     return task.text;
// });
// console.log(todoText);

// const todoText = todo.map( task => task.text );
// console.log(todoText);

// //// using map 
// const todoCompleted = todo.map(function(task) {
//     return task.isCompleted;
// });
// console.log(todoCompleted);

// const todoStatus = todo.map( task => task.isCompleted );
// console.log(todoStatus);

// //// using filter 
// const todoDone = todo.filter(function(task) {
//     return task.isCompleted == true;;
// });
// console.log(todoDone);

// const todoDone = todo.filter( t => t.isCompleted );
// console.log(todoDone);

// const todoDone = todo.filter( t => !t.isCompleted );
// console.log(todoDone);

// //// chaining map and filter
// const todoDone = todo.filter(function(task) {
//     return task.isCompleted == true;;
// }).map(function (task) {
//     return task.text;
// })
// console.log(todoDone);

// const todoDoneText = todo.filter( task => task.isCompleted ).map( task => task.text );
// console.log(todoDoneText);

//// conditionals - if statement
// const x=10;
// const x = '10';
// if(x == 10) {
//     console.log("True");
// }
// else {
//     console.log("Not True");
// }

// const x=10;
// // const x = '10';
// if(x === 10) {
//     console.log("True");
// }
// else {
//     console.log("Not True");
// }

// // const num = 12;
// // const num = 15;
// const num = "$";
// if(num%2 == 0) {
//     console.log("even");
// }
// else if(num%2 == 1) {
//     console.log("odd");
// }
// else{
//     console.log("Not a number");
// }

// const x = 10;
// const color = x>10 ? "green":"green";
// console.log(color);

// // const num = 4;
// const num = 9;
// const s = num % 2 === 0? "even": "odd";
// console.log(s);

// //// switch case statements
// let ch="A";
// // let ch="D";
// // let ch="i";
// switch (ch) {
//     case 'A':
//     case 'a':
//     case 'E':
//     case 'e':
//     case 'I':
//     case 'i':
//     case 'O':
//     case 'o':
//     case 'U':
//     case 'u':
//         console.log(`${ch} is a vowel`);
//         break;
//     default:
//         console.log(`${ch} is not a vowel`);
// }

// //// functions 
// function addNums(x,y) {
//     console.log(x+y);
// }
// // addNums(4,9);
// addNums();

// //// default arguments
// function add(x=0,y=0) {
//     console.log(x+y);
// }
// add();
// add(4);
// add(4,9);

// //// returning from functions
// function sum(x=0,y=0,z=0) {
//     return x+y+z;
// }
// console.log(sum());
// console.log(sum(4));
// console.log(sum(4,9));
// console.log(sum(4,9,2));

//// with arrow function
// const sum = ( x=0,y=0,z=0 ) => {
//     return x+y+z;
// };
// console.log(sum());
// console.log(sum(4));
// console.log(sum(4,9));
// console.log(sum(4,9,2));

//// arrow shortcut
// const sum = (x=0,y=0,z=0) => x+y+z;
// console.log(sum());
// console.log(sum(4));
// console.log(sum(4,9));
// console.log(sum(4,9,2));

//// Object Oriented Programming - OOP
// // constructor function, this keyword
// function Person(firstName, lastName, dob, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); // date object
//     this.email = email;
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }
//     // this.getFullName = function () {
//     //     return `${this.firstName} ${this.lastName}`;
//     // }
// }

// // // instantiate object
// const person1 = new Person("John","Doe","1980-3-4","john.doe@email.com");
// console.log(person1);
// console.log(person1.firstName, person1.lastName);
// console.log(`Full Name: ${person1.firstName} ${person1.lastName}`);
// console.log(person1.dob);
// console.log(person1.getBirthYear());
// console.log(person1.email);
// console.log(person1.getFullName());

// const person2 = new Person("Joe","Morrison","1970-6-3","joe.morrison@email.com");
// console.log(person2);
// console.log(person2.firstName, person2.lastName);
// console.log(person2.getFullName());
// console.log(person2.dob);
// console.log(person2.getBirthYear());
// console.log(person2.email);

// console.log(`Birthday of ${person1.firstName} ${person1.lastName} is 
// ${person1.dob.getDay()}-${person1.dob.getMonth()}-${person1.dob.getFullYear()}`);

// console.log(`Birthday of ${person1.getFullName()} is 
// ${person1.dob.getDay()}-${person1.dob.getMonth()}-${person1.dob.getFullYear()}`);

// //// function prototype
// Person.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }

// Person.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     }

// Person.prototype.getBirthYear = () => this.dob.getFullYear(); // error
// Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`; // error

// const person3 = new Person("Zahid", "Jewel","1990-9-24","zahid.jewel@yahoo.com");
// console.log(person3.getFullName());
// console.log(person3.getBirthYear());
// console.log(person3.email);

// //// MODERN JS CLASS (ALIKE C++, JAVA, PYTHON)
// //// ES6 VERSION
// class Person {
//     constructor(firstName, lastName, dob, email)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); // date object
//         this.email = email;
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person4 = new Person("Nayan", "Rahman","1990-4-1","nayan.rahman@yahoo.com");
// console.log(person4);
// console.log(person4.getFullName());
// console.log(person4.getBirthYear()); 
// console.log(person4.email);

//// DOM - DOCUMENT OBJECT MODEL
