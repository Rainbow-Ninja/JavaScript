// Using Date, promises & setTimeout, you need to find out what the current time is and determine if it ends in an even number.
// Then, build up some suspense! Make the user wait 3 seconds before telling them if the time is even or odd.
// Use resolve for even, reject for odd.

function timeNow(){
    let startTime = Date.now();
    return new Promise((resolve, reject) => {
        if(((Math.round(startTime/100))%2) === 0){
            resolve("The time now ends in an even number");
        } else {
            reject("The time now ends in an odd number");
        }
    })
}

timeNow()
    .then((even) => {
        setTimeout(function() {console.log(even);}, 3000);
    })
    .catch((odd) => {
        setTimeout(function() {console.log(odd);}, 3000);
    });