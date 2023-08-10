let car = {
    brand : "Porsche",
    modal : "Porsche Macan",
    start : function(){
        return `Car Brand is : ${this.brand} and Model is : ${this.modal}`;
    }
}
console.log(car.start());