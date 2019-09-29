// Write a method that will take a string, and will return a new string with the same letters, in reverse order.

function wordReverse(word){
    let wordArr = [];
    for(let i = 0; i < word.length; i++){
        wordArr.push(word.charAt(word.length - 1 - i));
    }
    return wordArr.join("");
}

console.log(wordReverse("hello"));
console.log(wordReverse("My name is Jo"));
console.log(wordReverse("pizza is great!"));