// Inheritance Notes

class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    // getters
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    // methods
    logPosition() {
        console.log(`(${this._x}, ${this._y})`);
    }
}

class Circle extends Shape {
    constructor(x, y, r) {
        super(x, y);
        this._r = r;
    }
    
    get r() {
        return this._r;
    }
}

class Rectangle extends Shape {
    constructor(x, y, w, h) {
        super(x, y);
        this._w = w;
        this._h = h;
    }

    get w() {
        return this._w;
    }

    get h() {
        return this._h;
    }

    getArea() {
        return this._w * this._h;
    }
}

const myCircle = new Circle(100, 500, 75);
myCircle.logPosition();
console.log(`myCircle.r = ${myCircle.r}`);

const myRectangle = new Rectangle(45, 20, 4, 7.2);
myRectangle.logPosition();
console.log(`myRectangle Area = ${myRectangle.getArea()}`);
