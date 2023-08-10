function printPersonDetails(obj){
    let name = obj['name'];
    let age = obj['age'];
    let email = obj['email'];
    return `Name : ${name} \nAge : ${age} \nEmail : ${email}`;
}

let person = {name: "Akshat", age: 21, email: "akshat@gmail.com"};
console.log(printPersonDetails(person));