// * A user's initial balance is 0.0.
// * Display the user's balance.
// * Ask the user what they would like to do.
// * If they type "balance", display their balance.
// * If the user types anything other than "balance", display the message "Invalid selection!"
// * Add "deposit" as a program option.
// * If the user types "deposit", ask the user for the deposit amount and then add this to the user's current balance.
// * Add "withdraw" as a program option.
// * If the user types "withdraw", ask the user for the withdrawal amount and then deduct this from the user's current balance.
// * Enclose the program statements in a loop to allow the program to repeat until the user chooses to exit the program.

function bank(){

}

let balance = 10;
var whatDo = null;

while(whatDo != 'exit'){
    whatDo = prompt("What would you like to do? \nType 'balance' to check you balance \nType 'deposit' to deposit money \nType 'withdraw' to withdraw money \nType 'exit' to exit")
    switch(whatDo.toLowerCase()){
        case "balance":
            alert(`Your balance is $${balance.toFixed(2)}`);
            break;
        case "deposit":
            let depositAmount = prompt("How much would you like to deposit?")
            balance += parseInt(depositAmount);
            break;
        case "withdraw":
            let withdrawAmount = prompt(`You currently have $${balance.toFixed(2)} in your bank. \nHow much would you like to withdraw?`);
            if(parseFloat(withdrawAmount) > balance){
                alert("You don't have that amount to withdraw")
            } else {
                balance -= parseFloat(withdrawAmount);
                alert(`Your balance is now $${balance.toFixed(2)}`)
            }
            break;
        case "exit":
            alert("Have a good day");
            break;
        default:
            alert("Invalid Selection");
            break;
    }
}