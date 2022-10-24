// // ===================================
// // ============OBJECTS================
// // ===================================
// var person = {
//     name: "Maria Jones",
//     age: 21,
//     email: "maria.jones@mail.com",
//     hasDrivingLicense : true,
//     address: {
//         road: 11,
//         section: "Block B",
//         area: "Banani",
//         city: "Dhaka"
//     }
// };

// console.log("====PERSON OBJECT=======\n");
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.email);
// console.log(person.hasDrivingLicense);
// console.log(person.address);
// console.log(person.address.road);
// console.log(person.address.section);
// console.log(person.address.area);
// console.log(person.address.city);


// console.log("======PERSON JSON=======\n");
// console.log(JSON.stringify(person));
// const personJSON = JSON.stringify(person);
// console.log(personJSON);
// console.log(typeof personJSON);

// console.log("=====PERSON ARRAY=======\n");
// console.log(Object.values(person));
// console.log(Object.keys(person));
// const personArray = Object.values(person);
// for(let i = 0;i<personArray.length;i++){
//     console.log(personArray[i]);
// }

// for(element of personArray){
//     console.log(element);
// }
// personArray.forEach( function(element){
//     console.log(element);
// });
// personArray.forEach( element => console.log(element) );

// console.log("======HTML COLLECTION TO PERSON ARRAY=======\n");
// const doc = document.getElementsByTagName('div');
// console.log(doc);
// console.log(typeof doc);
// const newDoc = Object.values(doc);
// console.log(newDoc);
// console.log(typeof newDoc);

// // console.log("======NODELIST TO PERSON ARRAY=======\n");
// const Node = document.querySelectorAll('div > p');
// console.log(Node);
// console.log(typeof Node);
// console.log(Object.keys(Node))
// console.log(Object.values(Node))
// const newNode = Object.values(Node);
// console.log(newNode);
// console.log(typeof newNode);

// // ===================================
// // ============ARRAYS=================
// // ===================================
// var names = ["Alex","Mario","Sam","Ken"];
// console.log(names);
// console.log(typeof names);
// console.log(names.length);

// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }
// console.log("\n");
// for(name of names){
//     console.log(name);
// }
// console.log("\n");
// names.forEach(function(name){
//     console.log(name);
// });
// console.log("\n");
// names.forEach( name => console.log(name));
// console.log("\n");
// names.forEach(function(name, index){
//     console.log(`${index} - ${name}`);
// });

// // ===================================
// // ============FUNCTIONS==============
// // ===================================

// //// process - 1, regular function
// function add(x,y){
//     return x+y;
// }
// console.log(add(4,9));
// //// process - 2, function expression
// const addition = function (x, y){
//     return x+y;
// };
// console.log(addition(4,9));
// //// process - 3, arrow function
// const sum = (x,y) => x+y;
// console.log(sum(4,9));
// //// process - 4, callback function

//// object function
// var person = {name: "Jewel", age: 28, email: "zahid.jewel@mail.com"};
// console.log(person);
// console.log(typeof person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.email);
// console.log(Object.keys(person));
// console.log(Object.values(person));

// // ===================================
// // ==============LOOPS================
// // ===================================

// var li = [4,9,2,3,5,7,8,1,6,0];
// console.log(li);

//// for loop
// for(let i=0;i<li.length;i++){
//     console.log(li[i]);
// }

//// for of loop 
// for(num of li){
//     console.log(num);
// }

//// forEach loop + callback
// li.forEach(function(num){
    // console.log(num);
// });

//// forEach loop + callback + arrow function
// li.forEach( x => console.log(x));

// //// map + callback
// const list = li.map(function(num){
//     return num**2; 
// });
// console.log(list);

// //// map + callback + arrow
// const list = li.map( num => num**2 );
// console.log(list);

/// filter + callback
// const arrayNum = li.filter(function(num){
//     if(num%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(arrayNum);

//// filter + callback + arrow
// const arrayNum = li.filter( num => num%2===0 );
// console.log(arrayNum);

//// while loop
// let i=0
// while(i<li.length)
// {
//     console.log(li[i]);
//     i++;
// }

//// do..while loop
// let i=0
// do
// {
//     console.log(li[i]);
//     i++;
// } while(i<li.length);

// // ===================================
// // ===========CONDITIONALS============
// // ===================================

// // switch case
// // example - 01
// var person = {
//     name: "Zahidul Islam Jewel",
//     age: 28,
//     email: "zahidulislam.jewel@gmail.com"
// }

// switch (true) {
//     case (person.age > 19):
//         console.log(`${person.name} is an adult`);        
//         break;
//     case (person.age > 12 && person.age <= 19):
//         console.log(`${person.name} is a teen`);
//         break;
//     case (person.age > 19):
//         console.log(`${person.name} is an adult`);        
//         break;
//     default:
//         console.log("Unknown\n");
//         break;
// }

// // // switch case
// // // example - 02

// switch (new Date().getDay()) {
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
//     case 7:
//         console.log("Sunday");        
//         break;
//     default:
//         console.log("Unknown\n");
//         break;
// }

// ///// equality withour type coercion
// //// loose i.e. weak comparison
// console.log(1 == "1");
// console.log(1 == true);
// console.log(0 == false);

// /// strict comparison
// console.log(1 === "1");
// console.log(1 === true);
// console.log(0 === false);
  

// // ===================================
// // ======MAP, FILTER, REDUCE==========
// // ===================================
// //// map example - 01
// var arr = [0,1,1,2,3,5,8,13,21,34,55,89];
// const list = arr.map(function(n){
//     return Math.round(Math.sqrt(n));
// });
// console.log(list);

// //// map example - 02
// var arr = [0,1,1,2,3,5,8,13,21,34,55,89];
// const list = arr.map(function(n){
//     return n*2;
// });
// console.log(list);

// // //// filter example - 01
// var arr = [0,1,1,2,3,5,8,13,21,34,55,89];
// const list = arr.filter(function(n){
//     if(n%3===0){
//         return true;
//     }
// });
// console.log(list);

// // //// filter example - 02 
//// filter must return boolean
// var arr = [0,1,1,2,3,5,8,13,21,34,55,89];
// const list = arr.filter(function(n){
//     return n % 2 === 0;
// });
// console.log(list);

// //// reduce example - 01
// var arr = [0,1,1,2,3,5,8,13,21,34,55,89];
// const sum = arr.reduce(function(accumulator, current){
//     return accumulator + current;
// }, 0);
// console.log(sum);

// //// reduce example with callback + arrow function
// const arr = [4,9,2,3,5,7,8,1,6,0];
// const sum = arr.reduce( (acc,curr) => acc + curr, 0);
// console.log(sum);

// // ===================================
// // ==============CALBACKS=============
// // ===================================
// //// example 1 - callback inline
// function callBackExample(name, callback){
//     console.log(callback(name));
// }
// callBackExample("Abel", function(name){
//     return `Hello ${name}`;
// });

// //// example 2 - callback outside
// function callBackExample(name, callbackfunc){
//     console.log(callbackfunc(name));
// }
// const callback = function(name){
//     return `Hello ${name}`;
// }
// callBackExample("Abel",callback);

// //// callback example - 3 
// var mapCallback = function (n) {
//     return n**2;
// }
// var map = [1,2,3,4,5].map(mapCallback);
// console.log(map);


// // ===================================
// // ===========EXPORTS, IMPORTS========
// // ===================================
// // import * as math from "./math";
// // import {add,sub,pi} from "./math"; //// named imports
// import animal from "./animal"; //// default imports

// //// named exports and imports

// // console.log(math.add(4,9));
// // console.log(math.sub(9,2));
// // console.log(math.mul(2,3));
// // console.log(math.sub(3,5));
// // console.log(math.mod(9,4));
// // console.log(math.pi);
// // console.log(math.e);

// // console.log(add(4,9));
// // console.log(sub(9,2));
// // console.log(pi);

// //// default exports and imports

// var anim = new Animal();
// console.log(animal.getClassType());

// // ===================================
// // ===========VARIABLE SCOPE==========
// // ===================================
// //// variable scope with 'var' keywords
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log("\n");
// console.log(i);

// //// variable scope with 'let' keywords
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log("\n");
// console.log(i);

// //// 'const' keyword
// // let name = "Mario";
// // console.log(name);
// // name = {};
// // console.log(name);
// // name = 2;
// // console.log(name);

// const name = "Mario";
// console.log(name);
// name = {};
// console.log(name);
// name = 2;
// console.log(name);

// const person = {};
// // person.name = "Alex";
// person["name"] = "Alex";
// // console.log(person.name);
// console.log(person["name"]);

// const array = [];
// array.push(4);
// array.push(9);
// array.push(2);
// console.log(array);
// array.forEach( num => console.log(num));

// const name = "Anna";
// const country = "Canada";
// const age = 33;
// console.log(`Name: ${name}\nCountry: ${country}\nAge: ${age}`);

// // ===================================
// // ===========SPREAD OPERATORS========
// // ===================================
// //// example - 01
// const arrayOne = ["Alex","Mario","Ken"];
// const arrayTwo = ["Abel","Jim","Anna"];
// const concatArray = [...arrayOne];
// // console.log(concatArray);
// // concatArray.forEach( num => console.log(num));

// const newArray = [...arrayOne, ...arrayTwo];
// newArray.forEach( element => console.log(element));

// //// example - 02
// const name = "Marian";
// const spreadName = [...name];
// spreadName.forEach( letter => console.log(letter));

//// example - 03
// //// without spread operator
// const addNumbers = (n1,n2,n3) => n1+n2+n3;
// const numbers = [1,5,9];
// console.log(addNumbers(numbers[0],numbers[1],numbers[2]));

// //// with spread operato
// const addNumbers = (n1,n2,n3) => n1+n2+n3;
// const numbers = [1,5,9];
// const addition = addNumbers(...numbers);
// console.log(addition);

//// object and spread operators
//// without spread operator
// const address = {
//     road: 11,
//     block: "B",
//     area: "Banani",
//     city: "Dhaka"
// };

// const name = {
//     firstName: "Andy",
//     lastName: "Jones"
// };

// const person = {
//     firstName: name.firstName,
//     lastName: name.lastName,
//     road: address.road,
//     block: address.block,
//     area: address.area,
//     city: address.city
// };

// console.log(Object.keys(person)); //// returns array of keys so iterable
// console.log(Object.values(person)); //// returns array of values so. iterable
// console.log(person)
// console.log(typeof person);

// //// with spread operator
// const address = {
//     road: 11,
//     block: "B",
//     area: "Banani",
//     city: "Dhaka"
// };

// const name = {
//     firstName: "Andy",
//     lastName: "Jones"
// };
// const newPerson =  {...name, ...address};
// console.log(newPerson);
// console.log(typeof newPerson);
// console.log(Object.keys(newPerson));
// console.log(Object.values(newPerson));

// // const personJSON = JSON.stringify(newPerson);
// // const personJSON = JSON.stringify(newPerson,null);
// // const personJSON = JSON.stringify(newPerson,null,1);
// const personJSON = JSON.stringify(newPerson,null,2);
// console.log(personJSON);
// console.log(typeof personJSON);
// const personArray = Array.from(personJSON);

// // ===================================
// // ===========ARROE FUNCTION==========
// // ===================================
// //// regular function
// // const hello = function () {
// //     const es6 = 'ES6';
// //     return `Hello ${es6}`;
// // };
// //// arrow function
// const es6 = 'ES6';
// const hello = () => `Hello ${es6}`;

// //// regular function
// // const powers = [1,2,3,4,5].map(function(number,index){
// //     return Math.pow(number, index);
// // });
// //// arrow function
// const powers = 
//     [1,2,3,4,5].map((n,i) => Math.pow(n,i));

// //// regular function
// // const add = function(n1,n2){
// //     return n1+n2;
// // };
// //// arrow function
// const add = (n1, n2) => n1+n2;

// //// regular function
// // const milesToKm = function(miles) {
// //     return miles*1.60934;
// // };
// //// arrow function
// const milesToKm = miles => miles*1.60934;

// console.log(hello());
// console.log(powers);
// console.log(add(4,9));
// console.log(milesToKm(26.2));

// // ===================================
// // ==========LEXICAL THIS=============
// // ===================================
//// lexical and this
// //// using callback 
// const person = {
//     name: 'Alex',
//     cars: ['toyota', 'ferrari', 'bmw', 'lamborgini'],
//     toString: function () {
//         // console.log(`${this.name} has ${this.cars}`);
//         this.cars.forEach( function(car){ 
//             return console.log(`${this.name} has ${car}`)
//         }.bind(this));
//     }
// }

// //// using callback + string the reference of 'this'
// const person = {
//     name: 'Alex',
//     cars: ['toyota', 'ferrari', 'bmw', 'lamborgini'],
//     toString: function () {
//         const that = this; //// 'that' pointer stores the reference/address of 'this' pointer
//         this.cars.forEach( function(car){ 
//             return console.log(`${that.name} has ${car}`)
//         });
//     }
// }

// //// using arrow - no more problem regarding this..that..bind
// const person = {
//     name: 'Alex',
//     cars: ['toyota', 'ferrari', 'bmw', 'lamborgini'],
//     toString: function () {
//         // console.log(`${this.name} has ${this.cars}`);
//         this.cars.forEach( car => console.log(`${this.name} has ${car}`));
//     }
// }

// person.toString();

// //// enhanced object properties
// const calculator = name => {
//     return {
//         // name: name
//         name,
//         // add: function (n1, n2) {
//         //     return n1 + n2;
//         // }
//         add(n1, n2) {
//             return n1 + n2;
//         }
//     }
// };

// const calc = calculator("Jewel"); //// so now calc becomes an object
// // console.log(calc);
// console.log(calc.name);
// console.log(calc.add(4,9));

// // ===================================
// // ====DESTRUCTURING, ARRY, OBJECT====
// // ===================================

//// array destructuring
//// example - 01
// /// process - 1
// const name = ["Alex","Abel","Joe","John","Mario"];
// const alex = name[0];
// const abel = name[1];
// const joe = name[2];
// console.log(`${alex}, ${abel}, ${joe}`);

// /// process - 2
// const name = ["Alex","Abel","Joe","John","Mario"];
// const [alex, abel, joe] = name;
// console.log(`${alex}, ${abel}, ${joe}`);

// /// example - 02
// const name = ["Alex","Abel","Joe","John","Mario"];
// const [x, ,y, ,z] = name;
// console.log(`${x}, ${y}, ${z}`);

// //// example - 03
// const name = ["Alex","Abel","Joe","John","Mario"];
// const [alex, , joe, ...restOfNames] = name;
// console.log(`${alex}, ${joe}, ${restOfNames}`);
// console.log(restOfNames.length);

// //// object destructuring
// const getUser = () => {
//     return {
//         name: "John",
//         surname: "Doe",
//         gender: "male",
//         address: {
//             road: 11,
//             block: "B",
//             area: "Banani",
//             city: "Dhaka",
//             country: "Bangladesh"
//         },
//         age: 29
//     }
// };

// //// process - 1

// // const user = getUser(); //// user is now an object
// // const name = user.name;
// // const age = user.age;
// // const country = user.address.country;
// // const area = user.address.area;

// // console.log(name,age,area,country);

// //// alternative
// const user = getUser(); //// user is now an object
// // const {name, age} = user;
// // console.log(name,age);

// const {name, age, address:{country}} = user;
// console.log(name,age,country); 

// /// function default parameters
// //// example - 1
// // const calculatePay = (yearSalary , bonus=0) => yearSalary + bonus;

// // console.log(calculatePay(22000));
// // console.log(calculatePay(22000,1500));

// const calculatePay = (yearSalary, bonus = {
//     teamBonus: 0,
//     employeeBonus: 0
// }) => yearSalary + bonus.teamBonus + bonus.employeeBonus;

// console.log(calculatePay(22000));
// console.log(calculatePay(22000,{teamBonus: 1500, employeeBonus: 0}));
// console.log(calculatePay(22000,{teamBonus: 1500, employeeBonus: 1000}));

// // ===================================
// // ==========CLASSES, OOP=============
// // ===================================
// //// classes and constructor
// class Animal {
//     constructor(name, age) {
//         console.log(`object for '${name}' is created`);
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`${this.name} is sleeing`);
//     }
//     wakeUp() {
//         console.log(`${this.name} is waking up`);
//     }
// }

// // const dog1 = new Animal("Alex",3);
// // dog1.eat();
// // dog1.sleep();
// // console.log(`${dog1.name} is ${dog1.age} years old\n\n`);
// // const dog2 = new Animal("Max",4);
// // console.log(`${dog2.name} is ${dog2.age} years old`);
// // dog2.wakeUp();

// //// inheritance + static method 
// class Animal {
//     constructor(name, age) {
//         console.log(`object for '${name}' is created`);
//         this.name = name;
//         this.age = age;
//     }
//     static iAmStaticMethod(){
//         console.log("I am a static method");
//     }
//     eat(){
//         console.log(`${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`${this.name} is sleeing`);
//     }
//     wakeUp() {
//         console.log(`${this.name} is waking up`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, color){
//         super(name, age, self);
//         this.color = color;
//     }
//     logColor() {
//         console.log(`color: ${this.color}`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, breed){
//         super(name, age, self);
//         this.breed = breed;
//     }

//     logBreed() {
//         console.log(`Breed: ${this.breed}`);
//     }
// }

// const tiger1 = new Animal("Jack",4);
// console.log(tiger1.name);
// console.log(tiger1.age); 
// tiger1.eat();
// tiger1.sleep();
// tiger1.wakeUp();
// console.log("\n\n");

// const cat1 = new Cat("Mario",2,"Brown");
// console.log(cat1.name);
// console.log(cat1.age); 
// console.log(cat1.color);
// cat1.eat();
// cat1.sleep();
// cat1.wakeUp();
// cat1.logColor();
// console.log("\n\n");

// const dog1 = new Dog("Max",3,"Labrador");
// console.log(dog1.name);
// console.log(dog1.age); 
// console.log(dog1.breed);
// dog1.eat();
// dog1.sleep();
// dog1.wakeUp();
// dog1.logBreed();
// console.log("\n\n");

// // tiger1.iAmStaticMethod(); //// error
// // cat2.iAmStaticMethod(); //// error
// // dog1.iAmStaticMethod(); //// error
// Animal.iAmStaticMethod(); //// invoking static mehod correctly

// // ===================================
// // =======PROMISES, FETCH API=========
// // ===================================

//// Promises
// //// creating promises
// const promise  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("data back from the server");
//     }, 3000);

//     setTimeout(() => {
//         reject("no data back from the server, threr was and error ");
//     }, 5000); //// change it for different testcase 2000 => 5000  
// });

// promise.then( response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });

// //// using Promise.all
// const namesPromise  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(["Alex","Mario","Lee"]);
//     }, 3000);

//     setTimeout(() => {
//         reject("no data back from the server, there was an error ");
//     }, 5000); //// change it for different testcase 2000 => 5000  
// });

// const surnamesPromise  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(["Williams","Super","Cooper"]);
//     }, 3000);

//     setTimeout(() => {
//         reject("no data back from the server, there was an error ");
//     }, 5000); //// change it for different testcase 1000 => 2000 => 5000  
// });

// Promise.all([namesPromise, surnamesPromise]).then( data => {
//     // console.log(data);
//     const [names, surnames] = data;
//     for(let i=0;i<names.length;i++){
//         const name = names[i];
//         const surname = surnames[i];
//         console.log(`${name} ${surname}`);
//     }

// }).catch(error => {
//     console.log(error);
// });

// //// fetch api
// const getRanadomUsers = n => {
//     const fetchRandomUsers = fetch( `https://randomuser.me/api/?results=${n}`);
//     console.log(fetchRandomUsers);
//     fetchRandomUsers.then(data => {
//         // console.log(data);
//         // console.log(data.json());
//         data.json().then( randomUsers => {
//             // console.log(JSON.stringify(randomUsers));
//             console.log(JSON.stringify(randomUsers.results.length));
//             randomUsers.results.forEach( user => {
//                 const {gender, email } = user;
//                 console.log(`${gender} - ${email}`);
//             });
            
//         });
//     });
// };

// getRanadomUsers(10)

// // ===================================
// // =============GENERATORS============
// // =============COROUTINE=============
// // =============ASYNC AWAIT===========
// // ===================================

// //// example - 1
// const getNumbers = function* () {
//     yield 1;
//     yield "hello";
//     yield true;
//     yield {name: "Alex", age: 21};
//     return "Done!";
// };

// const numbersGen = getNumbers();
// // console.log(numbersGen.next());
// // console.log(numbersGen.next());
// // console.log(numbersGen.next());
// // console.log(numbersGen.next());
// // console.log(numbersGen.next());

// console.log(numbersGen.next().value);
// console.log(numbersGen.next().value);
// console.log(numbersGen.next().value);
// console.log(JSON.stringify(numbersGen.next().value));
// console.log(numbersGen.next().value);

// console.log(numbersGen.next().done);
// console.log(numbersGen.next().done);
// console.log(numbersGen.next().done);
// console.log(numbersGen.next().done);
// console.log(numbersGen.next().done);

// //// example - 02
// const getNumbers = function* (numbers) {
//     for(var i=0;i<numbers.length;i++){
//         yield numbers[i];
//     }
// };

// const getNumbersGen = getNumbers([1,2,3,4,5]);

// const interval = setInterval(() => {
//     const next = getNumbersGen.next();
//     if(next.done){
//         console.log("this generator is done");
//         clearInterval (interval);
//     }
//     else {
//         const number = next.value;
//         console.log(number);
//     }
// }, 1000);

// //// coroutine 
// //// promises with generators 

// //// async await
// async function logName(name) {
//     console.log(name);
//     // 1. we can yield promises using await
//     const transformName = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(name.toUpperCase()),1000);
//     });

//     const result = await transformName;
//     // console.log(result);
//     // 2. returns a promise
//     // return name;
//     return result;   
// }
// // logName("antonio");
// logName("antonio").then( res => {
//     console.log("result from async function = " + res);
// });

//// from generators to async await