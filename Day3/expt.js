var arr = [1, 2, 3, 4, 5, 6, 7];
var [first, second, elephant, third, ...whatevs] = arr;
console.log(first, second, elephant, third, whatevs);

let blackKitties = ["Taco", "Nacho"];
let whiteKitty = ["Barry"];
let allMyKitties = [...blackKitties, ...whiteKitty];
console.log(allMyKitties);

let favColours = {Jo: "rainbow", Roh: "black", Matt: "orange"};
// let {Matt} = favColours;
let {Matt = "white", Canada = "green"} = favColours;
console.log(Matt);
console.log(Canada);
console.log(favColours);

//----------------------------------------------------

let age = 19;
let allowed = (age >18)? true: false;

console.log(allowed);

//----------------------------------------------------
arr = []
num1 = "5.5";
num2 = 7;
num3 = parseFloat(num1)+num2;
console.log(num3);
arr.push(num1);
console.log(arr);
//----------------------------------------------------
