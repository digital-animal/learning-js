//// forEach
//// filter
//// map
//// sort
//// reduce

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1988, end: 2010},
    {name: "Company Five", category: "Technology", start: 1987, end: 2014},
    {name: "Company Six", category: "Finance", start: 1989, end: 2004},
    {name: "Company Seven", category: "Auto", start: 1981, end: 2010},
    {name: "Company Eight", category: "Technology", start: 1986, end: 1996},
    {name: "Company Nine", category: "Technology", start: 2011, end: 2016},
    {name: "Company Ten", category: "Retail", start: 1981, end: 1989}  
];

const ages = [44,19,22,32,54,17,18,9,21,36,30,19];

// //// for
// for(let i=0;i<companies.length;i++){
//     console.log(`"${companies[i].name}", ${companies[i].category}, from - ${companies[i].start} to ${companies[i].end}`);  
// }

// for(let i=0;i<ages.length;i++){
//     console.log(ages[i]);
// }

// //// for of
// for(age of ages){
//     console.log(age);
// }

// //// forEach
// companies.forEach( element => {
//     // console.log(`"${element.name}", ${element.category}, from - ${element.start} to ${element.end}`);
//     console.log(element);    
// });

// ages.forEach( age => console.log(age));


//// filter
//// get 21 and older
//// using for loop
// let canDrink = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// //// using filter
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
// console.log(canDrink);

// //// using filter + arrow function
// const canDrink = ages.filter( age => age >= 21 );
// console.log(canDrink);

// //// filter retail 
// //// using filter + callback function
// const retailCompanies = companies.filter(function(company) {
//     if(company.category == "Retail"){
//         return true;
//     } 
// });
// console.log(retailCompanies);

// //// using filter + callback + arrow
// const retailCompanies = companies.filter( company => company.category === "Retail");
// console.log(retailCompanies);

// //// get companies statted at 80s
// const eightiesCompanies = companies.filter( company => (company.start >=1980 && company.start<1990));
// console.log(eightiesCompanies);

// //// companies lasted at least 10 years
// const lastedTenYears = companies.filter(company => (company.end - company.start) >= 10);
// console.log(lastedTenYears);

//// map

//// create array of company names using map + callback

// const companyNames = companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// //// create array of company names using map + callback + arrow function
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

//// template string
// const testMap = companies.map(function (company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// //// template string + array
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);


// //// square of ages
// const agesSquare = ages.map( age => Math.sqrt(age));
// console.log(agesSquare);
// //// ages times two
// const agesTimesTwo = ages.map( age =>age*2 );
// console.log(agesTimesTwo);

// //// combining last two examples
// const agesSquareTimesTwo = ages.map( age => Math.sqrt(age)).map( age => age*2 );
// console.log(agesSquareTimesTwo);

// //// modified
// //// combining last two examples
// const ageMap = ages
//     .map( age => Math.sqrt(age))
//     .map( age => age*2 );
// console.log(ageMap);

///// sort
// //// sort companies by start years
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// // //// using arrow + callback + ternary
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// //// sort ages
// const sortedAges = ages.sort( );
// console.log(sortedAges);

// //// sort ages improved
// const sortedAges = ages.sort( (a,b) => (a > b ? 1 : -1 ));
// console.log(sortedAges);

// //// process - 3
// //// sort ages improved
// const sortedAges = ages.sort( (a,b) => a-b);
// // const sortedAges = ages.sort( (a,b) => b-a);
// console.log(sortedAges);

//// reduce
//// sum of ages using for
// let ageSum = 0;
// for(let i=0;i<ages.length;i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

// //// sum of ages using forEach
// let ageSum = 0;
// ages.forEach(age => ageSum += age);
// console.log(ageSum);

// //// sum of ages using reduce
// const ageSum = ages.reduce( function(total, age){
//    return total + age;
// }, 0);
// console.log(ageSum);

// //// sum of ages using reduce + arrow
// const ageSum = ages.reduce( (total, age) => total + age, 0);
// console.log(ageSum);

// //// total years for all companies i.e adding up ranges
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0); 

// console.log(totalYears);

// //// get total years for all using reduce + arrow + callback
// const totalYears = companies.reduce((total, company) => 
//     total + (company.end - company.start), 0); 
// console.log(totalYears);

// //// combining map + filter + sort + reduce 
// const combined = ages
//     .map( age => age*2)
//     .filter( age => age >= 40)
//     .sort( (a,b) => a - b)
//     .reduce( (a,b) => a+b ,0);


// console.log(combined);