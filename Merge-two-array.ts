//Question: Combine two arrays using typescript?


// Example 1 using concat method


const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.concat(arr2);
console.log(arr3);

// Example 2 using spread operator

const arr4 = [1,2,3];
const arr5 = [4,5,6];

const arr6 = [...arr4, ...arr5];
console.log(arr6);

//Question 2:  Merge two array and remove duplicates using Javascript?
function merArrNoDup(arr1, arr2){
		let merged = [...new Set([...arr1, ...arr2])];
		return merged;

}

const arr1 = [1,2,3,5,6];
const arr2 = [4,5,6,3,2];

let mergedArr = merArrNoDup(arr1, arr2);
console.log(mergedArr);