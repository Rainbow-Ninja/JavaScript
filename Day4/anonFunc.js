
greet();

function greet(){
    console.log("Welcome");
}

//function experssion or anonymous function
let anonFunc = function() {
    console.log("I am anonymous");
}

//calling the anon func
anonFunc();

// let age = prompt("Enter your age")
// if (age > 18){
//     var welcome = function() {
//         console.log("Hello you are an adult, do whatever you want");
//     } 
// } else {
//     var welcome = function() {
//         console.log("Hello you are too young for this");
//     } 
// }

// welcome();

(function(){
    console.log("Hello World");
}());

//IIFE with returned value and args
let product = (function(num1, num1){
    return num1*num2;
}(12, 10));

(() => {
    console.log("Hey");
})();

//normal function
function welcome(){
    console.log("hi");
}
welcome();

//using fat arrow
let greet = () => {
    console.log("hey");
}

let greet = (name) => {
    console.log(`hello ${name}`);
}

greet("Ewe-lin");

let greet = name => console.log(`hello ${name}`);
greet("Ewe-lin");