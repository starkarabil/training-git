
var person = {
    firstName: "Jottie",
    age: 21,
    isFemale:true,
    balance:100.32,
    dob: new Date(200, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW99"

    }

};

console.log(person.firstName);
console.log(person.age);
console.log(person.balance)
console.log(person.address.city);
//console.log(Object.values(person));
//console.log(Object.keys(person));
console.log(JSON.stringify(person))