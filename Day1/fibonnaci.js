// CHALLENGE 7 - The Nth Fibonacci Number
// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each subsequent number is the sum of the previous two. I.e. 0,1,1,2,3,5,8...
// Write a method that will return the nth number of the sequence. The syntax is easy, getting your heard around the algorithm is the challenge. It might be worth writing this in pseudocode before writing the method.

var fibArr = [0, 1];

function fibonacci(num){

    for(let i = 0; i < num; i++){
        fibArr.push(fibArr[i] + fibArr[i+1]);
        console.log(fibArr[i]);
    }
    return fibArr[num-1];
}

var value = fibonacci(1);
console.log(value);