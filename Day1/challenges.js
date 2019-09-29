// // Challenge 1:
// // Create a new variable called user, set the value to: tom
// // Write an if statement: if the user's name is tom, say 'Hello Tom'
// // Add an else condition: say 'Hello someone other than Tom'
// // Add a new variable called age, set the value to: 18
// // If the user is 18, say 'welcome to the casino!'
// // Research 'prompt'. Use it in your code to ask the user for their age.
// // If the user is less than 18 years old, use the alert method to deny entry.

// var user = "tom";
// // var age = 18;

// if (user == "tom"){
//     console.log("Hello " + user)
// } else {
//     console.log("Hello someone other than " + user)
// }

// var age = prompt("What is your age?")

// if(age == 18){
//     console.log("Welcome to the casino!")
// } else {
//     console.log("Sorry you are too young")
// }

//---------------------------------------------------
let a = false || 1;
let b = 2 || 4;
let c = false && 2;
let d = 6 && 8;
let e = 2 && false;
let f = true && 7;
let g = 71 && true;
let h = 1 || false;
let i = 7 || 9;
let j = true || false;
let k = false || true;

console.log(a, b, c, d, e, f, g, h, i, j, k);