var person = {
    firstName: "Alex",
    lastName: "Holder",
    fullName: function(){
        console.log(`hello ${this.firstName} ${this.lastName}`)
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName()); 
