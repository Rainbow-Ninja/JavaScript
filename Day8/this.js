var person = {
    name: "Jo",
    lastName: "D",
    address: "Shire",
    fullName: () => {
        return this.name + " " + this.lastName;
    }
}

console.log(person.fullName());