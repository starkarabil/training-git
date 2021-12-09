// Loops
var names = [
    "Alex",
    "Jottie", 
    "Joe", 
    "Anika",
    "Desire"
];

    //for i

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Other Types of Loops
    // For of
console.log();

for (const anyValueHere of names) {
    console.log(anyValueHere);
}
console.log();

    // For each
names.forEach(function(einfachValueEingeben){
    console.log(einfachValueEingeben);
})
