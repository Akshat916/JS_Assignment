function sumArray(arr){
    let sum = 0;
    for(var i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(`The Sum of array[${arr}] is : ${sumArray(arr)}`);