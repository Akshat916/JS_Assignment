let user = {
    name : "Akshat",
    sayName(){
        return this.name;
    }
}

let boundSayName = user.sayName.bind(user); //binding the sayName method 
console.log(boundSayName());