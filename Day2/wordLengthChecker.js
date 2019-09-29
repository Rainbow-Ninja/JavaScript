// Write a method that will take a string as input, and return the length of the string. 
// Alter the method, so if a word has less than 5 characters, the method returns "Too short", otherwise it should return the count.

function lengthCheck(word) {
    if(word.length < 5){
        return "Word is too short";
    } else {
        return word.length;
    }
}

console.log(lengthCheck("hello"));
console.log(lengthCheck("hello world"));
console.log(lengthCheck(""));
console.log(lengthCheck(" "));
console.log(lengthCheck("I like chips"));