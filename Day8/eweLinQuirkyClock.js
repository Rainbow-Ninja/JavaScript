function isTimeEven(currentTime){
    var even
    if (currentTime % 2 == 0){
        even = true;
    } else {
        even = false;
    } 
    return new Promise ((resolve, reject) => {
        if (even){
            setTimeout(() => resolve("The time is EVEN!"), 10000);
        } else {
            setTimeout(() => reject("The time is ODD!"), 10000);
        }        
    })
}
var loading = "Loading"
var animation = setInterval(() => {
    console.clear();
    loading = loading.concat(".")
    console.log(loading)
}, 1000)
isTimeEven(Date.now())
    .then (result => {
        clearInterval(animation);
        console.log(result);
    })
    .catch(err => {
        clearInterval(animation);
        console.log(err);
    })