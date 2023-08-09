let n = Math.round(Math.random() * 10) - 5;
if(n === 0){
    console.log(`Number(${n}) is Zero`);
}
else if(n < 0){
    console.log(`Number(${n}) is Negative`);
}
else{
    console.log(`Number(${n}) is Positive`);
}