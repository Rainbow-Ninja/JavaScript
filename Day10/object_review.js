var person = {
    name: "Hayden",
    age: 572,
    hobbies: ["music", "coding", "dance"],
    address: {
        street: "118 Walker st",
        city: "Sydney",
        postCode: 2112
    },
    greet: function () {
        console.log(`hello ${this.name}`);
    }
}

person.name = "Alex";
person.greet();
// person.hobbies[3] = "karaoke";
person.hobbies.push("karaoke");
console.log(person);