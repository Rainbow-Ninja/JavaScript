
// CHALLENGE 7: Node Phone Book
// ​
// Using Node, you can make a phone book app similar to what we've done with Ruby in the past. 
// Present the user with a few options:
// 1 - List all users in the phone book
// 2 - Search for a user in the phone book
//     - This will prompt the user to choose one of the following:
//         1 - Search by full name
//         2 - Search by first name
//         3 - Search by family name
//             - The user types in the respective name, and then you must loop through the phonebook and show all properties of only the entries that have a matching value
// 3 - Exit
// ​
// Separate the app's functionality into specific functions, such as "searchByFamilyName(familyName)".
// The app must repeat until the user selects "3 - Exit".
// ​
// ​
// */
// var templatePhoneBookEntry = {
//     "firstName": "John",
//     "lastName": "Smith",
//     "isAlive": true,
//     "age": 27,
//     "address": {
//       "streetAddress": "21 2nd Street",
//       "city": "New York",
//       "state": "NY",
//       "postalCode": "10021-3100"
//     },
//     "phoneNumbers": [
//       {
//         "type": "home",
//         "number": "212 555-1234"
//       },
//       {
//         "type": "office",
//         "number": "646 555-4567"
//       },
//       {
//         "type": "mobile",
//         "number": "123 456-7890"
//       }
//     ],
//     "children": [],
//     "spouse": null
//   }
// ​
// var phoneBook = []; // push new copies of the template entry into this array for the app to work

// var userSelection = prompt( "(1) - List all users in the phone book
// (2) - Search for a user in the phone book
//         - This will prompt the user to choose one of the following:
//             1 - Search by full name
//             2 - Search by first name
//             3 - Search by family name
//                 - The user types in the respective name, and then you must loop through the phonebook and show all properties of only the entries that have a matching value
//     3 - Exit")
var phoneBook = [];

function createPhoneEntry(firstName, lastName, isAlive, age, address, phoneNumbers, children, spouse){
    return {
        "firstName": null,
        "lastName": null,
        "isAlive": null,
        "age": null,
        "address": {
          "streetAddress": null,
          "city": null,
          "state": null,
          "postalCode": null
        },
        "phoneNumbers": [
          {
            "type": null,
            "number": null
          }
        ],
        "children": [],
        "spouse": null
      }
};

var userSelection = prompt("(1) List all users in the phone book. (2) Search for a user in the phone book or (3) Exit. Please select from 1, 2 or 3");
switch(userSelection){
    case "1":
        listAllUsers();
        break;
    case "2":
        searchUsers();
        break;
    case "3":
        console.log("Thank you for coming. Have a nice day");
        break;
}

function listAllUsers(){
    for ( let entry in phoneBook){
        console.log(`${phoneBook[entry][lastName]}, ${phoneBook[entry][firstName]}`);
    }
}

function whatToSearch(){
    return prompt("Would you like to search by: (1) Search by full name. (2) Search by first name. (3) Search by family name. Please enter 1, 2 or 3");
}

function searchUsers(){
    let whatToSearch = whatToSearch()
    switch(whatToSearch){
        case "1":
            fullNameSearch();
            break;
        case "2":
            firstNameSearch();
            break;
        case "3":
            familyNameSearch();
            break;
    }
}

function fullNameSearch(){

};

function firstNameSearch(){

};

function familyNameSearch(){

};
