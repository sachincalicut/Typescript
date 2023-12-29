// reduce()= Reduce the elements of an array to a single value

//Question: Find minimum and maximum grades student will carried ?

const grades = [45, 43, 37, 76, 54, 65, 88, 95, 84, 73];

const minimum = grades.reduce(getMin);
const maximum = grades.reduce(getMax); 


console.log("Min grade:" + minimum);
console.log("Max grade:" + maximum);


function getMin(accumulator, element){
	return Math.min(accumulator, element);

}

function getMax(accumulator, element){
	return Math.max(accumulator, element);

}