var jsonString = JSON.parse("[{\"name\":\"K.West\",\"nickname\":\"Ye\",\"dateOfBirth\":\"1977-06-08\"},{\"name\":\"A. Graham\",\"nickname\":\"Drake\",\"dateOfBirth\":\"1986-10-24\"}]");

console.log(jsonString);

console.log(jsonString[0].name);

var backToJson = JSON.stringify(jsonString);
console.log(backToJson);