/*
# CHALLENGE 2 - Random Number Magician
A magician on the street is about to start their magic trick. 
First, they are requesting a number (an Integer) from people on the street. 
They will then use that number, to chose that many random, whole numbers, between 1 and 100.
## 2.1 - Core Functionality
Create a method for the magician that will generate a list [array] of random, whole numbers from a given integer.
_E.g._ random_number_generator(5) should return [23,34,1,2,13] ... not the same numbers, but should return 5 of them
## 2.2 - Guaranteed Randomness
Can you ensure these numbers will be unique?
*/

alert("Welcome to the Marvellous Magician Mooshu!");
var userNum = prompt("Please give me a whole number to work my magic on: ");

function randNumGenerator(userNum) {
    randomNum = [];
    while (userNum > 0){
        randomNum.push(Math.round(Math.random()*100));
        userNum--;
    }
    console.log(randomNum);
}

randNumGenerator(userNum);

//-------------------------------------------------------------------------
//UNIQUE

alert("Welcome to the Marvellous Magician Mooshu!");
var userNum = prompt("Please give me a whole number to work my magic on: ");

function randNumGenerator(userNum) {
    randomNum = [];
    while (userNum > 0){
        currentRandNum = Math.round(Math.random()*100)
        if (randomNum.includes(currentRandNum)){

        } else {
            randomNum.push(currentRandNum);
            userNum--;
        }   
    }
    console.log(randomNum);
}

randNumGenerator(userNum);