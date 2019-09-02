// CHALLENGE 3: Loop Racer
// Write a set of functions that use different types of loops to print numbers from 1 to a specific number (eg. 1000).
// ​
// Your functions might look like this:
// ​
// // START CODE EXAMPLE
// function forLoopRacer (maxCountingNumber) {
//     var startTime = Date.now();
// ​
//     // your loop stuff goes here 
//     for (var i = 0; i < maxCountingNumber; i++){
//         console.log(i);
//     }
// ​
//     var finishTime = Date.now();
//     var functionDuration = (finishTime - startTime) / 1000; // convert from milliseconds to seconds with "/1000"
//     console.log(`The for loop function took ${functionDuration} seconds to run.`);
// }
// forLoopRacer(1000);
// ​
// // END CODE EXAMPLE
// ​
// Make sure you write functions that cover these types of loops:
//     - while
//     - do while
//     - for in
//     - for of
// And yes, your functions must be able to count up to any number. They must use a parameter!

var comparativeArray = ["For: ", null, "While: ", null, "Do While: ", null, "For Each: ", null]; 

function forLoopRacer (countTo) {
    var startTime = Date.now();

    for (var i = 0; i <= countTo; i++){
        console.log(i);
    }

    var finishTime = Date.now();
    var timeTaken = (finishTime - startTime) / 1000;
    console.log(`The for loop function took ${timeTaken} seconds to run.`);
    comparativeArray[1] = timeTaken;
}

forLoopRacer(1000);

//------------------------------------------------------------------------------

function whileLoopRacer (countTo) {
    var startTime = Date.now();
    count = 0;

    while (count <= countTo){
        console.log(count);
        count++;
    }

    var finishTime = Date.now();
    var timeTaken = (finishTime - startTime) / 1000;
    console.log(`The while loop function took ${timeTaken} seconds to run.`);
    comparativeArray[3] = timeTaken;
}

whileLoopRacer(1000);

//------------------------------------------------------------------------------------

function doWhileLoopRacer (countTo) {
    var startTime = Date.now();
    count = 0;

    do {
        console.log(count);
        count++;
    } while (count <= countTo)

    var finishTime = Date.now();
    var timeTaken = (finishTime - startTime) / 1000;
    console.log(`The do-while loop function took ${timeTaken} seconds to run.`);
    comparativeArray[5] = timeTaken;
}

doWhileLoopRacer(1000);

//---------------------------------------------------------------------------

function forEachLoopRacer (element) {
    console.log(element);
}

function populateArray (countTo) {
    var numArray = [];
    for (var i = 0; i <= countTo; i++){
        numArray.push(i);
    }
    return numArray;
}

var myArray = populateArray(1000);
var startTime = Date.now();
myArray.forEach(forEachLoopRacer)
var finishTime = Date.now();
var timeTaken = (finishTime - startTime) / 1000;
console.log(`The for loop function took ${timeTaken} seconds to run.`);
comparativeArray[7] = timeTaken;

//----------------------------------------------------------------------------

console.log(comparativeArray);