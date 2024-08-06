const a= [1,1,2,3,4,5,5];
// Function to remove duplicates from an array
function removeDuplicates(arr: any[]): any[] {
    return [...new Set(arr)];

  
}
// Test Output
const uniqueArray = removeDuplicates(testArray);
console.log(`Original Array: ${testArray}`);
console.log(`Array without duplicates: ${uniqueArray}`);
