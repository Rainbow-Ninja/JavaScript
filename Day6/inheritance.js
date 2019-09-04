class Shape {

    static sayHi() {
        return "I'm a shape";
    }

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    isSquare() {
        this.width !== this.height? console.log("Not a square!") : console.log("This is a square");
    }
}

var sq = new Square(10, 10);
console.log(sq.area());
sq.isSquare();
console.log(Shape.sayHi());
console.log(Square.sayHi());