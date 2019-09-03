
class Dog{
    constructor(name){
        this.name = name;
        Dog.count++;
    }    

    //this is a class method, so only the class can call it
    static dogCount(){ 
        console.log(`The dog count is ${Dog.count}`);
    }
}
Dog.count = 0;

var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

Dog.dogCount(); //only the class can call the class method!!