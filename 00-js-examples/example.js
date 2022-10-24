// 01 for..in loop for iterating object
const person = {
    name: 'Mario',
    age: 32,
    email: 'mario.super@mail.com'
};

// using for..in loop
for (let key in person ){
    console.log(`${key}: ${person[key]}`);
}
console.log("\n")

// 02 for..in loop for iterating an array
const arr = [4,9,2,3,5,7,8,1,6,0];
for(let i in arr){
    console.log(`${i}: ${arr[i]}`);
}

// for..of loop for iterating collection alike array
const fibs = [0,1,1,2,3,5,8,13,21,34,55,89];
for(let num in fibs){
    console.log(num);
}