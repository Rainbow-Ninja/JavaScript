// Challenge 1:
// Create a new variable called user, set the value to: tom
// Write an if statement: if the user's name is tom, say 'Hello Tom'
// Add an else condition: say 'Hello someone other than Tom'
// Add a new variable called age, set the value to: 18
// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'. Use it in your code to ask the user for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

var user = "tom";
// var age = 18;

if (user == "tom"){
    console.log("Hello " + user)
} else {
    console.log("Hello someone other than " + user)
}

var age = prompt("What is your age?")

if(age == 18){
    console.log("Welcome to the casino!")
} else {
    console.log("Sorry you are too young")
}

