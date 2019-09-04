/*
CHALLENGE 2: Fruit Classes & Objects
Object instantiation is an incredibly powerful feature. 
If you think of fruit as a class, then an item such as an apple will only have a certain number of bites to it.
​
Create an object from a class named Fruit. 
Update a global variable in the Fruit class that keeps a list of all Fruit in existence - put the newly-created fruit object in that list.
When the object is instantiated from the class, set 3 properties on it (name, colour, bites). 
Also create a function in the class that when called, takes a bite of the fruit and decrements the bites property.
If there are no bites left:
    - remove the fruit object from the global Fruits list
    - log that the Fruit has been completely eaten
If the fruit's bites value is greater than 0:
    - log that the Fruit was delicious, and has ${bites} number of bites left
*/

class Fruit{

    constructor(name, colour, bites){
        this.name = name;
        this.colour = colour;
        this.bites = bites;
        Fruit.fruitCollection.push({name: this.name, colour: this.colour, bites: this.bites});
    }

    static setFruitArray(){
        Fruit.fruitCollection = [];
        console.log(Fruit.fruitCollection);
    }

    static getFruitArray(){
        console.log("Fruit array is: ")
        for(let fruit of Fruit.fruitCollection){
            console.log(fruit);
        }
    }

    deleteFruit(){
        console.log("I made it to deleteFruit()");
        if (this.bites > 0){
            console.log(` my name is ${this.name}`);
            return this.name;
        }
        console.log(`do i return anything ${this.name}`);
    }

    howManyBites(){
        this.bites--;
        console.log(`${this.name} has ${this.bites} bites left`);
        if(this.bites == 0){
            let tempArray = [];
            for(let fruit of Fruit.fruitCollection){
                if (fruit.bites <= 0){
                console.log("deleting a fruit!")
               } else {
                tempArray.push(fruit);
                console.log(`~~~~~~~~~${fruit.name}, which has ${fruit.bites} left, made it in safe`);
               }
            }
            console.log("temp array~~~~~~~~~~~~~~~~~~~~");
            console.log(tempArray );
            console.log("temp array~~~~~~~~~~~~~~~~~~~~");
            Fruit.fruitCollection = tempArray;
            console.log("all gone");
        } else {
            console.log(`The ${this.name} was delicious and has ${this.bites} left`);
        }
    }
}

Fruit.setFruitArray();

var apple = new Fruit("apple", "red", 12);
var banana = new Fruit("banana", "yellow", 7);
var mango = new Fruit("mango", "orangish", 25);
var blueberry = new Fruit("blueberry", "bluish", 1);
Fruit.getFruitArray();
blueberry.howManyBites();
console.log("----------------------");
Fruit.getFruitArray();
// apple.addFruitCollection();
// banana.addFruitCollection();
// mango.addFruitCollection();
// blueberry.addFruitCollection();
