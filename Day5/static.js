class Dog{
    constructor(name){
        this.name = name;
        this.count++;
    }    

    //this is a class method, so only the class can call it
    static dogCount(count){ 
        console.log(`The dog count is ${count}`);
    }
}

var dog1 = new Dog("Tommy");
var dog2 = new Dog("Rex");

Dog.dogCount(); //only the class can call the class method!!