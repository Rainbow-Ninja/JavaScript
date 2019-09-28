// Challenge 2:
// Assign an empty array to a students variable.
// Use the push method to add a student called Sarah
// Use prompt to ask the user for their name, add it to the array.
// Use a loop to ask the user for 3 names, add them all to the array.
// Loop through the array and use the alert method to read each user back to the user.
// Challenge 3:
// Store hashes in your students array
// Each student should have a name and age property.
// Make sure you can loop through each student & display their name and age in the terminal.

var students = [];
students.push({name: "Sarah", age: 16});
var name = prompt("What is your name?")
var age = prompt("What is your age?")
students.push({name, age});
for(let i = 0; i < 3; i++){
    let name = prompt("Give me a name: ");
    let age = prompt("And age: ")
    students.push({name, age});
}

for(let i = 0; i < students.length; i ++){
    alert(`${students[i].name} is ${students[i].age}`);
}