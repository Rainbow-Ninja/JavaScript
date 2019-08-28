// - Initialise an array named "arr", and it should contain the numbers 1, 2, 3, 4, 5.
// - Get the number at the last index of the array and add it to the number at the second last index.
// - Print the result.

let arr = [1, 2, 3, 4, 5];
let arrLength = arr.length;
let result = arr[arrLength-1] + arr[arrLength-2];
console.log(result);

// - Use a loop to print each value of the numbers array.

for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// - Use a loop to print each value of the numbers array in reverse without reversing the array.

for(i = arr.length -1; i > -1; i--){
    console.log(arr[i]);
}