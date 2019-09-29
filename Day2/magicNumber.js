// 4.1 - Magic Number Algorithm 
// Write a function that prompts the user to enter a 4 digit number, made up of at least 2 different numbers. 
// Rearrange the string of digits to form the largest and smallest 4 digit numbers possible.
// Take these numbers, and subtract the smaller number from the larger.
// *E.g.* If the user entered 8082
// 8820 - 0288 = 8532
// 8532 - 2358 = 6174
// 7641 - 1467 = 6174
// It hits 6174, then stops.
var count = 0;

function findSmallest(num){
    var numString = num.toString();
    var numArr = numString.split("");
    numArr.sort();
    return numArr.join("");
}

function findLargest(num){
    var largestNum = [];
    var numString = num.toString();
    var numArr = numString.split("");
    for(let i = 0; i < numArr.length; i++){
        largestNum.push(numArr[numArr.length - 1 - i]);
    }
    return largestNum.join("");
}

function magicNumber(number) {
    count++;
    var smallest = findSmallest(number);
    var largest = findLargest(smallest);
    var result = largest - smallest;
    console.log(result);
    if(result != 6174){
        magicNumber(result);
    } else {
        console.log(`It took ${count} iterations to get to ${result}`);
    }
}

magicNumber("4157");