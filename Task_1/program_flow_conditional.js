let number = Math.round(Math.random() * 10) - 5;
if(number === 0){
    console.log(`Number(${number}) is Zero`);
}
else if(number < 0){
    console.log(`Number(${number}) is Negative`);
}
else{
    console.log(`Number(${number}) is Positive`);
}