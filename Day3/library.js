// CHALLENGE 3 - Remove Duplicates From Array
// A librarian has entered every book that is in the library into their computer system. H
// owever, with so many titles, some errors have been made, and duplicates have been entered.
// ## 3.1 - Core Functionality
// Help the librarian by removing all duplicates from the system. 
// Using the variable below, write code that will loop through it and remove duplicates from the array.
// Do NOT use any built in array methods for this yet.
// let booksArray = ["Harry Potter", 
// "Star Trek Wars", 
// "Sydney Superheroes History Book", 
// "Myths & Legends: Bigfoot Edition", 
// "Harry Potter", 
// "Star Wars", 
// "Star Trek Wars",
// "Harry Potter 2",
// "Harry Potter"
// ]
// ## 3.2 - A Handful of Built-in Methods
// In Javascript ES6, there are at least 3 different ways to remove duplicate entries from an array.
// Find out and implement each of those 3 different ways - but don't modify the original array!
// You should be able to print out the following:
//     - The original array's contents
//     - The modified array's contents with natural language (eg. "The Set technique made this array: ${array contents stuff goes here}")
//     - The amount of duplicate entries that were removed from the modified array
// ## 3.3 - Method & User Prompt
// Turn the code from your solutions to the parts above into a method so that it can be triggered by other parts of code.
// Make it so that the code prompts the user to add a new book to the array.
// Once the user submits a new book into the array, run the "remove duplicates" code on the books array.
// Then, display the unique book titles to the user.

let booksArray = ["Harry Potter", 
"Star Trek Wars", 
"Sydney Superheroes History Book", 
"Myths & Legends: Bigfoot Edition", 
"Harry Potter", 
"Star Wars", 
"Star Trek Wars",
"Harry Potter 2",
"Harry Potter"
]

function removeDoubles(bookList) {
   let [...bookListCopy] = bookList;
   let uniqueBooks = [];
   while(bookListCopy.length > 0){
       if (uniqueBooks.includes(bookListCopy[0])){

       } else {
           uniqueBooks.push(bookListCopy[0]);
       }
       bookListCopy.shift();
   }
   return(uniqueBooks);
}

let myUniqueBooksArray = removeDoubles(booksArray);
console.log("-------------UNIQUE USING MY METHOD-------------");
console.log(myUniqueBooksArray);


//------------------------------------------------------------------
//-----USING A SET--------------------------------------------------

function removeWithSet(bookList) {
    const uniqueBookSet = new Set(bookList);
    const uniqueBookList = [...uniqueBookSet];
    return uniqueBookList;
}

let setUniqueBooksArray = removeWithSet(booksArray);
console.log("-------------UNIQUE USING SET-------------");
console.log(setUniqueBooksArray);

//------------------------------------------------------------------
//-----USING A FILTER-----------------------------------------------

function removeWithFilter(bookList) {
    var uniqueList = [];
    bookList.filter((book, index) => {
        if(bookList.indexOf(book)===index){
            uniqueList.push(book);
        }
    });
    return uniqueList;
}

let filterUniqueBooksArray = removeWithFilter(booksArray);
console.log("-------------UNIQUE USING FILTER-------------");
console.log(filterUniqueBooksArray);

//------------------------------------------------------------------
//-----USING A REDUCE-----------------------------------------------

function removeWithReduce(bookList) {
    var uniqueArr = bookList.reduce(function(unique, book) {
        if (unique.indexOf(book) === -1){
            unique.push(book);
        }
        return unique;
    }, [])
    return uniqueArr;
}

let reduceUniqueBooksArray = removeWithReduce(booksArray);
console.log("-------------UNIQUE USING REDUCE-------------");
console.log(reduceUniqueBooksArray);