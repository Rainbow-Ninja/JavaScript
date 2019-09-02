// CHALLENGE 2: Pig Latin Converter
// ​
// What is pig latin? Pig latin takes the first letter of every word, moves it to the end of the word and adding ‘ay’. 
// For example, "the quick brown fox" becomes "hetay uickqay rownbay oxfay".
// ​
// ​
// Write a function that translates provided text to Pig Latin.
// ​
// _E.g._ pig_latin("Sydney or Melbourne or Perth are possible destinations") should return "ydneySay roay elbourneMay roay erthPay reaay ossiblepay estinationsday"
// ​
// _E.g._ pig_latin("A") should return "Aay"
// ​
// _E.g._ pig_latin("") should return "ay"

function pigLatinConverter(string) {
    if(string){
        let splitArray = string.split(" ");
        var pigArr = [];
        for(let word of splitArray){
            let wordArr = word.split("");
            let firstLetter = wordArr.shift();
            let newWord = wordArr.join('') + firstLetter + "ay";
            pigArr.push(newWord);
        }
        return pigArr.join(' ');
    } else {
        return "Ay";
    }
}

console.log(pigLatinConverter("How are you today"));
console.log(pigLatinConverter("A"));
console.log(pigLatinConverter(""));