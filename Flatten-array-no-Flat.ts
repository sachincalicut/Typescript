let arr=[1,2,3,[4,5,6],[7,[8],[9,[10,[11]]]]]

function flattenArr(arr, result=[]){
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        if(Array.isArray(value)){
            flattenArr(value, result)
        }else{
            result.push(value)
        }
    }
    return result;
}

flattenArr(arr);

console.log(flattenArr(arr))