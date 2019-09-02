/*
CHALLENGE 1: Function Fix-Ups
    Fix up the code provided below to make it work.
    Then, identify the 3 different function types being used here.
    They could be any of these: 
    - Regular function, 
    - Returning function, 
    - Anonymous function, 
    - IIFE or self-invoking function, 
    - Arrow function.
​
    
    Function 1 is a: regular function
    Function 1 was fixed by: doing nothing
    Function 2 is a: IIFE
    Function 2 was fixed by: need the word function(?) also fat arrow is => not -> and semi colon should be at the end of the console.log and the call
    Function 3 is a: regualr function
    Function 3 was fixed by: should say function, not func
*/
// Function 1:
var funky = function() {
    console.log('I am funky');
};
funky();
​
// Function 2:
(() -> {
    console.log("Another freaky function type is here!")
})()
​
// Function 3:
console.log(myFunction(5));
​
func myFunction(y) {
  return y * y;
}