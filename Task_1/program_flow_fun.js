// Creating a function name as calculateArea
function calculateArea(length, width){
    return length*width;
}
let l = Math.floor(Math.random() * 1000); // genrating random numbers
let w = Math.floor(Math.random() * 1000); // genrating random numbers

console.log(`The area of rectangle(${l},${w}) is : ${calculateArea(l, w)}`); // Calling and displying result