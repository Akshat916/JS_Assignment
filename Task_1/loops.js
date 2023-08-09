// Even number from 1 to 20

for(let i = 1; i <=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Calculating Factorial

let n = Math.floor(Math.random() * 10); // genrating random numbers

// creating a function
function factorialize(num) {
    // checking condition
  if (num === 0 || num === 1){
    return console.log(`Factorial of ${n} is 1`);
  }
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return console.log(`Factorial of ${n} is ${num}`);
}
factorialize(n);