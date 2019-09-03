class Shape{
    constructor(sideLength){
        this.sideLength = sideLength;
    }
    squareArea(){
        return(`The area of your square is ${this.sideLength * this.sideLength}units squared`);
    }
}

square = new Shape(5);
console.log(square.squareArea());

Shape.prototype.something = "Something added to Shape";
console.log(square.something);