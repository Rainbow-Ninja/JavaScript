let booksArray = ["Harry Potter", 
"Star Trek Wars", 
"Sydney Superheroes History Book", 
"Myths & Legends: Bigfoot Edition", 
"Harry Potter", 
"Star Wars", 
"Star Trek Wars",
"Harry Potter 2",
"Harry Potter"
];

function removeWithSet(bookList) {
    const uniqueBookSet = new Set(bookList);
    const uniqueBookList = [...uniqueBookSet];
    return uniqueBookList;
};

do{
    var response = prompt("Would you like to add a book to our library? If yes, type the book title, if no type 'no'");
    if(response != "no"){
        booksArray.push(response);
        let setUniqueBooksArray = removeWithSet(booksArray);
        console.log(setUniqueBooksArray);
    }
}while(response != "no");