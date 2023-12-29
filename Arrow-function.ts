// Arrow Key Function = Arrow function concise way to write function expression good 
// for simple function that you use only one parameters for some code


const numbers = [1,2,3,4,5,6,7,8,9];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));

// find Even Number
const evenNumbr = numbers.filter((element) => element % 2 === 0);
// find Odd Number 
const oddNumbr = numbers.filter((element) => element % 2 !== 0);

// console output Even Numbers
console.log(evenNumbr);
// console output odd Numbers
console.log(oddNumbr);