//// using the test() method ////

// let sentence = "The dog chased the cat."
// let regex = /the/;

// let myString = "Hello, World";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);


//// match literal string ////

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// // let waldoRegex = /Waldo/;
// let waldoRegex = /waldo/;
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

//// match a literal string with different possibilities ////

// let perString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(perString);
// console.log(result);

//// ignore case while matching ////

// let myString = "freeCodeCamp";
// // let fccRegex = /freecodecamp/; 
// let fccRegex = /freecodecamp/i; 
// let result = fccRegex.test(myString);
// console.log(result);

//// extract mathces
// let extractStr = "Extract the word 'coding from the string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

//// find more than the first match ////
// let testStr = "Repeat, Repeat, Repeat";
// // let ourRegex = /Repeat/;
// let ourRegex = /Repeat/g;
// result = testStr.match(ourRegex);
// console.log(result);

// let twinkleStar = "Twinkle, twinkle, little star";
// // let starRegex = /twinkle/;
// let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex);
// console.log(result);

//// match anything with wildcard period ////