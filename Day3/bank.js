// * A user's initial balance is 0.0.
// * Display the user's balance.
// * Ask the user what they would like to do.
// * If they type "balance", display their balance.
// * If the user types anything other than "balance", display the message "Invalid selection!"

function bank(){

}

let balance = 0;
let whatDo = prompt("What would you like to do? Type 'balance' to check you balance")
if(whatDo.toLowerCase == "balance"){
    alert("Balance!");
}