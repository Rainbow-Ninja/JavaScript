// callback functions are the functions that are passed to another function and gets executed in the call function

function adder(x, y, callback){
    let answer = x + y;
    if(callback){
        return callback(answer);
    } else {
        return answer;
    }
}

function saySomething(input){
    console.log(`answer is from the callback function ${input}`);
}

adder(5, 7, saySomething); //dont pass the () cause we arent executing it right away!
console.log(adder(6, 3));