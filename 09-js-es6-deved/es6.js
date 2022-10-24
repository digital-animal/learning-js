//// variables

// /// old js
// var names = ["Alex","Mario","Ken"];

// var counter = 10;
// counter = 5;
// var counter = 15;
// console.log(counter);

// //// new js
// const names = ["Alex","Mario","Ken"];

// const counter = 10;
// // counter = 5;
// // const counter = 15;
// console.log(counter);

//// variable scope

//// old js
// var counter = 5;
// function sayName() {
//     var name = "Jewel";
//     console.log(name);
// }

// sayName();
// console.log("Hello " ,name);

//// new js
// const totoList = ["milk", "bread", "butter"]; 
// totoList = ["rice"];

// let counter = 10;
// counter = 5;
// console.log(counter);

// const list = [4,9,2,3,5,7,8,1,6,0];
// for(let i=0;i<list.length;i++){
//     console.log(list[i]);
// }

// //// concatenation
//// template string
// const name = "Jewel";
// console.log(`Hello ${name}`);

//// object literals
// //// old js
// function getBook(title, author){
//     return {
//         title: title,
//         author: author
//     };
// }

// var book = getBook("Harry Potter", "JK Rowling");
// console.log(book);
// // console.log(book.title, book.author);

// //// es6
// function getBook(title, author){
//     return {
//         title,
//         author
//     };
// }

// const book = getBook("Harry Potter", "JK Rowling");
// console.log(book);
// // console.log(book.title, book.author);

 //// object deconstruction
//  //// old js
//  var user = {
//      name: 'Zahid',
//      age: 28,
//      email: 'zahid.jewel@mail.com'
//  }
//  console.log(user.name, user.age);
//  var myName = user.name;
//  console.log(myName);

//  //// es6
//  const user = {
//     name: 'Zahid',
//     age: 28,
//     email: 'zahid.jewel@mail.com'
// };

// const {myName, myAge, myMail} = user;
// console.log(myName, myAge, myMail);

// //// function
// //// old js
// function sayName() {
//     console.log("I am Jewel");
// }

// var sayAge = function () {
//  console.log("I am 28");
// }

// sayName();
// sayAge();

// //// es6
// //// arrow function
// const sayLocation = () => console.log("Dhaka");
// sayLocation();

//// this keyword
// //// old js
// var user = {
//     name: 'Zahid',
//     age: 28,
//     email: 'zahid.jewel@mail.com',
//     sayName: function () {
//         console.log("Name: "+ this.name);
//         var that = this;

//         var fullName = function () {
//         // console.log("My name is "+this.name+" and age is "+this.age);
//         console.log("My name is "+that.name+" and age is "+that.age);
//   };
//   fullName();
//  }
// }; 
// user.sayName();

// //// es6
// const user = {
//     name: 'Zahid',
//     age: 28,
//     email: 'zahid.jewel@mail.com',
//     sayName: function () {
//         console.log(`Name: ${this.name}`);
        
//         const fullName = () => {
//             console.log(`My name is ${this.name} and age is ${this.age}`);
//   };
//   fullName();
//  }
// }; 

// user.sayName();

//// default parameters
// //// old js
// function multiply(x,y) {
//     console.log(x*y);
// }
// multiply(4,9);

// function multiply(x,y) {
//     const a = x || 1;
//     const b = y || 1;
//     console.log(a*b);
// }
// multiply(4,9);
// multiply(4);
// multiply();

//// es6
// const multiply = (x=1,y=1) => console.log(x*y);
// multiply(4,9);
// multiply(4);
// multiply();

//// array functions
//// es6
const numbers = [4, 9, 2, 3, 5, 7, 8, 1, 6, 0];

// //// for..of loop
// for(num of numbers){
//     console.log(num);
// }

// //// for..in loop //// specially for object literals
// for(i in numbers){
//     console.log(i, numbers[i]);
// }

//// for..each loop
// numbers.forEach( num => console.log(num));

// /// for loop
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// //// while loop
// let i=0;
// while(i<numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

// //// do..while loop
// let i=0;
// do {
//     console.log(numbers[i]);
//     i++;
// } while(i<numbers.length);

// //// map
// const mapped = numbers.map( num => num**2 );
// console.log(mapped);

// //// filter
// const filtered = numbers.filter( num => num%2===0 );
// console.log(filtered);

//// reduce
// const reduced = numbers.reduce( (accumulator, current) => 
//     accumulator + current,0);

// console.log(reduced);

//// constructor function and classes
//// old js
// function Person(name,age,email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

// Person.prototype.sayName = function() {
//     console.log("My name is "+this.name);
// }

// var person1 = new Person("Jewel",28, "zahid@email.com");
// console.log(person1);
// person1.sayName();

// for(item in person1){
//     console.log(person1[item]);
// }

// //// es6

// class Person {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     sayName(){
//         console.log(`My name is ${this.name}`);
//     }
// }
// //// inheritance
// class Male extends Person {
//     constructor(name, age, email, sex, job){
//         super(name, age, email);
//         this.sex = sex;
//         this.job = job;
//     }
//     sayHello() {
//         console.log(`Hello, I am ${this.name} and I work as ${this.job}`);
//  }
// }

// // const person1 = new Person("Zahid",28, "zahid.jewel@email.com");
// // console.log(person1);
// // person1.sayName();
// // for(item in person1){
// //     console.log(person1[item]);
// // }

// const male1 = new Male("Jewel", 29, "zidulislamssf@gmail.com", "male", "student");
// console.log(male1);
// male1.sayHello();
// for(item in male1){
//     console.log(male1[item]);
// }

//// promises 

// //// old callbacks

// console.log("statr");

// function getData(data, callback){
//     setTimeout(() => {
//         console.log("reading from the database");
//         callback({data: data});
//     }, 2000);
// }

// getData([4,9,2], function(data) {
//     console.log(data);
// });
// console.log("finish");

//// es6
// //// resolve
// const prom = new Promise((resolve, reject) => {
//     /// here is async
//     setTimeout(() => {
//         // resolve(200);
//         resolve({user: "Jewel", password: 'p@assword1234'});
//     }, 2000);
// });

// prom.then(data => {
//     console.log(data);
// });

// //// reject
// const prom = new Promise((resolve, reject) => {
//     /// here is async
//     setTimeout(() => {
//         reject(new Error("Something went wrong "));
//     }, 2000);
// });

// prom.then(data => { 
//     console.log(data);
// })
// .catch( err => console.log(err));