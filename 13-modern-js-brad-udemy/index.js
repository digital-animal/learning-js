// ====================================
// =========02 JS Fundamentals=========
// ====================================

// alert("Hello");

//// USING THE CONSOLE ////
// //// Log to console

// console.log("Hello World");
// console.log(document);
// document.querySelector('h1').style.color = "crimson";
// console.log(123);
// console.log(true);

// var greeting = "Welcome";
// console.log(greeting);

// console.log([4,9,2,3,5]);

// console.log({a:1,b:2,c:3});
// console.table({a:1,b:2,c:3});
// console.error("this is an error");

// console.clear();
// console.warn("this is a warning");
// console.time("Hello");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
//     console.log("Hello there");
// console.timeEnd("Hello");


//// VARIABLES AND DECLARATION ////
//// var, let, const ////

// var name = "John Doe";
// console.log(name);

// name = "Steve Smith";
// console.log(name);

// var greeting;
// console.log(greeting);

// greeting = "Hello";
// console.log(greeting);

// var firstName = "Zahid";
// var lastName = "Jewel";
// var fullName = "Zahid" + " " + "Jewel";
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// let name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

// const num = 3.14;
// console.log(num);

// const name = "John";
// console.log(name);

// const person = {
//     name: "John",
//     age: 30
// };

// console.log(person);
// person.name = "Sara";
// console.log(person);
// person.age = 32;
// console.log(person);

// const numbers = [4, 9, 2, 3, 5, 7, 8, 1, 6, 0];
// console.log(numbers);
// numbers.push(11);
// console.log(numbers);

//// DATA TYPES IN JS  ////
//// PRIMITIVES ////

// const name = 'John Doe';
// console.log(typeof name);

// const age = 32;
// console.log(typeof age);

// const isMountaineer = true;
// console.log(typeof isMountaineer);

// const car = null;
// console.log(typeof car);

// let test;
// console.log(typeof test);

// const sym = Symbol();
// console.log(sym);

// //// REFERENCE TYPES ////

// const people = ["John","Mario","Alex","Lee"];
// console.log(typeof people);

// const address = {
//     road: 11,
//     block: "B",
//     area: "Banani",
//     city: "Dhaka"
// };

// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);


//// TYPE CONVERSION ////
// let val;
// val = 5;
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(5);
// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// val = String(4+4);
// console.log(val);
// console.log(typeof val)
// console.log(val.length)

// val = String(true);
// console.log(val);
// console.log(typeof val)
// console.log(val.length)

// val = String(new Date());
// console.log(val);
// console.log(typeof val)
// console.log(val.length)

// val = String([4,9,2,3,5]);
// console.log(val);
// console.log(typeof val)
// console.log(val.length)

// val = (5).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// val = (true).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = Number('5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));
// // console.log(val.length);

// val = Number(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = Number(false);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = Number(null);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = Number("Hello");
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = Number([4,9,2,3,5]);
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = parseInt('100');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// val = parseFloat('100.25');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// console.log(val.toFixed(2));

// //// TYPE COERCION ////

// // const x = 5;
// const x = String(5);
// const y = 6;
// // const sum = x + y;
// const sum = Number(x + y);
// console.log(sum)
// console.log(typeof sum)


// //// NUMBERS AND THE MATH OBJECT ////
// //// MATH OPERATORS ////
// const num1 = 100;
// const num2 = 60;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.round(2.4);
// val = Math.ceil(2.3);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(2,8);
// val = Math.min(4,9,2);
// val = Math.max(3,5,7,8,1);
// val = Math.random();
// val = Math.random()*100;
// val = Math.round(Math.random()*100);

// console.log(val);

//// STRINGS METHODS AND CONCATENATION ////

// const firstName = "William";
// const lastName = "Smith";
// const age = 30;
// // const fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;

// // fullName += " Jr.";

// // console.log(fullName);

// let sentence = `I am ${fullName} and I am ${age} years old`;
// console.log(sentence);

//// escaping
// let val = "That's awesome. I can't wait";
// let val = 'That\'s awesome. I can\'t wait';
// console.log(val);

//// string property and method
// console.log(val.length);
// console.log(fullName.length);

// let id = firstName.concat(lastName);
// console.log(id);

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName[0]);
// console.log(fullName[8]);

// console.log(fullName.indexOf("S"));
// console.log(fullName.lastIndexOf('i'));

// console.log(fullName.charAt('2'));
// console.log(fullName.charAt('8'));
// console.log(fullName.charAt(fullName.length-1));

// console.log(fullName.substring(2,4));
// console.log(fullName.substring(0,2));
// console.log(fullName.slice(0,4));
// console.log(fullName.slice(-3));

// console.log(fullName.split(" "));
// console.log(sentence.split(" "));

// const tags = "web design,web development, javascript, python";
// console.log(tags.split(','));

// // console.log(fullName.replace("Smith", "Nash"));
// console.log(sentence.includes("William"));
// console.log(sentence.includes("Smith"));
// console.log(sentence.includes("Jack"));


//// 2.11  TEMPLATE LITERALS ////

// const name = "John";
// const age = 30;
// const job = "Web Developer";
// const city = "Chicago";

// function greet(){
//     return "hello";
// }

// let html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2+2}</li>
//         <li>${greet()}</li>
//         <li>${ age > 30 ? 'Over 30': 'Under 30'}</li>
//     </ul>
// `;

// console.log(html);
// document.body.innerHTML = html;

//// 2.12 ARRAYS AND ARRAY METHODS ////

// const L = [4,9,2,3,5,7,8,1,6,0];
// console.log(L);
// console.log(L.length);

// const list = new Array(2,3,5,7,11,13,17,19,23,29);
// console.log(list);
// console.log(list.length);

// const fruits = ["Strawberry", "Orange", "Banana", "Mango", "Raspberry"];
// console.log(fruits);
// console.log(fruits.length);

// const mixed = [22, "Hello", true, undefined, null, {a:1,b:2}, new Date()];

// console.log(mixed);
// console.log(mixed.length);

// const val = Array.isArray(L);
// const val = Array.isArray(list);
// const val = Array.isArray(fruits);
// const val = Array.isArray(mixed);

// console.log(val);

// console.log(mixed[2]);
// console.log(mixed[4]);
// console.log(mixed[5].a);
// console.log(mixed[5].b);
// console.log(mixed[6]);
// console.log(mixed);
// console.log(mixed.indexOf("Hello"));

// L.push(11);
// console.log(L);
// L.pop();
// console.log(L);

// list.unshift(31); // prepend
// console.log(list);
// list.shift();
// console.log(list);

// L.splice(1,1);
// console.log(L);

// L.splice(1,3);
// console.log(L);

// L.reverse();
// console.log(L);

// // let newArray = L + list;
// // let newArray =new  Array(L + list);
// // console.log(newArray);

// console.log(L);
// console.log(list);
// let data = L.concat(list);
// console.log(data);

// console.log(fruits.sort());
// console.log(L.sort());
// console.log(list.sort());
// console.log(data.sort());

// sorting using compare function

// console.log(data.sort( (x,y) => x - y));
// console.log(data.sort( (x,y) => y - x));

// // find
// function underFifty(num) {
//     return num < 50;
// }

// function overFifty(num) {
//     return num > 50;
// }

// // let val = list.find(underFifty);
// // console.log(val);

// let val = list.find(overFifty);
// console.log(val);


//// 2.13 OBJECT LITERALS ////

//// exmaple - person object

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     email: "stevel@avol.com",
//     hobbies: ['music','sports'],
//     address: {
//         road: 11,
//         block: "B",
//         area: "Banani",
//         city: "Dhaka"
//     },
//     lang: ["C", "C++", "Java", "Python", "JS"],

//     getBirthYear: function(){
//         // return 1990;
//         return 2020 - this.age;
//     }

// };

// let val;

// val = person;
// val = person.firstName;
// val = person["firstName"];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

//// array of objects ////

// const people = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 30,
//         email: "stevel@avol.com",
//         hobbies: ['music','sports'],
//         address: {
//             road: 11,
//             block: "B",
//             area: "Banani",
//             city: "Dhaka"
//         },
//         lang: ["C", "C++", "Java", "Python", "JS"],

//         getBirthYear: function(){
//             // return 1990;
//             return 2020 - this.age;
//         }

//     },

//     {
//         firstName: "Anna",
//         lastName: "Maria",
//         age: 22,
//         email: "anna.maria@gmail.com",
//         hobbies: ['music','mountaineering'],
//         address: {
//             road: 18,
//             block: "H",
//             area: "Basundhara",
//             city: "Dhaka"
//         },
//         lang: ["Python", "JS"],

//         getBirthYear: function(){
//             // return 1990;
//             return 2020 - this.age;
//         }

//     },
// ]

// console.log(people);
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[0].lang);
// console.log(people[0].lang[1]);
// console.log(people[0].email);
// console.log(people[0].address);
// console.log(people[0].address.city);

// for(let i=0;i<people.length;i++){
//     console.log(people[i].email);
// }

// for(Key in people){
//     console.log(people[Key].lang);
// }

//// 2.14 Dates Times ////

// let val;
// const today = new Date();
// // const birthday = new Date('1991-4-1');
// let birthday = new Date('1989-9-24 11:50:00');

// val = today;
// val = today.toString();
// val = birthday;
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// val = today.getDay();
// val = today.getDate();
// val = today.getMonth();
// val = today.getFullYear();

// val = birthday.setMonth(2);
// val = birthday.setDate(12);
// val = birthday.setFullYear(2012);
// val = birthday.setHours(3);
// val = birthday.setMinutes(3);
// val = birthday.setSeconds(3);

// console.log(val);
// console.log(typeof val);

//// 2.14 Dates Times ////
// const id = 100;
// const id = 101;
// const id = '100';

//// equal to
// if(id==100){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

// if(id===100){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

//// not equal to
// if(id!=100){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

// if(id!==100){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

//// test if undefined
// if(id){
//     console.log(`The ID is ${id}`);
// }
// else {
//     console.log("No ID");
// }

// if(typeof id != 'undefined'){
//     console.log(`The ID is ${id}`);
// }
// else {
//     console.log("No ID");
// }

// if(id > 200){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

// if(id < 100){
//     console.log("CORRECT");
// }
// else{
//     console.log("INCORRECT");
// }

// let color = "yellow";
// let color = "red";

// if(color === 'red'){
//     console.log("color is red");
// }
// else if(color === "blue"){
//     console.log("color is blue");
// }
// else{
//     console.log("color is something else");
// }

//// logical operators
//// && || !
// const name = "Steve";
// const age = 20;
// const age = 25;
// const age = 6;

// if(age > 0 && age <=12){
//     console.log(`${name} is a child`);
// }
// else if(age > 12 && age <+ 19){
//     console.log(`${name} is a teenager`);
// }
// else{
//     console.log(`${name} is an adult`);
// }

// if(age < 16 || age > 65){
//     console.log(`${name} cannot un in a race`);
// }
// else{
//     console.log(`${name} is registered for race`);
// }

//// ternary operator
// const num = 13;
// console.log( num%2 === 0 ? "Even": "Odd" );

//// 2.16 Switch ////

// const color = "red";
// const color = "green";
// const color = "orange";

// switch (color) {
//     case 'red':
//         console.log("color is red");
//         break;
//     case 'blue':
//         console.log("color is blue");
//         break;
//     case 'green':
//         console.log("color is green");
//         break;
//     default:
//         console.log("color is something else");
//         break;
// }

// switch (new Date().getDay()) {

//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;    
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;    
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;    
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a valid weekday");
//         break;
// }

//// 2.17 Functions, Declarations, Expressions ////

// function greet() {
//     console.log("Hello there");
// }
// greet();

// function greet() {
//     return "Hello there";
// }
// console.log(greet());

// function greet(name) {
//     return `Hello ${name}`;
// }
// console.log(greet("John"));

// function greet(firstName="Anna", lastName="Maria") {
//     return `Hello ${firstName} ${lastName}`;
// }
// // console.log(greet("John", "Doe"));
// console.log(greet());

//// function expression

// const square = function (x=3){
//     return x*x;
// };

// // console.log(square(8));
// console.log(square());

//// Immediately Invokable Function Expressions - IIFEs
// (function(){
//     console.log("IIFE Ran..")
// })();

// (function(name){
//     console.log("Hello", name)
// })("Zahid");

//// property methods

// const todo = {
//     add: function() {
//         console.log("Add todo..");
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// };

// todo.delete = function () {
//     console.log("Delete todo..");
// };

// todo.add();
// todo.edit(22);
// todo.delete(); 

///// 2.18 General Loops ////
//// for loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log("\n");

//// break, continue

// for(let i=0;i<10;i++){
//     if(i==2){
//         console.log("2 is first even number");
//         continue;
//     }
    
//     if(i==5){
//         console.log("Loop stopped.")
//         break;
//     }

//     console.log(i);
// }
// console.log("\n");

//// while loop
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// console.log("\n");

//// do while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);
// console.log("\n");

// let i=10;
// do{
//     console.log(i);
//     i++;
// }while(i<10);
// console.log("\n");

//// loop through array
// const cars = ["ford", "lamborgini", "honda", "toyota"];

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

//// forEach loop + callback
// cars.forEach(function(car){
//     console.log(car);
// });

// cars.forEach(function(car, index){
//     console.log(`${index}: ${car}`);
// });

// cars.forEach(function(car, index, array){
//     console.log(array);
// });

//// foEach loop + arrow
// cars.forEach(car => console.log(car));

//// map
// const users = [
//     {id:1, name: "Jhon"},
//     {id:2, name: "Sara"},
//     {id:3, name: "karen"},
//     {id:4, name: "Steve"}
// ];

// // const ids = users.map(function(user){
// //     return user.id;
// // });

// const ids = users.map( user => user.id );

// console.log(ids);

//// for in loops
// const user = {
//     firstName: "John",
//     lastName: "Nash",
//     age: 30
// };

// for(let key in user){
//     // console.log(user[key]);
//     console.log(`${key}: ${user[key]}`);
// }

//// for of loops
// const list = [4, 9, 2, 3, 5, 7, 8, 1, 6, 0];
// for(let num of list){
//     console.log(num);
// }


//// 2.19 A Look At the Window Object ////
//// DOM - DOCUMENT OBJECT MODEL ////
//// Window Methods / Objects / Property ////
// console.log(window);
// console.log(document);
// console.log(fetch);
// console.log(localStorage);
// console.log(navigator);

//// alert
// window.alert("Hello World");
// alert("Hello World");

//// prompt
// const input = prompt();
// // alert(input);
// console.log(input);

// const input = prompt("Enter your name: ");
// // alert(input);
// console.log(input);

//// confirm
// if(confirm('Are your sure?')){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }

// let val;

//// outer height and width
// val = window.outerHeight;
// val = window.outerWidth;;

//// outer height and width
// val = window.innerHeight;
// val = window.innerWidth;

//// Scroll Points
// val = window.scrollY;
// val = window.scrollX;

//// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.protocol;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

//// redirect
// window.location.href = "http://google.com";

//// reload
// window.location.reload();

//// History Object
// window.history.go(-1);
// window.history.go(-2);
// val = window.history.length;

//// navigator object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);


//// 2.20 Block Scope with let and const ////

//// global scope
// var a = 1;
// let b = 2;
// const c = 3;

// console.log(`Global Scope: a = ${a}, b = ${b}, c = ${c}`);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Function Scope: a = ${a}, b = ${b}, c = ${c}`);

//     if(true){
//         //// Block Scope
//         var a = 7;
//         let b = 8;
//         const c = 9;
    
//         console.log(`Block Scope: a = ${a}, b = ${b}, c = ${c}`);
//     }
// }
// test();

// if(true){
//     //// Block Scope
//     var a = 7;
//     let b = 8;
//     const c = 9;

//     console.log(`If Block Scope: a = ${a}, b = ${b}, c = ${c}`);
// }

// for(let a=0;a<10;a++){
//     console.log(`Loop: ${a}`);
// }

// for(var a=0;a<10;a++){
//     console.log(`Loop: ${a}`);
// }

// console.log(`Global Scope: a = ${a}, b = ${b}, c = ${c}`);

// ====================================
// =====03 DOM Manipulation Events=====
// ====================================

//// 3.22 Examining the Document Object ////

// let val;
// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[1];
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.charset;
// val = document.contentType;

// val = document.forms;
// val = document.links;
// val = document.images;
// val = document.scripts;
// val = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// // scriptsArray.forEach( script => console.log(script));
// scriptsArray.forEach( script => console.log(script.getAttribute('src')));

// console.log(val);  


//// 3.23 Dom Selectors For Single Element ////

//// document.getElementById()
// let val;
// val = document.getElementById('task-title');

// //// getting things from the element
// val = document.getElementById('task-title').id;
// val = document.getElementById('task-title').className;

// //// change styling
// document.getElementById('task-title').style.background = "#333";
// document.getElementById('task-title').style.color = "#f1f1f1";
// document.getElementById('task-title').style.padding = "10px";
// // document.getElementById('task-title').style.display = "none";
// console.log(val);

// //// change content
// document.getElementById('task-title').textContent = "Task List";
// document.getElementById('task-title').innerText = "My Task";
// document.getElementById('task-title').innerHTML = '<span style="color:red;">Task Items</span>';

// const taskTitle = document.getElementById('task-title');
// taskTitle.style.color = 'red';
// taskTitle.style.backgroundColor = "#333";
// taskTitle.style.padding = "10px";

//// document.querySelector()

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".task-header"));
// console.log(document.querySelector("h5"));

// document.querySelector('h5').style.backgroundColor = "#333";
// document.querySelector('h5').style.color = "#f1f1f1";
// document.querySelector('h5').style.padding = "10px";

// document.querySelector('li').style.color = "red";
// document.querySelector('li.collection-item:nth-child(1)').style.color = "red";
// // document.querySelector('li.collection-item:nth-child(1)').style.backgroundColor = "#432";
// document.querySelector('ul li').style.color = "dodgerblue";
// document.querySelector('li:last-child').style.color = "dodgerblue";
// document.querySelector('li:nth-child(3)').style.color = "yellow";


//// 3.24 DOM Selectors For Multiple Elements ////

// const items = document.getElementsByClassName('collection-item');
// console.log(items);

// console.log(items[0]);

// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems); 

//// document.getElementsByTagName()

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// // console.log(lis[0]);
// lis[0].style.color = "red";
// lis[0].style.backgroundColor = "#eee";

// //// convert HTMLCollection to array

// lis = Array.from(lis);
// // lis.reverse()
// console.log(lis);
// // lis.forEach( li => console.log(li));
// lis.forEach( li => console.log(li.className));
// lis.forEach( li => li.textContent = "Hello");
// lis.forEach( (li, index) => li.textContent = `${index}: Hello`);

//// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach( (item, index) => item.textContent = `${index+1}: Hello World`);

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach( li => li.style.background = "#ccc");

// for(let i=0;i<liEven.length;i++){
//     liEven[i].style.background = "#f4f4f4";
// }

//// 3.25 Traversing the DOM ////

// let val;

// let list = document.querySelector('ul.collection');
// let listItem = document.querySelector('li.collection-item:first-child')
// ;

// val = listItem;
// val = list;

// get child nodes

// val = list.childNodes; // NodeList
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;

// NodeList types
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// get children element nodes
// val = list.children; // HTMLCollection
// val = list.children[0];
// val = list.children[1];
// list.children[1].textContent = "Hello";

//  children of children
// val = list.children[3].children;
// val = list.children[3].children[0];
// list.children[3].children[0].id = "test-link";

// first child
// val = list.firstChild;
// val = list.firstElementChild;

// last child
// val = list.lastChild;
// val = list.lastElementChild;

// get child elements
// val = list.childElementCount;

// get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// val = listItem.nextElementSibling.previousElementSibling;

// console.log(val);


//// 3.26 Creating Elements ////

// const li = document.createElement('li');

// // add class
// // li.classList.add('collection-item')
// li.className = 'collection-item';

// // add id
// li.id = 'new-item';

// // add attribute
// li.setAttribute('title', 'New Item');

// // create text node and append

// node = document.createTextNode('Hello World');
// // console.log(node);
// li.appendChild(node);

// // create new link element
// const link = document.createElement('a');

// // add classes
// link.className = 'delete-item secondary-content';

// // ad icon html

// link.innerHTML = '<i class="fa fa-remove"></i>'

// // append link into li
// li.appendChild(link);

// // append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


//// 3.27 Removing, Replacing Elements ////

// // create element
// const newHeading = document.createElement('h2');

// // add id
// newHeading.id = 'task-title';

// // add new text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // get the old heading
// const oldHeading = document.getElementById('task-title');

// // parent
// const cardAction = document.querySelector('.card-action');
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// // remove elemnt
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove()

// // remove child element
// list.removeChild(lis[3]);

// // classes and attributes
// // classes
// const firstLi = document.querySelector('li:first-child');
// console.log(firstLi);
// console.log(firstLi.children[0]);

// const link = firstLi.children[0];

// let val;

// val  = link.className;
// val  = link.classList;
// val  = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;


// // attributes

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https://www.google.com');
// val = link.hasAttribute('href');
// val = link.hasAttribute('title');
// val = link.setAttribute('title', 'google');
// link.removeAttribute('title');
// val = link;

// console.log(val);


//// 3.28 Event Listeners, The Event Object ////

// // document.querySelector('.clear-tasks').addEventListener('click', e => {
// //     console.log("Hello World");

// //     e.preventDefault();
// // });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     // console.log('Clicked');

//     let val;
//     val = e;

//     // event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     // e.target.innerText = 'Hello';

//     // event type
//     val = e.type;

//     // timestamp
//     val = e.timeStamp;

//     // coordinate relative to window
//     // val = e.clientX;
//     val = e.clientY;
//     val = [e.clientX, e.clientY];
//     val = `(${e.clientX}, ${e.clientY})`
//     val = `(${e.offsetX}, ${e.offsetY})`
//     val = `(${e.pageX}, ${e.pageY})`

//     console.log(val);
// }


//// 3.29 Mouse Events ////

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // clearBtn.addEventListener('click', runEvent);
// // clearBtn.addEventListener('dblclick', runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);

// // card.addEventListener('mouseenter', runEvent);
// // card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);

// // event handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `(${e.offsetX}, ${e.offsetY})`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

//// 3.30 Keyboard Input Events ////

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')
// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent); // input
taskInput.addEventListener('copy', runEvent); // input
taskInput.addEventListener('paste', runEvent); // input
taskInput.addEventListener('input', runEvent);
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    console.log(e.target.value);
    // heading.innerText = e.target.value;

    // get input value
    // console.log(taskInput.value);

    // e.preventDefault();
}