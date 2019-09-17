// a synchronous func can be made asynchronous by adding async keyword in front of it
//async func always returns a promise
async function greet(){
    // return "hello";
    throw "broken";
}

greet()
    .then(m => console.log(m))
    .catch(err => console.log(err));