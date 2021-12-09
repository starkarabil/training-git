// Let keyword in order to declare variables properly

// for (let index = 0; index < 10; index++) {
//     // const element = array[index];
//     console.log(index);
// }

// console.log("value out of the loop is: " + index);

// With const keyword no reassingment is allowed
const brand = "Amigoscode";
const brandObject = {};
brandObject["brand"] = brand;
delete brandObject.brand; // removing the property: deleting the content of the object but it stays as object
// brand = 10;
// brand = function() {
//     return "Hello"
// }
console.log(brand);
console.log(brandObject);


// let keyword vs. Const keyword
// every single variable starts with const
// if you need the assign something you use let keyword