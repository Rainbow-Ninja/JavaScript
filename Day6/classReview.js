// Option 1: ---------------------------------------------------------------

class Dog {
        
    //static makes this a class method
    static getDogCount() {
        console.log(`Total number of dogs: ${Dog.count}`);
    }

    constructor(name) {
        this.name = name;
        Dog.count++;
    }

}

Dog.count = 0; //one way to set a class variable

dog1 = new Dog("Rex");
dog2 = new Dog("Tommy");
Dog.getDogCount();

// Option 2: ---------------------------------------------------------------

class Dog {

    //internally create a setter
    static setDogCount() {
        Dog.count = 0;
    }
    
    //static makes this a class method
    static getDogCount() {
        console.log(`Total number of dogs: ${Dog.count}`);
    }

    constructor(name) {
        this.name = name;
        Dog.count++;
    }
}

Dog.setDogCount();

dog1 = new Dog("Rex");
dog2 = new Dog("Tommy");
Dog.getDogCount();