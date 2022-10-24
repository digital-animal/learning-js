//////================================================
//////============001 JavaScript Introduction=========
//////================================================

// alert("Hello world");
// console.log("Hello world");

//////================================================
//////=================002 JavaScript Basics==========
//////================================================

///// variables and constants
// let age=25;
// console.log(age);

// var age = 30;
// console.log(age);

// let year=2019;
// const age=30;
// console.log(age,year);

// age=32;
// console.log(age);

// const points = 100;
// points = 50;
// console.log(points);

// var score = 75;
// console.log(score);

// const myName = "Jewel";
// console.log(myName);


// ////// string
// // console.log("Hello world");

// let email="example@email.com";
// // console.log(email);

// // //// string concatenation
// let firstName="Zahid";
// let lastName="Jewel";
// let fullName= firstName+" "+ lastName;
// // // console.log(fullName);

// // let fullName = `${firstName} ${lastName}`;
// // console.log(fullName);

// ///// getting characters
// console.log(firstName[0]);
// console.log(lastName[4]);

// //// string length
// console.log(firstName.length);
// console.log(fullName.length);

// //// string methods
// console.log(fullName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(fullName.indexOf('J'));

// let result = fullName.toLowerCase();
// console.log(result);
// console.log(email.indexOf('@'));
// console.log(fullName.lastIndexOf('e'));
// console.log(fullName.slice(0,5));
// console.log(fullName.substr(0,5))
// console.log(fullName.substr(3,8));
// console.log(fullName.replace('Z','T'));

////// math operators
// let radius = 10;
// const pi=3.14159;
// let area = pi*radius**2;
// console.log(radius);
// console.log(pi);
// console.log(area);

// console.log(10+2);
// console.log(10-2);
// console.log(10*2);
// console.log(10/2);
// console.log(10%2);
// console.log(2**8);

//// operator precedence and associativity
// let result = 5*(10-3)**2;
// console.log(result);

// let likes = 10;
// likes = likes+1;
// likes++;
// likes--;
// likes = likes + 10;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;
// console.log(likes);

//// NaN - Not a Number
// console.log(5/"Hello");
// console.log(5*"Hi");

//// template string
// let result = "the blog has "+ likes+ " likes";
// let result = `the blog has ${likes} likes`;
// console.log(result);

// const title = "Best reads of 2019";
// const author = "Mario";
// const likes = 30;
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>This blog has ${likes} likes</p>

// `
// console.log(html);

//// arrays
// let names = ["jim","ken","mario"];
// console.log(names);
// console.log(names.length);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// names[1] = "jen";
// console.log(names);
// let result = names.join(',');
// let result = names.join('-');
// console.log(result);
// let index = names.indexOf("ken");
// console.log(index);
// let ninjas = ["shaun","ryu"];
// let output = names.concat(ninjas);
// console.log(output);

// let email = "example@mail.com";
// let result = email.split('@');
// console.log(result);

// let name = "Zahidul Islam Jewel";
// let output = name.split(' ');
// console.log(output);

// li = [4,9,2,3,5,7,8,1,6,0];
// console.log(li);
// console.log(li.length);
// li.push(11);
// console.log(li);
// let output = li.pop();
// console.log(output);
// console.log(li);

// let age;
// let age = null;
// age = 30;
// console.log(age, age+3, `the age is ${age}`);

// console.log(true, false);
// console.log(true, false,"true","false");

// let email = "example@mail.com";
// console.log(email.includes('@'));
// console.log(email.includes('t'));

// let names = ["jim","ken","mario"];
// console.log(names.includes("ken"));
// console.log(names.includes("jen"));

// let age=25;
// console.log(age==25);
// console.log(age!=25);
// console.log(age<=25);
// console.log(age<25);
// console.log(age>=25);
// console.log(age>25);

// let name = "Jewel";
// console.log(name=="Jewel");
// console.log(name=="jewel");
// console.log(name>"crystal");
// console.log(name>"Crystal");

// console.log(age==25);
// console.log(age=='25');
// console.log(age===25); // strict comaparison
// console.log(age==='25'); // strict comaparison
// console.log(age!==25); // strict comaparison
// console.log(age!=='25'); // strict comaparison

//// type conversion
//// explicit type conversion
// let score ='100';
// console.log(score+1);
// console.log(typeof score);
// score=Number(score);
// console.log(score);
// console.log(typeof score);
// console.log(score+1);

// let result = Number("hello");
// console.log(result);
// console.log(typeof result);

// let result = String(50);
// console.log(result);
// console.log(typeof result);

// let result=Boolean(100);
// console.log(result);
// console.log(typeof result);
// let out=Boolean(0);
// console.log(out);
// console.log(typeof out);

// let result=Boolean('0');
// console.log(result);
// console.log(typeof result);

// let result=Boolean(0);
// console.log(result);
// console.log(typeof result);

//////=============================================
//////============003 CONTROL FLOW IN JS===========
//////============LOOP,CONDITIONAL,SWITCH==========
//////=============================================

// ////for loops

// // for(let i=0;i<10;i++){
// //     console.log(i);
// // }

// const names= ["Ken","Jim","Mario"];
// for(let i=0;i<names.length;i++) {
//     // console.log(i, names[i]);
//     let html =`<div>${names[i]}<div>`;
//     console.log(html);
// }

//// while loop
// let i=0;
// while(i<5) {
//     console.log(i);
//     i++;
// }

// const names= ["Ken","Jim","Mario"];
// let i=0;
// while(i<names.length) {
//     console.log(i, names[i]);
//     i++;
// }

//// do while loop

// const names= ["Ken","Jim","Mario"];
// let i=0;
// do {
//     console.log(i, names[i]);
//     i++;
// } while(i<names.length);

// let i=5;

// do {
//     console.log(i);
//     i++;
// } while(i<5);

//// conditional statements
//// if statements

// const age=18;
// const age=15;
// const age=12;

// if(age>18){
//     console.log("you are young.");
// } else if(age >= 13 && age <= 18) {
//     console.log("your are teen");
// } else if(age < 13) {
//     console.log("your are child");
// }

// // const names= ["Ken","Jim","Mario","Mosh"];
// const names= ["Ken","Jim"];
// if(names.length > 3){
//     console.log("that's a lot of names");
// } else{
//     console.log("not enough");
// }

//// if..else
// // const password = "pass";
// // const password = "password";
// const password = "p@ssword";

// if(password.length >= 8){
//     console.log("password is strong");
// } 
// else {
//     console.log("password is weak");
// }

// //// if..else if..else
// // const password = "pass";
// // const password = "password";
// const password = "p@ssword";

// if(password.length >=12){
//     console.log("password is very strong");
// } 
// else if(password.length >= 8){
//     console.log("password is strong enough");
// } 
// else {
//     console.log("password is weak");
// }

//// paring if..else with logical iopearators - && || !
// const password = "pass";
// const password = "password";
// const password = "p@ssword";
// const password = "password1234";
// const password = "p@ssword1234";

// if(password.length >=12 || (password.length>=8 && password.includes('@'))){
//     console.log("password is very strong");
// } 
// else if(password.length >= 8){
//     console.log("password is strong enough");
// } 
// else {
//     console.log("password is weak");
// }


//// logical NOT(!)

// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(!false);

// let user = false;
// if(!user){
//     console.log("you must login  to continue");
// }

// //// break and continue
// const scores = [4,9,2,3,5,7,8,1,6,0];
// for(let i=0; i<scores.length;i++){
//     if(scores[i]%3==0){
//         continue;
//     }
    
//     if(scores[i]==1){
//         break;
//     }
//     console.log(scores[i]);
// }

//// switch statement

// let ch='A';
// let ch='i';
// let ch='J';
// let ch='$';

// switch(ch){
//     case 'A':
//     case 'a':
//     case 'E':
//     case 'e':
//     case 'I':
//     case 'i':
//     case 'o':
//     case 'O':
//     case 'U':
//     case 'u':
//         console.log("vowel");
//         break;
//     default:
//         console.log("not vowel");
// } 

// //// variable scope and block scopes

// //// 'let' and 'const' vs older 'var'
// let age = 30;
// if(true) {
//     // age = 40;
//     let age = 50;
//     console.log("inside 1st code block, age: ",age);
//     if(true){
//         // age = 35;
//         let age = 25;
//         console.log("inside nested if i.e nested codeblock, age: ",age);
//         var height = 167;
//         const weight = 75;
//     }
// }
// console.log("outside codeblock, global scope, age: ",age);
// console.log(`height: ${height}`);
// console.log(`weight: ${weight}`); // erro - local scope

//////================================================
//////==============004 FUNCTIONS IN JS===============
//////================================================

// // function declaration and definition
// // hoisted to the top
// function greet() {
//     console.log("Hello World");
// }
// greet();
// // greet();
// // greet();

// // function expression
// // not hoisted to the top
// const welcome = function () {
//     console.log("Hello there, welcome");
// };// must be semicolon(;) terminated
// welcome();

// // console.log("testing 1234");
// // function parameters and arguments
// const speak = function (name="Robi", period="night") {
//     console.log(`good ${period}, ${name}`);
// }
// speak("Zahid","evening");

// //// default arguments
// const speak = function (name="Robi", period="morning") {
//     console.log(`good ${period}, ${name}`);
// }
// speak();
// speak("Jewel");
// speak("Zahid","evening");

// //// returning value from function
// const calcArea = function (r) {
//     return 3.14*r**2;
// }
// let result = calcArea(10);
// console.log(result);
// console.log(calcArea(5));

// //// arrow function
// const calcArea = (r) => {
//     return 3.14*r**2;
// };
// console.log(calcArea(5));

// //// arrrow function more precise
// const calcArea = r => 3.14*r**2;

// console.log(calcArea(5));

// const add = (x, y) => x + y;
// console.log(add(4,9));

// const sum = (x, y, z) => x + y + z;
// console.log(sum(4,9,2));

//// converting a regular function to an arrow function

//// example 01
// //// regular function
// const greet = function () {
//     return "hello, world";
// }
// console.log(greet());

// //// arrow function
// const greet = () => "hello, world";
// console.log(greet());

//// example 02
//// regular version
// const bill = function(products, tax) {
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// li = [100, 300, 200, 500, 400];
// console.log(bill(li,0.2));

// //// arrow function version
// const bill = (products, tax) => {
//     let total=0;
//     for(let i=0;i<products.length;i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }

// li = [100, 300, 200, 500, 400];
// console.log(bill(li,0.2));

// //// functions vs methods
// const name = "Jewel";

// //// function
// const greet = () => "hello";
// console.log(greet());

// //// method
// console.log(name.toUpperCase());

// //// callbacks and foEach
// //// passing a whole function as an argument - callback function
// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function (value) {
// //     console.log(value);
// // });

// //// converting callback function to callback-arrow function
// myFunc( value => console.log(value));

// //// forEach + callback function
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// people.forEach(function(person){
//     console.log(person);
// })

// //// forEach + callback + arrow function
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// people.forEach( person => console.log(person));

// //// forEach + callback + arrow function
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// people.forEach( (person, index) => console.log(index, person));

// /// callback and arrow function seperately
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// const logPerson = (person, index) => {
//     console.log(`${index} - ${person}`);
// }
// people.forEach(logPerson);

//// callback function + arrow function in practice
//// generating html list using forEach+callback+arrow function
//// from an arry or list

// //// process - 1
// const ul = document.querySelector('.people');
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// people.forEach( person => {
//     // ul.appendChild(person);
//     ul.innerHTML += `<li>${person}</li>`; 
// }); 

// //// process - 2
// const ul = document.querySelector('.people');
// const people= ["Ken","Jim","Mario","Mosh","Popey"];
// let html = ``;
// people.forEach( person => {
//     html += `<li style="width:200px;border:1px solid black;color:#f4f4f4;background-color: #4CA950;">${person}</li>`;
// }); 
// // console.log(html); 
// ul.innerHTML = html;

//////================================================
//////========005 JS OBJECT LITERAL NOTATION==========
//////================================================

// const name = 'mario';
// console.log(name.toUpperCase());

//// creating an Object literals
//// object literals
// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: 'Berlin',
//     blogs: ["how to make coffee", "studying 10 hours a day"]
// };

// const userJSON = JSON.stringify(user);
// // console.log(user);
// console.log("\n");
// console.log(userJSON);

// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);
// console.log(user.blogs);
// console.log(user.blogs[0]);
// console.log(user.blogs[1]);

// console.log(user["name"]);
// console.log(user["email"]);
// const key = "location";
// console.log(user[key]);

// console.log(typeof user)

//// adding method to objects
//// using 'this' keyword in global context
// console.log(this); // refers to window object

// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: 'Berlin',
//     blogs: ["how to make coffee", "studying 10 hours a day"],
//     login: function () {
//         console.log("user login successful");
//     },
//     logout: function () {
//         console.log("user logout successful");
//     },
//     // logBlogs: () => {
        
//     //     console.log(this); // refers to 'window' object as logBlogs() is arrow function

//     // },
//     logBlogs: function () {
        
//         // console.log(this); // refers to user object
//         // console.log(this.blogs); // returns array of blog
//         this.blogs.forEach( blog => console.log(blog));
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();

// //// restructing and refactoring the previous code
// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: 'Berlin',
//     blogs: ["how to make coffee", "studying 10 hours a day"],
//     login() {
//         console.log("user login successful");
//     },
//     logout() {
//         console.log("user logout successful");
//     },
//     logBlogs: function () {
//         this.blogs.forEach( blog => console.log(blog));
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();

//// storing object inside an arry of an object literals
//// nesting an object inside another object
//// example array of objects
// const blogs = [
//     { title: "how to make coffee",likes: 30},
//     { title: "studying 10 hours a day", likes: 20}
// ];
// console.log(blogs);

// //// adding array of objects to the user object
// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: 'Berlin',
//     blogs: [
//         { title: "how to make coffee",likes: 30},
//         { title: "studying 10 hours a day", likes: 20}

//     ],
//     login() {
//         console.log("user login successful");
//     },
//     logout() {
//         console.log("user logout successful");
//     },
//     logBlogs() {
//         this.blogs.forEach( blog => console.log(`${blog.title} - ${blog.likes} likes`));
//     }
// };

// user.login();
// user.logout();
// user.logBlogs();

// //// MATH OBJECT IN JS
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(7.7));
// console.log(Math.trunc(7.7));
// console.log(Math.floor(7.7));
// console.log(Math.ceil(7.7));
// console.log(Math.abs(-7));
// console.log(Math.log(2.72));
// console.log(Math.log10(1000));
// console.log(Math.exp(2));
// console.log(Math.sin(0.5*Math.PI));
// console.log(Math.cos(Math.PI));
// console.log(Math.tan((1/3)*Math.PI));
// console.log(Math.asin(1));
// console.log(Math.acos(-1));
// console.log(Math.atan(1.73));
// console.log(Math.pow(2,8));
// console.log(Math.sqrt(2));
// console.log(Math.cbrt(216));
// console.log(Math.hypot(12,5));
// console.log(Math.max(4,9,2,3,5));
// console.log(Math.min(7,8,1,6,0));
// console.log(Math.random());
// console.log(Math.round(Math.random()*100));

// const random = Math.random();
// console.log(Math.round(random*1000));

//// PRIMITIVE TYPE VS REFERENCE TYPE
//// STACK VS HEAP
//// STACK

// //// PRIMITIVE TYPE
// console.log("PRIMITIVE TYPE");

// let scoreOne = 50;
// let scoreTwo = scoreOne;
// console.log(scoreOne, scoreTwo);
// scoreOne = 75;
// console.log(scoreOne,scoreTwo);
// //// REFERENCE TYPE
// console.log("REFERENCE TYPE");

// const userOne = {Name: "Ken", age:30};
// const userTwo = userOne;
// // console.log(userOne, userTwo);
// console.log(userOne.age, userTwo.age);
// userOne.age = 32;
// console.log(userOne.age, userTwo.age);
