function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

//instance of the function
var person1 = new Person("Bob", "Ross", 20);
console.log(person1.firstName);
console.log(person1.lastName);

// to add custom function to a function object use prototype keyword
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.fullName());
var person2 = new Person("Alex", "Holder", 18);
console.log(person2.fullName());

Person.prototype.height = "6ft"; //setting default value of 6ft, can still change on setting
console.log(person1.height);
person2.height = "5ft";
console.log(person2.height);