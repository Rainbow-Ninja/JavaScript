// Loops:  for, while, do while, for of, for in

let count = 3;

while(count > 0){
    console.log(count);
    count--;
}

do{
    console.log(count);
    count--;
}while(count > 0);

// do{
//     var color = prompt("What is your favourite colour?");
//     console.log(`Your favourite colour is ${color}`);
// }while(color != "blue");

console.log(name); //will be undefined but not break due to hoisting
var name = "Shun"; 
console.log(name); //will be Shun

for(i = 0; i <= 4; i++){
    console.log(i);
}

var names = ["Hayden", "Aiden", "Phillip"];
for (let name of names) {
    console.log(name);
}

var gentech = {
    count: 6,
    teacher: "Alex",
    subject: "JS"
}

for(let key in gentech){
    console.log(key);
    console.log(gentech[key]);
}