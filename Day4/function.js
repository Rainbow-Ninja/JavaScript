function adder(x, y) {
    sum = x + y;
    return sum;
}

var total = adder(10, 20);
console.log(total);

function myArgs(){
    console.log(arguments);
}

myArgs(1, 2, 3, 4);

function myOtherArgs(x, ...otherArgs){
    console.log(x, otherArgs);
}

myOtherArgs("bob", "ross", "charlie");