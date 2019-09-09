function person() {
    console.log("Normal Function");
}

() => {
    console.log("This is the arrow function");
}

// funtions are objects
// they can be passed to another function
// they can be part of an array
// can be part of an objects
// can be assigned to a var
// can be invoked

function person(function1){
    console.log("person function");
}

function function1() {
    console.log("another function");
}

person(function1);

//-------------------------------------------

function person(function1){
    console.log("person function");
}

person(function(){
    console.log("another function");
}) //creating a function on the fly

//------------------------------------------

function person(function1){
    console.log("person function");
}

person(() => {
    console.log("another function");
}) //creating a function on the fly with arrow

//------------------------------------------

let array = ["philip", "shun", "dan"];
function func1() {
    console.log("func 1");
}

function func2() {
    console.log("func2");
}

function func3() {
    console.log("func3");
}

let arrayOfFuncs = [func1, func2, func3];

arrayOfFuncs[0](); //invoking function 1 from the array!

//------------------------------------------------------------

//in classes and objects DONT use arrow function!!
var person = {
    furstName: "Hayden",
    lastName: "Fuller",
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

//------------------------------------------------------------

let name = "EweLin";
let greet = function() {
    console.log("hello");
}

greet();