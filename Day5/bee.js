/*
CHALLENGE 1: Construct a Bee
​
Using the provided code (see below), create a constructor appropriate for the various class functions.
Hunger should be lower if the bee has eaten lots of food. (0 = full, can't eat any more)
Same with thirst. (0 = full, can't drink any more)
​
*/
class Bee {
    constructor(name, positionX, positionY){
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    getCurrentPosition () {
        return (`The bee named ${this.name} is at coordinates X: ${this.positionX} , Y: ${this.positionY}`);
    }

    refillHunger () {
        this.hungerLevel = 0;
    }
    
    refillThirst () {
        this.thirstLevel = 0;
    }
    
    renameBee (newName) { 
        this.name = newName;
    }
    
    moveToPosition (newX, newY){
        this.positionX = newX;
        this.positionY = newY;
    }
}

var newBee = new Bee("Greg", 4, 4);
console.log(newBee.getCurrentPosition());
newBee.moveToPosition(10, 20);
console.log(newBee.getCurrentPosition());

/*
CHALLENGE 1.2: Queen Bee
Create a new QueenBee class that uses JavaScript class inheritance.
This class will inherit from your completed Bee class, and add new functions to the QueenBee class that covers the following:
- creates a new bee (give random values for things like name and position)
- adds the new bee to an array of bees stored in the QueenBee class
- print a list of all bees and their locations
*/

class QueenBee extends Bee{
    constructor(name, positionX, positionY){
        super(name, positionX, positionY);
        this.whereAbouts = [];
    }

    makeBee(name, positionX, positionY){
        let newBee = new Bee(name, positionX, positionY);
        this.whereAbouts.push(newBee);
    }

    allBees(){
        console.log("bzz all bees and their location are: ");
        for(let bee of this.whereAbouts){
            console.log(bee);
        }

    }
}

var newBee2 = new QueenBee("Pete", 5, 15)
var newBee = new QueenBee("Jo", 15, 5)
var blip = newBee2.makeBee("Pete", 5, 15);
newBee2.makeBee("Peta", 35, 15);
console.log(`~~~~~~~~~~~~~~~~~~~~~~this is newBee2: `);
console.log(newBee2);
console.log(`~~~~~~~~~~~~~~~~~~~~~~this is blip aka newBee2.makeBee: `);
console.log(blip);
console.log(`~~~~~~~~~~~~~~~~~~~~~~this is newBee2.allBees`);
console.log(newBee2.allBees());