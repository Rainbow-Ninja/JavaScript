// This particular journal can only hold a maximum of 5 entries, but can loop forever!

var journalEntry = [];
var journalInput = null;

while(journalInput != "q"){
    var journalArr = ["What is your fav colour?", "How was your day today?", "What is your fav dessert?", "What did you get up to yesterday?", "How many pets do you have?", "What are the names of your pets?", "What was your fav subject at school?", "Who was your fav school teacher?", "What is one of your fav hobbies?"];

    journalInput = prompt(`${journalArr[Math.floor(Math.random()*journalArr.length)]} \nPress 'q' to exit`);

    if(journalInput == "q"){
        break;
    } else if (journalEntry.length == 5) {
        journalEntry.shift();
        journalEntry.push(journalInput);
    } else {
        journalEntry.push(journalInput);
    }
}

console.log(journalEntry);