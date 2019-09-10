// let ourPromise = new Promise(callbackFunction)

//resolve -> process was successful
//reject -> something went wrong
let ourPromise = new Promise((resolve, reject) => {
    if(false) {
        resolve("All good");
    } else {
        reject("something went wrong");
    }
})

// execute a promise code 
// .then if successful
// .catch if there was an error
// ourPromise
//     .then(cb)
//     .catch(cb)

ourPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })