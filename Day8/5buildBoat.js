var gotWood = true;
var builtBoat = true;
var sailedOcean = true;

function getWood(){
    return new Promise((resolve, reject) => {
        if(gotWood){
            resolve("we got wood!")
        } else {
            reject("we did not get wood");
        }
    })
}

function buildTheBoat(){
    return new Promise((resolve, reject) => {
        if(builtBoat){
            resolve("we built the boat");
        } else {
            reject("we stuffed up the boat");
        }
    })
}

function sailTheOcean(){
    return new Promise((resolve, reject) => {
        if(sailedOcean){
            resolve("we're sailing the ocean");
        } else {
            reject("we're sinking!");
        }
    })
}


getWood()
    .then(() => buildTheBoat())
    .then(() => sailTheOcean())
    .then(sailSuccess => console.log(sailSuccess))
    .catch(failure => console.log(failure));