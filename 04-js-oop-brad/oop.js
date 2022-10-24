// const s1 = "Hello World";
// console.log(typeof s1);

// const s2 = new String("Hello World");
// console.log(typeof s2);

// console.log(window);
// window.alert(404);
// alert(404);

// console.log(navigator.appVersion);

// //// OBEJECT LITERALS

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: 2013,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: 2016,
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };


// console.log(book1);
// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.year);
// console.log(book1.getSummary());

// console.log(book2);
// console.log(book2.title);
// console.log(book2.author);
// console.log(book2.year);
// console.log(book2.getSummary());

// console.log(Object.keys(book2));
// console.log(Object.values(book2));


// //// CONSTRUCTORS

// function Book() {
//     console.log("Book instantiated..");
    
// }

// //// instantiate an object
// const book1 = new Book();
// const book2 = new Book();

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary =  function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// //// instantiate an object
// const book1 = new Book("Book One","John Doe", 2013);
// const book2 = new Book("Book Two","Jane Doe", 2016);

// console.log(book1);
// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.year);
// console.log(book1.getSummary());
// // console.log(book1.keys); // undefined
// // console.log(book1.values); // undefined

// console.log(book2);
// console.log(book2.title);
// console.log(book2.author);
// console.log(book2.year);
// console.log(book2.getSummary());


// //// PROTOTYPES

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// //// getSummary prototype
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// //// getAge prototype
// Book.prototype.getAge = function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }

// //// revise / change year
// Book.prototype.revise = function(newYear) {
//     this.year = newYear;
//     this.revisied = true;
// }

// //// instantiate an object
// const book1 = new Book("Book One","John Doe", 2013);
// const book2 = new Book("Book Two","Jane Doe", 2016);

// console.log(book1);
// console.log(book1.title);
// console.log(book1.author);
// console.log(book1.year);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// book1.revise(2019);
// console.log(book1);


// //// INHERITANCE

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }
// //// getSummary prototype
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// }

// //// magazie constructor
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }
// //// inhert prototype
// Magazine.prototype = Object.create(Book.prototype);
// //// instantiate magazine object
// const maga1 = new Magazine("Mag One", "John Doe", "2018", "Jan");
// console.log(maga1);
// console.log(maga1.getSummary());

// //// use magazine's own constructor
// Magazine.prototype.constructor = Magazine;

///// OBJECT CREATION
///// object of protos

// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// };

// //// create object - process 1
// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "John Doe";
// book1.year = 2013;

// //// create object - process 2
// const book1 = Object.create(bookProtos, {
//     title: {value: "Book One"},
//     author: {value: "John Doe"},
//     year: {value: 2013}
// });
// console.log(book1);

//// END OF ES5 OOP

// //// ES6 OOP - Classes

// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
//     revise(newYear) {
//         this.year = newYear;
//         this.revisied = true;
//     }

//     static topBookStore(){
//         return "Barnes and Noble";
//     }
// }

// //// instantiation of object
// const book1 = new Book("Book One","John Doe",2013);

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// book1.revise(2017);
// console.log("\n");
// console.log(book1.getSummary());
// console.log(book1.getAge());

// // console.log(book1.topBookStore()); // error
// console.log(Book.topBookStore());

// //// subclasses anmd summary
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// //// Magazine subclass
// class Magazine extends Book {
//     constructor(title, author, year, month) {
//         super(title,author, year);
//         this.month = month;
//     }
// }

// //// instantiate magazine
// const mag1 = new Magazine("Mag One","John Doe",2020,"May");
// console.log(mag1);

// console.log(mag1.getSummary());

// //// subclasses vs inheritance