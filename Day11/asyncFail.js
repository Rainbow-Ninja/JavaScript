const adder = async(num1, num2) =>{

    const addTwoNums = new Promise((resolve, reject) => {

        if(isNaN(num1 || isNaN(num2))){
            reject("Enter two numbers");
        } else {
            resolve (num1 + num2);
        }
    })

    let answer1 = await addTwoNums(10, 20);
    let answer2 = await addTwoNums(answer1, 3);

    return answer2;
}

adder()
    .then(ans => console.log(ans))
    .catch(err => console.log(err));

//addTwoNums is not a function so we cant pass arguements, so this is one of the cases you'd use a promise chain instead