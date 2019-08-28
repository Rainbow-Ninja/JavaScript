//DESTRUCTORING arrays
var gentechClass = ["Dave", "Huss", "Aidan", "Ewe-lin"];
var [first] = gentechClass;
console.log(first); //prints Dave

//--------------------
var [first, second] = gentechClass;
console.log(first); //prints Dave
console.log(second); //prints Huss
//---------------------------------------
var [first, second, ...others] = gentechClass; //could name it anything else other than others, its the ... thats important. Called the rest operator
console.log(others); //prints out ["Aidan", "Ewe-lin"]
//---------------------------------------
var gentechClass = ["Dave", "Huss", "Aidan", "Ewe-lin"];
var [...gentechCopy] = gentechClass //now i have a copy of gentechClass array that i can change without changing the original
//------------------------------
//detructuring objects----------
var people = {
    name: "Alex",
    age: 115,
    hobbies: "gaming",
    languages: ["c#", "ruby", "Js"]
}

// let {name} = people;
// console.log(name);
let {name, ...other} = people;
console.log(name);
console.log(other);

//now------

let {...peopleCopy} = people; //creates a copy I can change without changing original
people.name = "Salman";
console.log(people);
console.log(peopleCopy);

// let {name, ...elephant, age}; //this will break! ...needs to be the last thing in the list!

var superHeroesBirthPlace = {
    marvel: {
        spiderMan: "Brooklyn",
        ironMan: "America",
        thor: "asgard"
    },
    dc: {
        superMan: "Krypton",
        batMan: "Gotham",
        aquaMan: "Atlantas"
    }
}
let {marvel} = superHeroesBirthPlace;
console.log(marvel);
let { spiderMan } = superHeroesBirthPlace.marvel;
console.log(spiderMan);
var petAnimals = ["cat", "dog", "fish"];
var wildAnimals = ["tiger", "Lion", "Hippo"];
let allAnimals = [...petAnimals, ...wildAnimals]; //called spread operator here and smooshes them together
console.log(allAnimals);

let favColour = {
    philip: "blue",
    kats: "black",
    shun: "red"
}

//give them a defaults value in case it doesn't exist
let {philip = "white", kats = "white", shun = "white", garret = "green"} = favColour;
//this one line above is the same as the 4 lines below! 
// let philip = favColours.philip;
// let kats = favColours.kats;
// let shun = favColours.shun;
// let garret = "green";


console.log(philip, kats, shun, garret); //prints out blue black red green

