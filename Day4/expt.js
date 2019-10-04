let arr = ["Roh", "Matt", "Jo"];
for(let name of arr){
    console.log(name);
}

arr.forEach(function(value, index){
    console.log(`value ${value}, index ${index}`);
    console.log("Howdy");
})

let person = {
    name: "Jo",
    hobbies: ["hapkido", "art", "coding"],
    suburb: "Bonnet Bay",
    pets: ["Taco", "Nacho"]
}

for(let key in person){
    console.log(key);
    console.log(person[key]);
}

let myFunc = function(input){
    console.log(input);
}

myFunc("Heyo, I'm Jo");

let adder = (x, y) => {
    return x + y;
}

console.log(adder(1, 2));

function myArgs() {
    console.log(arguments);
}

myArgs(1, 2, 3, 4);