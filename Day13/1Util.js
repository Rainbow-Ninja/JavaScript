const students = ["Jo", "EweLin", "Salman"];

const user = {
    name: "Jo",
    age: 18,
    hobbies: ["painting", "coding", "so many others"],
    pets: {
        cats: ["Nacho", "Taco"],
        fish: ["tetras", "sucker", "snail"]
    },
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}


// module.exports = students;
// module.exports = user;
module.exports = {students, user}; //gets sent as an object
