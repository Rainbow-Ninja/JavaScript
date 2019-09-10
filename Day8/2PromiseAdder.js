function adder(x, y){
    let answer = x + y;

    return new Promise((resolve, reject) => {
        if(isNaN(answer)){
            reject("please input numbers");
        }
        resolve(answer);
    });
}

// //calling the promise function
// adder(4, 5)
//     .then((answer) => {
//         console.log(answer);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//calling the promise function
adder(4, "something")
    .then(answer => console.log(answer))
    .catch(error => console.log(error));


console.log("Something else is happening");
