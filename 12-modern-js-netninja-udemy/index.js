// =================================
// ========02 JS BASICS=============
// =================================

// alert("Hello there");
// console.log("Hello");


//// 2.3 VARIABLES, CONSTANTS, COMMENTS ////

// let age = 25;
// console.log(age);

// let year = 2020;
// console.log(year);
// console.log(age, year)

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// // points = 50; // error

// var name = "Zahid";
// console.log(name);

// var score = 75;
// console.log(score);

// let myName = "Jewel";
// console.log(myName);


//// 2.5 STRINGS ////
// console.log("Welcome to JavaScript");

// let email = "mario@gmail.com";
// console.log(email);

// let firstName = "Zahid";
// let lastName = "Jewel";

// // let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// console.log(firstName[0]);
// console.log(fullName[6]);

// console.log(firstName.length);
// console.log(fullName.length);

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.replace("Zahid","Tonmoy"));

//// 2.6 MORE STRINGS METHODS ////
// let result = fullName.toUpperCase();
// console.log(result);

// console.log(fullName);

// let index = email.indexOf('@');
// console.log(index);

// let arr = email.split('@');
// console.log(arr);

// let lastIndex = email.lastIndexOf('m');
// console.log(lastIndex);

// let sliced = email.slice(0,11);
// console.log(sliced);

// let output = email.substr(4,8);
// console.log(output);

// let replaced = email.replace("m","w");
// console.log(replaced);

//// 2.7 NUMBERS ////
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators + - * / % **

// console.log(10/2);
// let result = radius % 3;

// let result = pi*radius**2;

// order of operation - B I D M A S
// operator precedence and associativity

// let result = 5*(10-3)**2;
// console.log(result);

// let likes = 10;
// // likes = likes + 1;
// // likes++;
// // likes--;
// // likes += 10;
// // likes -= 5;
// // likes *= 2;
// // likes /= 2;

// console.log(likes);

// NaN - Not a Number

// console.log(5/"hello");
// console.log(5*"Hello");

// let result = "the blog has " + likes + " likes";
// console.log(result);

//// 2.8 TEMPLATE STRINGS ////
//// i.e. TEMPLATE LITERALS ////

// const title = "Best reads of 2019";
// const author = "Mario";
// const likes = 30;

// let result = `the blog called '${title}' by ${author} has ${likes} likes`;
// console.log(result);

//// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>the blog has ${likes} likes</span>
// `;

// console.log(html);


//// 2.9 ARRAYS ////

// let ninjas = ["Shaun", "Mario", "Lee", "Alex", "Ken"];
// console.log(ninjas);
// console.log(ninjas[0]);

// ninjas[1] = "Jen";

// for(let i=0;i<ninjas.length;i++){
//     console.log(ninjas[i]);
// }

// ninjas.forEach( ninja => {
//     console.log(ninja);
// });

// let ages = [20,25,30,35];
// console.log(ages);
// console.log(ages[2]);

// let random = ["Shaun", "Crystal", 30, 20];
// console.log(random);

// console.log(ninjas.length);

//// array methods

// let result = ninjas.join(',');
// let result = ninjas.join('-');

// let result = ninjas.indexOf("Alex");
// let result = ninjas.indexOf("Ram");

// let result = ninjas.concat(["Martha", "Anna"]);
// let result = ninjas.push("Caleb");
// let result = ninjas.pop();

// console.log(result);
// console.log(ninjas);


//// 2.10 NULL AND UNDEFINED ////

// // let age;
// let age = null;

// console.log(age, age+3, `age is ${age}`);


//// 2.11 BOOLEAN AND COMPARISIONS ////

// console.log(true, "true");
// console.log(false, "false");

// let email = "mario@mail.com";
// let result = email.includes('@');
// let result = email.includes('!');

// let names = ["Shaun", "Mario", "Lee", "Alex", "Ken"];
// let result = names.includes("Mario");
// let result = name.includes("Anna");

// console.log(result);

//// comparision operators
// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age >= 25);
// console.log(age <= 25);

// let name = "Shaun";// let name = "shaun";
// console.log(name == "Shaun");
// console.log(name > "Crystal");
// console.log(name > "crystal");

//// 2.12 LOOSE VS STRICT COMPARISIONS ////

// let age = 25;
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

//// 2.13 TYPE CONVERSION ////

// let score = '100';
// // score = Number(score);
// console.log(score+1);
// console.log(typeof score);

// let result = "Hello";
// result = Number(result);
// console.log(result);

// let result = String(50);
// console.log(result);
// console.log(typeof result);

// let result = Boolean(100);
// console.log(result);

// let result = Boolean(0);
// console.log(result);

// let result = Boolean(null);
// console.log(result);

// let result = Boolean('0');
// console.log(result);
// console.log(typeof result);

// let result = Boolean('');
// console.log(result);

// =================================
// ======= 03 CONTROL FLOW =========
// =================================

//// 3.2 for loops ////

// for(let i=0;i<5;i++) {
//     console.log(i);
// }
// console.log("Loop Finished");


// const names = ["Alex", "Ken", "Mario", "Anna"];

// let html = "";
// for(let i=0;i<names.length;i++){
//     // console.log(names[i]);
//     html = `<div>${names[i]}</div>`;
//     console.log(html);

//     // html += `<div>${names[i]}</div>`;
// }

// // console.log(html);

//// 3.3 while loops ////

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// const names = ["Alex", "Ken", "Mario", "Anna", "Jim"];
// let i=0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }

//// 3.4 do while loops ////

// // let i = 0;
// let i = 5;

// do{
//     console.log(i);
//     i++;
// } while(i<5);

//// 3.5 if statements ////

// const age = 20;
// const age = 25;

// if(age > 20){
//     console.log("Your are over 20 years old");
// }

// const names = ["Alex", "Ken", "Mario", "Anna", "Jim", "Caleb"];

// if(names.length > 3){
//     console.log("that's a lot of people");
// }

// // const password = "pass";
// const password = "password";

// if(password.length >= 8){
//     console.log("that password is strong enough");
// }

//// 3.6 esle and else if statements ////

// const password = "pass";
// const password = "p@ss";
// const password = "password";
// const password = "p@ssword";
// const password = "password1234";

// if(password.length >= 12) {
//     console.log("very strong password");
// }
// else if(password.length >= 8){
//     console.log("that password is strong enough");
// }
// else {
//     console.log("weak password");
// }

//// 3.7 Logical Operators ////

// const password = "pass";
// const password = "p@ss";
// const password = "password";
// const password = "p@ssword";
// const password = "password1234";
// const password = "p@ssword1234";

// if(password.length >= 12 && password.includes('@')) {
//     console.log("password is super strong");
// }
// else if(password.length >= 12 || password.includes('@')){
//     console.log("that password is very strong");
// }
// else if(password.length>=8 ){
//     console.log(" that passwor is medium strong")
// }
// else {
//     console.log("weak password");
// }

//// 3.8 Logical NOT ////

// console.log(true);
// console.log(!true);
// console.log(false);
// console.log(!false);

// let user = false;

// if(!user){
//     console.log("Hello there");
// }

//// 3.9 break and continue ////

//// break
// const scores = [4,9,2,3,5,7,8,1,6];
// for(let i=0;i< scores.length;i++){
//     console.log(scores[i]);

//     if(scores[i] == 7){
//         console.log("Congrats..goodbye");
//         break;
//     }
// }

//// continue
// const scores = [4,9,2,3,5,7,8,1,6];
// for(let i=0;i< scores.length;i++){

//     if(scores[i] < 5){
//         continue;
//     }
//     console.log(scores[i]);
// }

//// 3.10 switch statements ////
//// switch case uses strict equality '==='

// // const grade = 'A+';
// const grade = 'A-';
// // const grade = 'D';
// // const grade = 'F';

// switch(grade){
//     case 'A+':
//         console.log("Bravo!");
//         break;
//     case 'A':
//         console.log("Very Good!");
//         break;
//     case 'A-':
//         console.log("Satisfactory");
//         break;
//     case 'B':
//         console.log("Try to Improve");
//         break;
//     case 'C':
//         console.log("Unsatisfactory");
//         break;
//     case 'D':
//         console.log("Bad Grade");
//         break;
//     case 'F':
//         console.log("Hopeless");
//         break;
//     default:
//         console("Invalid Grade");
// }

//// 3.11 Variables and Block Level Scope ////

// // let age = 30;
// let name = "Ken";
// if(true){
//     // age = 40;
//     let name = "Shaun";
//     // let age = 40;
//     console.log("inside root code block: ",age, name);
//     if(true){
//         let name = "Mario";
//         age = 50;
//         // let age = 50;
//         var age = 60;
//         console.log("inside nested codeblock: ",age, name);
//     }
// }

// console.log("outside code block: ",age, name);

// ============================================
// ========== 04 FUNCTIONS & METHODS ==========
// ============================================

//// 4.2 Function Declarations and Expressions ////

//// function delclaration
// greet(); //// no hoisting error

// function greet(){
//     console.log("Hello there..");
// }

// // greet();

//// fcuntion expression
// // speak(); //// hoisting error
// const speak = function(){
//     console.log("Hello world");
// };

// // speak();

//// 4.3 Arguments and parameters ////

// const a = Number(prompt("Enter number 1: "));
// const b = Number(prompt("Enter number 2: "));

// function add(a,b){
//     return a+b;
// }

// console.log(`add(${a}, ${b}) = ${add(a,b)}`);

// const speak = function(name){
//     console.log(`Good day ${name}`);
// };

// speak("Jewel");

//// default arguments
// const speak = function(name="John", period="moring"){
//     console.log(`Good ${period}, ${name}`);
// };

// speak();
// speak("Jewel");
// speak("Zahid", "Night");

//// 4.4 Returning Values ////

// const calcArea = function(radius){
//     let area = 3.14*radius**2;
//     return area;
// };

// // console.log(calcArea(5));
// const area = calcArea(10);
// console.log(area);

//// 4.5 Arrow Function ////

//// regular function
// const calcArea = function(radius){
//     return 3.14*radius**2;
// };

//// arrow function version-1
// const calcArea = (radius) => {
//     return 3.14*radius**2;
// };

//// arrow function version-2 shortest
// const calcArea = radius => 3.14*radius**2;

// const area = calcArea(10);
// console.log(area);

//// regular function version
// const greet = function(){
//     return "Hello World";
// }

// console.log(greet());

//// arrow function version
// const greet = () => "Hello World";

// console.log(greet());

//// regular fucntion version
// const bill = function (products, tax){
//     let total = 0;
//     for(let i=0;i<products.length;i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30],0.2));

//// arrow functon version
// const bill = (products, tax) => {
//     let total = 0;
//     for(let i=0;i<products.length;i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30],0.2));

//// 4.6 FUNCTIONS VS METHODS ////

//// functions
// const greet = () => "Hello";

// const resultOne = greet();
// console.log(resultOne);

// //// methods
// const name = "Zahid";
// // console.log(name.toUpperCase());
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//// 4.7 forEach method and callbacks ////

// //// callbacks and foreach
// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// // myFunc(function(value){
// //     // do something
// //     console.log(value);
// // });

// // converting to arrow function
// myFunc( value => console.log(value));

// let people = ["mario", "alex", "lee", "cooper", "caleb"];

//// foreach using callback
// people.forEach( function(person){
//     console.log(person);
// });

//// foreach using arrow function(e.e arrow callback)
// people.forEach( person => console.log(person));

/// with multiple parameters
// people.forEach( (person, index) => console.log(index, person));

//// defining callback function seperately
// const logPerson = (person, index) => console.log(`${index} - hello ${person}`);
// people.forEach(logPerson);

// //// 4.8 Callback functions in action ////
// const ul = document.querySelector('.people');

// const people = ["mario", "alex", "lee", "cooper", "caleb"];

// let html = ``;

// people.forEach( person => {
//     html += `<li>${person}</li>`
// });

// ul.innerHTML = html;
// ul.style.listStyleType = "none";
// ul.style.color = "brown";
// ul.style.fontSize = "30px";
// ul.style.fontFamily = "monospace";
// ul.style.fontWeight = "bold";

// console.log(ul);

// ============================================
// ========== 05 OBJECT LITERALS ==============
// ============================================

//// 5.2 creating an objects literal ////

// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: "Berlid",
//     blogs: ["What is OOP?", "What is JSON?"]
// };

// console.log(typeof user);

// console.log(user);
// console.log(user['name']);
// console.log(user['age']);
// console.log(user['email']);
// console.log(user['location']);
// console.log(user['blogs']);
// console.log(user['blogs'][0]);
// console.log(user['blogs'][1]);

// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.email);
// console.log(user.location);
// console.log(user.blogs);
// console.log(user.blogs[0]);
// console.log(user.blogs[1]);

// for(let key in user){
//     console.log(` ${key}: ${user[key]}`)
// }

//// 5.3  adding methods to objects ////

// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: "Berlid",
//     blogs: ["What is OOP?", "What is JSON?"],
//     login: function(){
//         console.log("user logged in");
//     },
//     logout: function(){
//         console.log("user logged out");
//     }
// };

// user.login(); // method
// user.logout(); // method

// // const name = "mario";
// // console.log(name.toUpperCase());

//// 5.4 'this' keyword ////
// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: "Berlid",
//     blogs: ["What is OOP?", "What is JSON?"],
//     login: function(){
//         console.log("user logged in");
//     },
//     logout: function(){
//         console.log("user logged out");
//     },
//     // logBlogs: function(){
//     //     // return `${this.blogs[0]}\n${this.blogs[1]}`;
//     //     // console.log(this); // context of user object
//     //     // console.log(this.blogs);
//     //     // console.log(`${this.blogs[0]}\n${this.blogs[1]}`);
//     //     this.blogs.forEach( blog => console.log(blog));
//     // },

//     // ======================================
//     //// demo - problem with arrow function
//     //// 'this' pointer lost i.e. context is lost
//     //// so how to save 'this' reference/pointer?
//     //// solution: _this = this or that = this ///
//     // =========================================

//     logBlogs: () => {
//         // console.log(this); // 'this' now refer to window object

//         this.blogs.forEach( blog => console.log(blog));
//     }
// };

// // console.log(user.logBlogs());
// user.logBlogs();
// // console.log(this); // global context - window object


// //// a cleaner version of previous example
// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: "Berlid",
//     blogs: ["What is OOP?", "What is JSON?"],
//     login(){
//         console.log("user logged in");
//     },
//     logout(){
//         console.log("user logged out");
//     },
//     logBlogs(){
//         this.blogs.forEach( blog => console.log(blog));
//     }
// };

// user.logBlogs();


//// 5.5 Objects in Array

//// storing objects inside an array
// const blogs = [
//     {title: "What is OOP?", likes: 30},
//     {title: "What is JSON?", likes: 10},
//     {title: "What is REGEX?", likes: 20}
// ];
// console.log(blogs);

// let user = {
//     name: "Mario",
//     age: 30,
//     email: "mario.super@email.com",
//     location: "Berlid",
//     blogs: [
//         {title: "What is OOP?", likes: 30},
//         {title: "What is JSON?", likes: 10},
//         {title: "What is REGEX?", likes: 20}
//     ],
//     login(){
//         console.log("user logged in");
//     },
//     logout(){
//         console.log("user logged out");
//     },
//     logBlogs(){
//         this.blogs.forEach( blog => {
//             console.log(`${blog.title} - ${blog.likes} likes`)
//         });
//     }
// };

// user.logBlogs()

// //// 5.6 Math Objects ////

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.exp(1))
// console.log(Math.exp(2))

// // const area = 7.7;
// const area = 7.2;
// // console.log(Math.round(area));
// // console.log(Math.ceil(area));
// // console.log(Math.floor(area));
// // console.log(Math.trunc(area));
// console.log(Math.pow(2,8));
// console.log(Math.sqrt(2));
// console.log(Math.cbrt(27));

// const random = Math.random();
// // console.log(random);

// console.log(Math.round(random));
// console.log(Math.round(random*100));

//// Primitive Types vs Reference Types ////

// //// primitive values
// let scoreOne = 50; // in stack
// let scoreTwo = scoreOne; //ins stack

// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);
// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

// //// reference values
// const userOne = {name: 'Zahid', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);
// userOne.age = 32;
// console.log(userOne, userTwo);


// ============================================
// ========= 06 DOCUMENT OBJECT MODEL =========
// ============================================

//// 6.2 DOM Explained ////

// console.log(window)
// console.log(document)
// console.log(document.location)
// console.log(document.URL)

//// 6.3 The Query Selector ////

// const para = document.querySelector("body > div:nth-child(2) > p:nth-child(2)");
// const para = document.querySelector("p");
// const para = document.querySelector(".error");
// const para = document.querySelector("div.error");

// console.log(para);

// const paras = document.querySelectorAll("p");
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

// paras.forEach( para => console.log(para) );

// const errors = document.querySelectorAll(".error");
// console.log(errors);

//// 6.4 Other Ways to Query the DOM ////

/// get an element by ID

// const title = document.getElementById("page-title");
// console.log(title);

/// get an element by class name

// const erros = document.getElementsByClassName("error");
// console.log(erros);
// console.log(erros[0]);
// console.log(erros[1]);

/// get an element by tag name

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

//// 6.5 Adding and Changing Page Content ////

// const para = document.querySelector('p');
// console.log(para);
// console.log(para.innerText);
// para.innerText = "Welcome to JS DOM";
// para.innerText += "Welcome to JS DOM";
// console.log(para.textContent)
// para.textContent = "Welcome to JS DOM";
// para.textContent += "Welcome to JS DOM";

// const paras = document.querySelectorAll('p');
// paras.forEach( para => console.log(para.innerText));
// paras.forEach( para => para.innerText += ' new text');

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = `<h2>this is new h2</h2>`;
// content.innerHTML += `<h2>this is new h2</h2>`;

// const people = ["Mario", "Ken", "Alex", "Lee", "Cooper"];

// people.forEach( person => content.innerHTML +=`<p>${person}</p>`);


//// 6.6 Getting and setting attributes ////

// const link = document.querySelector('a');

// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://www.youtube.com");
// link.innerText = "Youtube Homepage";

// const message = document.querySelector('p');
// console.log(message.getAttribute("class"));
// message.setAttribute("class","success");
// message.setAttribute("style", "color:crimson;");


//// 6.7 changing css styles ////

// const title = document.querySelector('h1');

// title.setAttribute("style", "font-size:60px;"); // overriding previous attribute value

// console.log(title);
// console.log(title.style);
// console.log(title.style.color);

// title.style.backgroundColor = "dodgerblue";
// title.style.margin = "20px";
// title.style.color = "white";
// title.style.fontSize = "60px";

// title.style.margin = "";
// title.style.margin = null;

//// 6.8 Adding and Removing Classes ////

// const content = document.querySelector('p');
// console.log(content.className);
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

//// DOM - Chanllenge

// const paras = document.querySelectorAll('p');
// console.log(paras);

//// using innerText - returns all visible text as string
// paras.forEach( para => {
//     if(para.innerText.includes('success')) {
//         para.classList.add('success');
//     }
//     else if(para.innerText.includes('error')){
//         para.classList.add('error');
//     }
// });

//// using textContent - return all text as string (visible or not)
// paras.forEach( para => {
//     if(para.textContent.includes('success')) {
//         para.classList.add('success');
//     }
//     else if(para.textContent.includes('error')){
//         para.classList.add('error');
//     }
// });

//// toggleClass
// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


//// 6.9 Parents, Children and Siblings ////

// const article = document.querySelector('article');

// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

// Array.from(article.children).forEach( child => child.classList.add('article-element') );

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.parentElement.parentElement.parentElement);

// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

//// chaining

// console.log(title.nextElementSibling.parentElement.children);


//// 6.10 Event Basics (click events) ////

// const button = document.querySelector('button');

// button.addEventListener('click', () => console.log("you clicked me"));

// const items = document.querySelectorAll('li');

// items.forEach( item => item.addEventListener("click", e => {
//     // console.log("item clicked");
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(item);
//     e.target.style.textDecoration = "line-through";
// }));


//// 6.11 Creatinga and Removing Elements ////

// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');

// button.addEventListener("click", () => {
//     // ul.innerHTML += `<li>something new</li>`;
//     const li = document.createElement("li");
//     li.textContent = "new task";
//     // ul.appendChild(li);
//     ul.append(li);
//     ul.prepend(li);
// });


// const items = document.querySelectorAll('li');

// items.forEach( item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = "line-through";
//         // e.target.style.backgroundColor = "rgba(123,146,169,0.2)";

//         e.target.remove();
//     });
// });


//// 6.12 Event Bubbling and Delegation ////

// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener("click", () => {

//     const li = document.createElement("li");
//     li.textContent = "new task";
//     ul.append(li);
//     // ul.prepend(li);
// });


// const items = document.querySelectorAll('li');

// items.forEach( item => {
//     item.addEventListener('click', e => {

//         console.log("event in li");
//         e.stopPropagation();
//         e.target.remove();
//         e.prevent
//     });
// });

// ul.addEventListener('click', e => {
//     // console.log("event in ul");
//     // console.log(e.target);
//     // e.target.remove();
//     if(e.target.tagName == "LI"){
//         e.target.remove();
//     }
// });

//// 6.12 More Dom Events ////

// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log("oi! my content is copyright!")
// });

// const box = document.querySelector('.box');
// box.addEventListener('mousemove', e => {
//     // console.log(e);
//     // console.log(`<${e.screenX}, ${e.screenY}>`);
//     // console.log(`<${e.pageX}, ${e.pageY}>`);
//     console.log(`<${e.offsetX}, ${e.offsetY}>`);
//     // e.target.textContent = `(${e.offsetX},${e.offsetY})`;
//     box.textContent = `(${e.offsetX}, ${e.offsetY})`;
// });


// adding event to entire document

// document.addEventListener("wheel", e => {
//     // console.log(e);
//     console.log(e.pageX, e.pageY);
// });
