// - Initialise an array with the words "I", "LOVE", "JAVASCRIPT".
// - Assemble each word in the array into a single string using concatenation.
// - Print the resulting string to show that this works (do NOT print the array!).

const arr = ["I", "LOVE", "JAVASCRIPT"];
var string = "";
for(var word in arr){
    string += (arr[word] + " ");
}
console.log(string);