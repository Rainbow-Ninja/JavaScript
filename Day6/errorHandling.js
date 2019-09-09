// throw "something went wrong";

try{
    throw "something went wrong";
} catch(error) {
    console.log(error);
}

console.log("continue executing code");

//----------------------------------------------------------------

try {
    if(isNaN(10) || isNaN("number")){
        throw "please input number only";
    } else {
        return num1 + num2;
    }
} catch(error) {
    console.log(error);
}