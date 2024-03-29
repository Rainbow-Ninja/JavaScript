function adder(x, y){
    let answer = x + y;

    return new Promise((resolve, reject) => {
        if(isNaN(answer)){
            reject("please input numbers");
        }
        resolve(answer);
    });
}

adder(6, 7)
    .then(answer1 => adder(answer1, 5))
    .then(answer2 => adder(answer2, 6))
    .then(answer3 => adder(answer3, "hey"))
    .then(answer4 => console.log(answer4))
    .catch(error => console.log(error));