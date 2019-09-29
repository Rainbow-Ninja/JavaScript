// Write a function that prompts a user any kind of input (i.e. favourite colour, what they did yesterday, whatever you want to ask them!).
// Store the user input in an array.
// Print out all entries in the array.
// Loop back and prompt the user for the next journal entry.
// Continue the process.
var journalEntry = [];
var journalInput = null;

while(journalInput != "q"){
    var journalArr = ["What is your fav colour?", "How was your day today?", "What is your fav dessert?", "What did you get up to yesterday?", "How many pets do you have?", "What are the names of your pets?", "What was your fav subject at school?", "Who was your fav school teacher?", "What is one of your fav hobbies?"];

    journalInput = prompt(`${journalArr[Math.floor(Math.random()*journalArr.length)]} \nPress 'q' to exit`);

    if(journalInput == "q"){
        break;
    } else {
        journalEntry.push(journalInput);
    }
}

console.log(journalEntry);