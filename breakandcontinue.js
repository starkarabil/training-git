// Break and Continue (BaC)
// BaC can only be used within loops

var names = [
    "Alex",
    "Jottie", 
    "Joe", 
    "Anika"
];

for (let index = 0; index < 10; index++) {
    //console.log(index);
    if (index < 5) {
        continue;
    }
    console.log(index);
}

